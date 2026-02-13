# Convex Fresh Installation - Complete

## ✅ Installation Summary

Convex has been freshly installed and configured in your Next.js application.

### What Was Done

1. **Uninstalled** the previous Convex installation
2. **Reinstalled** Convex package (`convex@^1.31.7`)
3. **Initialized** a new Convex project: `karanbalji-com`
4. **Configured** environment variables in `.env.local`
5. **Verified** schema and type generation

---

## 🔧 Configuration Details

### Project Information
- **Project Name**: `karanbalji-com`
- **Team**: `karanarjunb`
- **Deployment**: `dev:tacit-elephant-15`
- **Dashboard**: https://dashboard.convex.dev/d/tacit-elephant-15

### Environment Variables (`.env.local`)
```env
CONVEX_DEPLOYMENT=dev:tacit-elephant-15
NEXT_PUBLIC_CONVEX_URL=https://tacit-elephant-15.convex.cloud
NEXT_PUBLIC_CONVEX_SITE_URL=https://tacit-elephant-15.convex.site
```

### Database Schema
Your Convex schema includes three tables:
- **blog_posts**: Blog content with slug indexing
- **projects**: Portfolio projects with slug and order indexing
- **contacts**: Contact form submissions

---

## 🚀 Available Scripts

### Development
```bash
# Run Convex dev server only
npm run convex:dev

# Run both Next.js and Convex dev servers
npm run dev:all

# Run Next.js only
npm run dev
```

### Deployment
```bash
# Deploy to production
npm run convex:deploy
```

### Data Seeding
```bash
# Seed blog posts
npm run seed:blog

# Seed projects
npm run seed:projects
```

---

## 📁 Project Structure

```
ux-portfolio/
├── convex/
│   ├── _generated/        # Auto-generated types (DO NOT EDIT)
│   ├── blog.ts           # Blog queries/mutations
│   ├── contacts.ts       # Contact form handlers
│   ├── projects.ts       # Project queries/mutations
│   ├── schema.ts         # Database schema definition
│   └── tsconfig.json     # Convex TypeScript config
├── src/
│   ├── components/
│   │   └── ConvexClientProvider.tsx  # Convex React provider
│   └── app/
│       └── layout.tsx    # Root layout with ConvexClientProvider
├── convex.json           # Convex configuration
└── .env.local           # Environment variables
```

---

## 💻 Using Convex in Your App

### 1. Querying Data (Client Component)
```tsx
"use client";

import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";

export function BlogList() {
  const posts = useQuery(api.blog.getAllPosts);
  
  if (!posts) return <div>Loading...</div>;
  
  return (
    <div>
      {posts.map(post => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### 2. Mutations (Client Component)
```tsx
"use client";

import { useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";

export function ContactForm() {
  const submitContact = useMutation(api.contacts.create);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitContact({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello!"
    });
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### 3. Server-Side Data Fetching
```tsx
import { fetchQuery } from "convex/nextjs";
import { api } from "@/../convex/_generated/api";

export default async function Page() {
  const posts = await fetchQuery(api.blog.getAllPosts);
  
  return (
    <div>
      {posts.map(post => (
        <article key={post._id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
```

---

## 🔐 Best Practices

### 1. **Use TypeScript Types**
The `_generated` folder contains auto-generated types. Import from:
```typescript
import { api } from "@/../convex/_generated/api";
import { Id } from "@/../convex/_generated/dataModel";
```

### 2. **Schema Validation**
Always define your schema in `convex/schema.ts` using validators:
```typescript
import { v } from "convex/values";

defineTable({
  name: v.string(),
  email: v.string(),
  age: v.number(),
  isActive: v.boolean(),
})
```

### 3. **Indexing**
Add indexes for frequently queried fields:
```typescript
.index("by_email", ["email"])
.index("by_status", ["status", "_creationTime"])
```

### 4. **Error Handling**
```typescript
const data = useQuery(api.myFunction);

if (data === undefined) {
  return <Loading />;
}

if (data === null) {
  return <Error />;
}

return <Success data={data} />;
```

---

## 🎯 Next Steps

1. **Start Development Server**
   ```bash
   npm run dev:all
   ```

2. **Explore Dashboard**
   Visit: https://dashboard.convex.dev/d/tacit-elephant-15

3. **Write Functions**
   - Create queries in `convex/` directory
   - Use mutations for data changes
   - Add actions for external API calls

4. **Deploy to Production**
   ```bash
   npm run convex:deploy
   ```

---

## 📚 Resources

- **Convex Docs**: https://docs.convex.dev
- **LLM-Optimized Docs**: https://docs.convex.dev/llms.txt
- **Dashboard**: https://dashboard.convex.dev/d/tacit-elephant-15
- **Community**: https://convex.dev/community
- **Support**: support@convex.dev

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'convex/react'"
**Solution**: Ensure Convex is installed:
```bash
npm install convex
```

### Issue: Types not updating
**Solution**: Restart the Convex dev server:
```bash
npm run convex:dev
```

### Issue: Environment variables not found
**Solution**: Check `.env.local` exists and contains:
```env
NEXT_PUBLIC_CONVEX_URL=https://tacit-elephant-15.convex.cloud
```

---

## ✨ Installation Complete!

Your Convex backend is now fully configured and ready to use. The provider is already integrated into your app layout, so you can start using Convex hooks immediately in any client component.
