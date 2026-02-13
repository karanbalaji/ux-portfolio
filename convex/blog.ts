import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getPosts = query({
  args: {
    limit: v.optional(v.number())
  },
  handler: async (ctx, args) => {
    // Order by publishedDate (most recent first)
    let query = ctx.db
      .query("blog_posts")
      .withIndex("by_publishedDate")
      .order("desc");

    if (args.limit) {
      return await query.take(args.limit);
    }
    return await query.collect();
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blog_posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const createPost = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    publishedDate: v.string(),
    readTime: v.string(),
    category: v.string(),
    coverImage: v.optional(v.string()),
    externalLink: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if slug exists
    const existing = await ctx.db
      .query("blog_posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existing) {
      throw new Error("Slug already exists");
    }

    return await ctx.db.insert("blog_posts", args);
  },
});

export const getPostById = query({
  args: { id: v.id("blog_posts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const bulkCreatePosts = mutation({
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
        externalLink: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, args) => {
    for (const post of args.posts) {
      const existing = await ctx.db
        .query("blog_posts")
        .withIndex("by_slug", (q) => q.eq("slug", post.slug))
        .first();

      if (!existing) {
        await ctx.db.insert("blog_posts", post);
      }
    }
  },
});

export const updatePost = mutation({
  args: {
    id: v.id("blog_posts"),
    slug: v.optional(v.string()),
    title: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    publishedDate: v.optional(v.string()),
    readTime: v.optional(v.string()),
    category: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    externalLink: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
    return { success: true };
  },
});

export const deletePost = mutation({
  args: { id: v.id("blog_posts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return { success: true };
  },
});
