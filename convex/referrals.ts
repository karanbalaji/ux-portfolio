import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getActiveReferrals = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("referrals")
      .withIndex("by_isActive", (q) => q.eq("isActive", true))
      .order("asc")
      .collect();
  },
});

export const getReferralsByCategory = query({
  args: {
    category: v.string(),
  },
  handler: async (ctx, args) => {
    if (args.category === "all") {
      return await ctx.db
        .query("referrals")
        .withIndex("by_isActive", (q) => q.eq("isActive", true))
        .order("asc")
        .collect();
    }
    return await ctx.db
      .query("referrals")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .filter((q) => q.eq(q.field("isActive"), true))
      .order("asc")
      .collect();
  },
});

export const getAllReferrals = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("referrals")
      .order("asc")
      .collect();
  },
});

export const getReferralBySlug = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("referrals")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const createReferral = mutation({
  args: {
    slug: v.string(),
    company: v.string(),
    description: v.string(),
    referralUrl: v.string(),
    category: v.string(),
    logoUrl: v.optional(v.string()),
    lucideIcon: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("referrals")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existing) {
      throw new Error("Referral with this slug already exists");
    }

    const count = await ctx.db.query("referrals").collect();
    const order = args.order ?? count.length;

    return await ctx.db.insert("referrals", {
      slug: args.slug,
      company: args.company,
      description: args.description,
      referralUrl: args.referralUrl,
      category: args.category,
      logoUrl: args.logoUrl,
      lucideIcon: args.lucideIcon,
      isActive: true,
      clicks: 0,
      createdAt: Date.now(),
      order,
    });
  },
});

export const updateReferral = mutation({
  args: {
    id: v.id("referrals"),
    slug: v.optional(v.string()),
    company: v.optional(v.string()),
    description: v.optional(v.string()),
    referralUrl: v.optional(v.string()),
    category: v.optional(v.string()),
    logoUrl: v.optional(v.string()),
    lucideIcon: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    
    const existing = await ctx.db.get(id);
    if (!existing) {
      throw new Error("Referral not found");
    }

    if (args.slug && args.slug !== existing.slug) {
      const slugExists = await ctx.db
        .query("referrals")
        .withIndex("by_slug", (q) => q.eq("slug", args.slug!))
        .first();
      if (slugExists) {
        throw new Error("Referral with this slug already exists");
      }
    }

    const cleanUpdates: Record<string, any> = {};
    for (const [key, value] of Object.entries(updates)) {
      if (value !== undefined) {
        cleanUpdates[key] = value;
      }
    }

    return await ctx.db.patch(id, cleanUpdates);
  },
});

export const deleteReferral = mutation({
  args: {
    id: v.id("referrals"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

export const incrementClicks = mutation({
  args: {
    id: v.id("referrals"),
  },
  handler: async (ctx, args) => {
    const referral = await ctx.db.get(args.id);
    if (!referral) {
      throw new Error("Referral not found");
    }
    return await ctx.db.patch(args.id, {
      clicks: referral.clicks + 1,
    });
  },
});

export const toggleActive = mutation({
  args: {
    id: v.id("referrals"),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      isActive: args.isActive,
    });
  },
});
