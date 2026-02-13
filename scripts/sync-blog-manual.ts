#!/usr/bin/env tsx

/**
 * Manual Blog RSS Sync Script
 *
 * This script manually syncs blog posts from the RSS feed to Convex.
 * Use this when the automatic sync fails due to Vercel Security Checkpoint.
 *
 * Usage:
 *   1. Open https://blog.karanbalaji.com/rss.xml in your browser
 *   2. Copy the entire RSS XML content
 *   3. Save it to a file (e.g., rss-feed.xml)
 *   4. Run: npm run sync:blog:manual rss-feed.xml
 *
 * Or provide RSS content via stdin:
 *   cat rss-feed.xml | npm run sync:blog:manual
 */

import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api.js";
import * as fs from "fs";

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || process.env.CONVEX_URL;

if (!CONVEX_URL) {
  console.error("❌ Error: CONVEX_URL not found in environment variables");
  process.exit(1);
}

async function syncBlogFromRSSText(rssXml: string) {
  const client = new ConvexHttpClient(CONVEX_URL!);

  console.log("📡 Syncing blog posts to Convex...");

  try {
    const result: any = await client.action(api.syncBlog.syncFromRSSText, {
      rssXml,
    });

    if (result.success) {
      console.log("\n✅ Sync completed successfully!");
      console.log(`   📝 Inserted: ${result.inserted} new posts`);
      console.log(`   🔄 Updated: ${result.updated} posts`);
      console.log(`   ⏭️  Skipped: ${result.skipped} unchanged posts`);
      console.log(`\n${result.message}`);
    } else {
      console.error("\n❌ Sync failed:", result.error);
      process.exit(1);
    }
  } catch (error) {
    console.error("\n❌ Error during sync:", error);
    process.exit(1);
  }
}

async function main() {
  const args = process.argv.slice(2);

  let rssXml: string;

  if (args.length > 0) {
    // Read from file
    const filePath = args[0];
    console.log(`📂 Reading RSS feed from: ${filePath}`);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }

    rssXml = fs.readFileSync(filePath, "utf-8");
  } else {
    // Read from stdin
    console.log("📥 Reading RSS feed from stdin...");
    console.log("   (Paste RSS XML content, then press Ctrl+D)");

    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    rssXml = Buffer.concat(chunks).toString("utf-8");
  }

  if (!rssXml.trim()) {
    console.error("❌ No RSS content provided");
    process.exit(1);
  }

  // Validate it looks like RSS
  if (!rssXml.includes("<rss") && !rssXml.includes("<feed")) {
    console.error("❌ Content doesn't appear to be RSS/Atom XML");
    process.exit(1);
  }

  await syncBlogFromRSSText(rssXml);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
