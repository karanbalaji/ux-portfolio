# Blog RSS Sync Documentation

## Overview

This document explains how to sync blog posts from your external blog (`blog.karanbalaji.com`) to the Convex database via RSS feed.

---

## The Problem: Vercel Security Checkpoint

Your blog's RSS feed (`https://blog.karanbalaji.com/rss.xml`) is protected by Vercel Security Checkpoint, which blocks automated/programmatic access. This prevents the automatic cron job from syncing blog posts.

**Error symptoms:**
- Automatic sync fails daily
- Fetching RSS feed returns HTML instead of XML
- "Vercel Security Checkpoint" message appears

---

## Solutions

### ✅ Solution 1: Disable Security Checkpoint for RSS Feed (Recommended)

This allows automatic syncing to work without manual intervention.

**Steps:**

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to your **blog project** (blog.karanbalaji.com)
3. Go to **Settings** → **Security**
4. Find the "Security Checkpoint" or "Attack Challenge Mode" section
5. Add `/rss.xml` to the **bypass list** or **allowlist**
   - This ensures RSS feed requests bypass the security checkpoint
   - Other paths remain protected
6. Save and redeploy if necessary

**After configuration:**
- Automatic cron sync will work daily at 6 AM UTC
- No manual intervention needed
- Blog posts sync automatically

---

### 🔧 Solution 2: Manual Sync (Quick Workaround)

Use this when you can't configure Vercel settings immediately.

#### Method A: Using Browser to Copy RSS Content

1. **Get RSS Content:**
   ```bash
   # Open in your browser (you'll pass the checkpoint):
   https://blog.karanbalaji.com/rss.xml

   # View page source (Ctrl+U / Cmd+Option+U)
   # Copy all XML content
   # Save to a file: rss-feed.xml
   ```

2. **Run Manual Sync:**
   ```bash
   npm run sync:blog:manual rss-feed.xml
   ```

3. **Verify Results:**
   ```bash
   # Check Convex dashboard or run:
   npx convex run blog:getPosts
   ```

#### Method B: Using stdin

```bash
# Paste RSS content directly
npm run sync:blog:manual
# (Paste XML, then press Ctrl+D)
```

---

### 🤖 Solution 3: Use Convex Dashboard

You can also trigger the manual sync action directly from Convex Dashboard:

1. Open [Convex Dashboard](https://dashboard.convex.dev)
2. Navigate to your project
3. Go to **Functions** → `syncBlog` → `syncFromRSSText`
4. Provide the RSS XML content as the `rssXml` parameter
5. Click **Run**

---

## Automatic Sync (How It Works)

Once the security checkpoint is bypassed, the automatic sync runs:

**Schedule:** Daily at 6:00 AM UTC

**Cron Configuration** (convex/crons.ts):
```typescript
crons.daily(
  "sync blog posts",
  { hourUTC: 6, minuteUTC: 0 },
  internal.syncBlog.syncFromRSSInternal
);
```

**What it does:**
1. Fetches RSS feed from `https://blog.karanbalaji.com/rss.xml`
2. Parses XML to extract blog post data
3. Inserts new posts to Convex
4. Updates existing posts if content changed
5. Skips unchanged posts

**Sync Results:**
- ✅ **Inserted**: New blog posts added
- 🔄 **Updated**: Existing posts with content changes
- ⏭️ **Skipped**: Posts with no changes

---

## Manual Sync Commands

### Trigger Automatic Sync (Requires RSS access)
```bash
npm run sync:blog
```

### Manual Sync from File
```bash
npm run sync:blog:manual rss-feed.xml
```

### Manual Sync from stdin
```bash
cat rss-feed.xml | npm run sync:blog:manual
```

---

## Troubleshooting

### Error: "Failed to fetch RSS feed"

**Cause:** RSS feed is blocked by security checkpoint

**Solutions:**
1. Configure Vercel to bypass checkpoint (Solution 1)
2. Use manual sync (Solution 2)

### Error: "No posts found in RSS XML"

**Cause:** Invalid RSS format or HTML returned instead of XML

**Check:**
```bash
# View what's being fetched:
curl https://blog.karanbalaji.com/rss.xml | head -20
```

**Expected:** Should start with `<?xml` or `<rss`
**Problem:** Starts with `<!DOCTYPE html>` (checkpoint page)

### Error: "Slug already exists"

**Cause:** Trying to insert duplicate posts

**Solution:** The sync logic handles this automatically by updating instead of inserting.

---

## RSS Feed Format Expected

Your RSS feed should follow this structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog Title</title>
    <link>https://blog.karanbalaji.com</link>
    <description>Blog Description</description>
    <item>
      <title>Post Title</title>
      <link>https://blog.karanbalaji.com/post-slug</link>
      <pubDate>Wed, 12 Jan 2024 12:00:00 GMT</pubDate>
      <description>Post excerpt</description>
      <content:encoded><![CDATA[Full HTML content]]></content:encoded>
      <category>Category Name</category>
    </item>
    <!-- More items -->
  </channel>
</rss>
```

**Fields Extracted:**
- `title` → Blog post title
- `link` → External link to blog post
- `pubDate` → Published date
- `description` → Excerpt
- `content:encoded` → Full content (fallback to description)
- `category` → Primary category

**Generated Fields:**
- `slug` → Auto-generated from link or title
- `readTime` → Estimated from content length

---

## Code Reference

### Files Related to RSS Sync

1. **convex/syncBlog.ts** - Main sync logic
   - `syncFromRSS` - Public action (manual trigger)
   - `syncFromRSSText` - Public action (manual with XML)
   - `syncFromRSSInternal` - Internal action (cron trigger)
   - `storePosts` - Internal mutation (store in DB)

2. **convex/crons.ts** - Cron job configuration

3. **convex/blog.ts** - Blog queries and mutations

4. **scripts/sync-blog-manual.ts** - Manual sync helper script

---

## Vercel Security Checkpoint Details

**What is it?**
Vercel's security feature that blocks suspected bot traffic using JavaScript challenges and cookies.

**Why it blocks RSS syncs:**
- Server-side fetches don't execute JavaScript
- No browser cookies/session
- Automated requests look like bots

**How to bypass:**
1. **Allowlist specific paths** (like `/rss.xml`)
2. **Disable for specific routes**
3. **Use manual workarounds** (copy/paste from browser)

---

## Next Steps

1. **Immediate Fix:**
   - Use manual sync: `npm run sync:blog:manual rss-feed.xml`

2. **Permanent Solution:**
   - Configure Vercel to bypass security checkpoint for `/rss.xml`
   - Automatic syncs will resume

3. **Verify:**
   - Check Convex dashboard for blog posts
   - Test on your portfolio site

---

## Related Documentation

- [Convex Setup](./CONVEX_SETUP.md)
- [Adding New Projects](./ADDING_NEW_PROJECTS.md)

---

**Questions?** Check logs in Convex dashboard or run `npm run sync:blog` to see detailed error messages.
