# 🚀 Production Deployment Guide

## Quick Start

Follow these steps in order:

### 1️⃣ Deploy Convex to Production

```bash
npx convex deploy --prod
```

**Output will show:**
```
✔ Deployment "prod:your-deployment-name" ready
Convex URL: https://your-prod-deployment.convex.cloud
```

**Action:** Copy the URL and update `.env.prod`

---

### 2️⃣ Set Convex Production Environment Variable

Go to: [Convex Dashboard](https://dashboard.convex.dev/d/tacit-elephant-15) → Settings → Environment Variables → **Production**

**Add:**
```
CLERK_JWT_ISSUER_DOMAIN=https://fine-chipmunk-3.clerk.accounts.dev
```

---

### 3️⃣ Get Clerk Production Keys

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Select your application
3. Go to **API Keys**
4. Copy **Production** keys:
   - `pk_live_...` → Update `.env.prod`
   - `sk_live_...` → Update `.env.prod`

---

### 4️⃣ Configure Clerk for Production Domain

**In Clerk Dashboard:**

1. **Domains** → Add:
   - `karanbalaji.com`

2. **Paths** → Configure:
   - Sign-in URL: `/admin/login`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/admin/dashboard`
   - Home URL: `https://karanbalaji.com`

3. **Allowed redirect URLs** → Add:
   - `https://karanbalaji.com/admin/login/sso-callback`
   - `https://karanbalaji.com/callback`

---

### 5️⃣ Seed Production Database

**Seed Projects:**
```bash
npx convex run --prod seedProjects:default
```

**Seed Blog Posts:**
```bash
npx convex run --prod blog:bulkCreatePosts '{
  "posts": [
    {
      "slug": "future-of-customers-ai-revolution-communities",
      "title": "The Future of Customers in the AI Revolution: Communities Will Be Key",
      "excerpt": "As AI continues to evolve, its making the process of creating products more accessible than ever.",
      "content": "As AI continues to evolve, its making the process of creating products more accessible than ever.",
      "publishedDate": "2024-12-12",
      "readTime": "8 min read",
      "category": "AI & Tech",
      "externalLink": "https://blog.karanbalaji.com/day-40-future-of-customers-in-the-ai-revolution-communities-will-be-key"
    },
    {
      "slug": "mastering-design-interviews-insights-google",
      "title": "Mastering Design Interviews: Insights from Google",
      "excerpt": "Design interviews are not just about answering questions; they are gateways to career opportunities and personal growth.",
      "content": "Design interviews are not just about answering questions; they are gateways to career opportunities and personal growth.",
      "publishedDate": "2023-10-17",
      "readTime": "6 min read",
      "category": "UX Design",
      "externalLink": "https://blog.karanbalaji.com/day-33-mastering-design-interviews-insights-from-google"
    },
    {
      "slug": "navigating-world-information-architecture",
      "title": "Navigating the World of Information Architecture",
      "excerpt": "Information Architecture acts as a roadmap for websites, making it an indispensable element for UX designers.",
      "content": "Information Architecture acts as a roadmap for websites, making it an indispensable element for UX designers.",
      "publishedDate": "2023-10-06",
      "readTime": "5 min read",
      "category": "Information Architecture",
      "externalLink": "https://blog.karanbalaji.com/day-21-navigating-the-world-of-information-architecture"
    }
  ]
}'
```

---

### 6️⃣ Set Environment Variables in Vercel

**Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

**Select:** Production Environment

**Copy all variables from `.env.prod` and paste them one by one**

Or use Vercel CLI:
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Link to your project
vercel link

# Set environment variables
vercel env add NEXT_PUBLIC_CONVEX_URL production
# (Paste value when prompted)

# Repeat for all variables in .env.prod
```

---

### 7️⃣ Deploy to Production

```bash
# Commit all changes
git add .
git commit -m "Production deployment ready: Convex + Clerk setup complete"

# Push to main branch
git push origin main
```

Vercel will automatically deploy.

---

### 8️⃣ Create Your Admin Account

**After deployment completes:**

1. Visit `https://karanbalaji.com/admin/login`
2. Sign up with your email
3. Complete authentication
4. Access admin dashboard

---

### 9️⃣ Verify Production

**Test these URLs:**

- ✅ `https://karanbalaji.com` → Homepage loads
- ✅ `https://karanbalaji.com/admin/login` → Clerk sign-in page
- ✅ `https://karanbalaji.com/admin/dashboard` → Dashboard (after login)
- ✅ `https://karanbalaji.com/admin/projects` → Projects admin
- ✅ `https://karanbalaji.com/admin/blog` → Blog admin
- ✅ `https://karanbalaji.com/projects/fintechtoronto` → Project page

**Check for errors:**
- Open browser console (F12)
- Look for any red errors
- Verify Convex queries are working

---

## 🔧 Troubleshooting

### Issue: "Module not found" errors
**Fix:** Ensure all imports use `@/../convex/_generated/api`

### Issue: Clerk authentication fails
**Fix:**
- Verify production Clerk keys in Vercel
- Check Clerk domain is configured
- Ensure redirect URLs are whitelisted

### Issue: Convex queries return undefined
**Fix:**
- Check `NEXT_PUBLIC_CONVEX_URL` in Vercel
- Verify production database is seeded
- Redeploy if env vars were added after initial deploy

### Issue: Environment variables not updating
**Fix:**
- After adding new env vars in Vercel, trigger a new deployment
- Or run: `vercel --prod`

---

## 📋 Post-Deployment Checklist

- [ ] Convex deployed to production
- [ ] Production Convex URL in Vercel env vars
- [ ] Clerk production keys in Vercel
- [ ] Clerk domain configured for karanbalaji.com
- [ ] Clerk redirect URLs whitelisted
- [ ] CLERK_JWT_ISSUER_DOMAIN set in Convex dashboard
- [ ] Production database seeded (projects + blog)
- [ ] Code pushed to GitHub
- [ ] Vercel deployment successful
- [ ] Admin account created
- [ ] All critical pages tested
- [ ] No console errors

---

## 🎉 You're Live!

Once all checkboxes are complete, your site is production-ready at `https://karanbalaji.com`!

### Useful Commands

```bash
# View production logs
npx convex logs --prod

# Run function on production
npx convex run --prod <functionName> <args>

# Open production dashboard
npx convex dashboard --prod

# Redeploy Vercel
vercel --prod
```

### Monitoring

- **Convex Dashboard:** https://dashboard.convex.dev/d/tacit-elephant-15
- **Clerk Dashboard:** https://dashboard.clerk.com/
- **Vercel Dashboard:** https://vercel.com/
- **PostHog Analytics:** https://app.posthog.com/

---

**Need help?** Check the logs in Convex and Vercel dashboards for detailed error messages.
