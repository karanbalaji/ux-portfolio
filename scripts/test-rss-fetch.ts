#!/usr/bin/env tsx

/**
 * Test script to check RSS feed accessibility
 */

async function testRSSFetch() {
  console.log("🔍 Testing RSS feed accessibility...\n");

  const url = "https://blog.karanbalaji.com/rss.xml";

  try {
    console.log(`Fetching: ${url}`);

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
    });

    console.log(`\nStatus: ${response.status} ${response.statusText}`);
    console.log("\nHeaders:");
    response.headers.forEach((value, key) => {
      if (key.startsWith("x-vercel") || key === "content-type") {
        console.log(`  ${key}: ${value}`);
      }
    });

    const text = await response.text();
    const preview = text.substring(0, 200);

    console.log("\nContent Preview:");
    console.log(preview);

    if (text.includes("Vercel Security Checkpoint")) {
      console.log("\n❌ BLOCKED: Vercel Security Checkpoint is active");
      console.log(
        "\n✅ Solution: Use manual sync with browser-fetched RSS content"
      );
      console.log("   1. Open the RSS URL in your browser");
      console.log("   2. Copy the XML content");
      console.log("   3. Run: npm run sync:blog:manual rss-feed.xml");
    } else if (text.startsWith("<?xml") || text.startsWith("<rss")) {
      console.log("\n✅ SUCCESS: RSS feed is accessible!");
      console.log("   Automatic sync should work.");
    } else {
      console.log("\n⚠️  WARNING: Unexpected content type");
    }
  } catch (error) {
    console.error("\n❌ Error:", error);
  }
}

testRSSFetch();
