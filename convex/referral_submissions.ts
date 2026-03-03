import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getSubmissions = query({
  args: {
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.status && args.status !== "all") {
      return await ctx.db
        .query("referral_submissions")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }
    return await ctx.db
      .query("referral_submissions")
      .order("desc")
      .collect();
  },
});

export const getPendingSubmissions = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("referral_submissions")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .order("desc")
      .collect();
  },
});

export const createSubmission = mutation({
  args: {
    company: v.string(),
    description: v.string(),
    referralUrl: v.string(),
    category: v.string(),
    logoUrl: v.optional(v.string()),
    lucideIcon: v.optional(v.string()),
    submitterName: v.optional(v.string()),
    submitterEmail: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("referral_submissions", {
      ...args,
      status: "pending",
      submittedAt: Date.now(),
    });
  },
});

export const approveSubmission = mutation({
  args: {
    id: v.id("referral_submissions"),
    slug: v.string(),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const submission = await ctx.db.get(args.id);
    if (!submission) {
      throw new Error("Submission not found");
    }

    const existingReferral = await ctx.db
      .query("referrals")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existingReferral) {
      throw new Error("Referral with this slug already exists");
    }

    const count = await ctx.db.query("referrals").collect();
    const order = args.order ?? count.length;

    await ctx.db.insert("referrals", {
      slug: args.slug,
      company: submission.company,
      description: submission.description,
      referralUrl: submission.referralUrl,
      category: submission.category,
      logoUrl: submission.logoUrl,
      lucideIcon: submission.lucideIcon,
      isActive: true,
      clicks: 0,
      createdAt: Date.now(),
      order,
    });

    return await ctx.db.patch(args.id, {
      status: "approved",
      reviewedAt: Date.now(),
    });
  },
});

export const rejectSubmission = mutation({
  args: {
    id: v.id("referral_submissions"),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      status: "rejected",
      reviewedAt: Date.now(),
      notes: args.notes,
    });
  },
});

export const deleteSubmission = mutation({
  args: {
    id: v.id("referral_submissions"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
