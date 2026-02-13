import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Blog Posts Table
  blog_posts: defineTable({
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    content: v.string(), // HTML or Markdown
    publishedDate: v.string(),
    readTime: v.string(),
    category: v.string(),
    coverImage: v.optional(v.string()),
    externalLink: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  })
  .index("by_slug", ["slug"])
  .index("by_publishedDate", ["publishedDate"]),

  // Projects Table
  projects: defineTable({
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    coverImage: v.string(),
    liveUrl: v.string(),
    githubUrl: v.optional(v.string()),
    figmaUrl: v.optional(v.string()),
    order: v.number(),
    
    // Table of Contents Data
    toc: v.array(
      v.object({
        id: v.string(),
        label: v.string(),
        subsections: v.array(
          v.object({
            id: v.string(),
            label: v.string(),
          })
        ),
      })
    ),

    // Dynamic Sections Data
    sections: v.array(
      v.object({
        type: v.string(), // e.g., 'hero', 'executive-summary', 'features'
        // We use a flexible 'any' or stringified JSON for component-specific data
        // because strict validation for every single component type can get verbose here.
        content: v.string(), 
      })
    ),
  })
  .index("by_slug", ["slug"])
  .index("by_order", ["order"]),

  // Contacts / Messages
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    submittedAt: v.number(),
    status: v.string(), // 'new', 'read', 'archived'
  }),
});
