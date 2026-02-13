import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// Sync blog posts from RSS feed every day at 6 AM UTC
crons.daily(
  "sync blog posts",
  { hourUTC: 6, minuteUTC: 0 },
  internal.syncBlog.syncFromRSSInternal
);

export default crons;
