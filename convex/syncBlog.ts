import { action, internalAction, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

// Public action to manually trigger sync
export const syncFromRSS = action({
  args: {},
  handler: async (ctx): Promise<{ success: boolean; message: string; inserted: number; updated: number; skipped: number } | { success: boolean; error: string }> => {
    return await ctx.runAction(internal.syncBlog.syncFromRSSInternal, {});
  },
});

// Public action to manually upload RSS XML (for when feed is blocked)
export const syncFromRSSText = action({
  args: {
    rssXml: v.string(),
  },
  handler: async (ctx, args): Promise<{ success: boolean; message: string; inserted: number; updated: number; skipped: number } | { success: boolean; error: string }> => {
    try {
      // Parse the provided RSS XML
      const posts = parseRSSFeed(args.rssXml);

      if (posts.length === 0) {
        return {
          success: false,
          error: "No posts found in RSS XML. Please check the format.",
        };
      }

      // Store posts in Convex
      const result: { inserted: number; updated: number; skipped: number } = await ctx.runMutation(internal.syncBlog.storePosts, {
        posts,
      });

      return {
        success: true,
        message: `Synced ${result.inserted} new posts, updated ${result.updated}, skipped ${result.skipped}`,
        ...result,
      };
    } catch (error) {
      console.error("RSS sync error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// Internal action to fetch and parse RSS feed (called by cron)
export const syncFromRSSInternal = internalAction({
  args: {},
  handler: async (ctx): Promise<{ success: boolean; message: string; inserted: number; updated: number; skipped: number } | { success: boolean; error: string }> => {
    try {
      // Fetch RSS feed with headers to bypass Vercel Security Checkpoint
      const response = await fetch("https://blog.karanbalaji.com/rss.xml", {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
      }

      const rssText = await response.text();

      // Check if we got HTML instead of XML (Vercel checkpoint)
      if (rssText.includes('Vercel Security Checkpoint') || rssText.includes('<!DOCTYPE html>')) {
        throw new Error('RSS feed is blocked by Vercel Security Checkpoint. Please use syncFromRSSText action manually or configure your blog to allow RSS access.');
      }

      // Simple RSS parser (we'll use a lightweight approach)
      const posts = parseRSSFeed(rssText);

      // Store posts in Convex using internal mutation
      const result: { inserted: number; updated: number; skipped: number } = await ctx.runMutation(internal.syncBlog.storePosts, {
        posts,
      });

      return {
        success: true,
        message: `Synced ${result.inserted} new posts, updated ${result.updated}, skipped ${result.skipped}`,
        ...result,
      };
    } catch (error) {
      console.error("RSS sync error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// Internal mutation to store posts (called by action)
export const storePosts = internalMutation({
  args: {
    posts: v.array(
      v.object({
        slug: v.string(),
        title: v.string(),
        excerpt: v.string(),
        content: v.string(),
        publishedDate: v.string(),
        readTime: v.string(),
        category: v.string(),
        coverImage: v.optional(v.string()),
        externalLink: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    let inserted = 0;
    let updated = 0;
    let skipped = 0;

    for (const post of args.posts) {
      const existing = await ctx.db
        .query("blog_posts")
        .withIndex("by_slug", (q) => q.eq("slug", post.slug))
        .first();

      if (!existing) {
        await ctx.db.insert("blog_posts", post);
        inserted++;
        console.log(`✅ Inserted: ${post.title}`);
      } else {
        // Update existing post if content changed
        const hasChanged =
          existing.title !== post.title ||
          existing.excerpt !== post.excerpt ||
          existing.content !== post.content;

        if (hasChanged) {
          await ctx.db.patch(existing._id, post);
          updated++;
          console.log(`🔄 Updated: ${post.title}`);
        } else {
          skipped++;
          console.log(`⏭️  Skipped (unchanged): ${post.title}`);
        }
      }
    }

    return { inserted, updated, skipped };
  },
});

// Helper function to parse RSS feed
function parseRSSFeed(rssText: string) {
  const posts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishedDate: string;
    readTime: string;
    category: string;
    coverImage?: string;
    externalLink: string;
  }> = [];

  // Extract items from RSS
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = rssText.match(itemRegex) || [];

  for (const item of items) {
    // Extract fields using regex
    const title = extractTag(item, "title");
    const link = extractTag(item, "link");
    const pubDate = extractTag(item, "pubDate");
    const description = extractTag(item, "description");
    const content = extractTag(item, "content:encoded") || description;
    const categories = extractAllTags(item, "category");

    if (!title || !link) continue;

    // Generate slug from link or title
    const slug = generateSlug(link, title);

    // Estimate read time from content length
    const readTime = estimateReadTime(content);

    // Get primary category
    const category = categories[0] || "Uncategorized";

    posts.push({
      slug,
      title: cleanText(title),
      excerpt: cleanText(description).substring(0, 200) + "...",
      content: cleanText(content),
      publishedDate: formatDate(pubDate),
      readTime,
      category: cleanText(category),
      externalLink: link,
    });
  }

  return posts;
}

// Helper functions
function extractTag(xml: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, "i");
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}

function extractAllTags(xml: string, tagName: string): string[] {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, "gi");
  const matches = xml.match(regex) || [];
  return matches.map((m) => extractTag(m, tagName));
}

function generateSlug(link: string, title: string): string {
  // Try to extract slug from URL
  const urlParts = link.split("/");
  const lastPart = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2];

  if (lastPart && lastPart.length > 3) {
    return lastPart.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  }

  // Fallback to title-based slug
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 60);
}

function cleanText(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "") // Remove HTML tags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

function formatDate(pubDate: string): string {
  try {
    const date = new Date(pubDate);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD format
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200); // Average reading speed
  return `${minutes} min read`;
}
