import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Blog data from /public/blog-data.json (generated from RSS feed)
const blogPosts = [
  {
    slug: "future-of-customers-ai-revolution-communities",
    title: "The Future of Customers in the AI Revolution: Communities Will Be Key",
    excerpt: "As AI continues to evolve, its making the process of creating products more accessible than ever. However, this newfound simplicity is shifting the challenge from how to create to how to acquire and retain customers.",
    content: "", // Can be populated later from RSS if needed
    publishedDate: "2024-12-12",
    readTime: "8 min read",
    category: "AI & Tech",
    externalLink: "https://blog.karanbalaji.com/day-40-future-of-customers-in-the-ai-revolution-communities-will-be-key",
  },
  {
    slug: "mastering-design-interviews-insights-google",
    title: "Mastering Design Interviews: Insights from Google",
    excerpt: "Design interviews are not just about answering questions; they are gateways to career opportunities and personal growth. Join me as I share invaluable insights from my mentorship session with Alex Small, a distinguished Staff Interaction Designer and Design Manager at Google.",
    content: "",
    publishedDate: "2023-10-17",
    readTime: "6 min read",
    category: "UX Design",
    externalLink: "https://blog.karanbalaji.com/day-33-mastering-design-interviews-insights-from-google",
  },
  {
    slug: "navigating-world-information-architecture",
    title: "Navigating the World of Information Architecture",
    excerpt: "Information Architecture acts as a roadmap for websites, making it an indispensable element for UX designers. Understanding the difference between Information Architecture and navigation is essential for effective website structuring.",
    content: "",
    publishedDate: "2023-10-06",
    readTime: "5 min read",
    category: "Information Architecture",
    externalLink: "https://blog.karanbalaji.com/day-21-navigating-the-world-of-information-architecture",
  },
];

export default mutation({
  args: {},
  handler: async (ctx) => {
    let inserted = 0;
    let skipped = 0;

    for (const post of blogPosts) {
      // Check if post already exists
      const existing = await ctx.db
        .query("blog_posts")
        .withIndex("by_slug", (q) => q.eq("slug", post.slug))
        .first();

      if (!existing) {
        await ctx.db.insert("blog_posts", post);
        inserted++;
        console.log(`✅ Inserted: ${post.title}`);
      } else {
        skipped++;
        console.log(`⏭️  Skipped (exists): ${post.title}`);
      }
    }

    return {
      success: true,
      message: `Blog seeding complete: ${inserted} inserted, ${skipped} skipped`,
      inserted,
      skipped,
    };
  },
});
