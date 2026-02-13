# Migrate to Clerk Authentication

## Overview

Replace the broken @convex-dev/auth setup with Clerk - the best authentication solution for Next.js with official Convex integration.

**Why Clerk?**
- ✅ Official Convex integration (`ConvexProviderWithClerk`)
- ✅ Beautiful pre-built UI components
- ✅ Drop-in authentication with zero config
- ✅ MFA, Organizations, User Management built-in
- ✅ Excellent developer experience
- ✅ Better than AuthKit for Next.js ecosystem
- ✅ Active development and support

## Current State (Broken)

**Current Setup:**
- `@convex-dev/auth` with Password provider → Token validation failing
- `@auth/core` peer dependency
- Custom middleware in `src/proxy.ts`
- Multiple provider wrappers
- **Status**: "NoAuthProvider" error, authentication completely broken

**What We Already Did:**
- ✅ Uninstalled `@convex-dev/auth` and `@auth/core`
- ✅ Installed `@workos-inc/authkit-nextjs` (will remove)
- ✅ Created `docs/authkit-migration.md`

## Migration Plan to Clerk

### Phase 1: Remove AuthKit and Install Clerk

**Remove AuthKit:**
```bash
npm uninstall @workos-inc/authkit-nextjs
```

**Install Clerk:**
```bash
npm install @clerk/nextjs
```

**Verify Installation:**
```bash
npm list @clerk/nextjs convex
```

### Phase 2: Set Up Clerk Account & Get Credentials

**Steps:**
1. Go to https://dashboard.clerk.com/
2. Sign up for free account (or sign in)
3. Click "Add application"
4. Name: "Karan Balaji Portfolio Admin"
5. Choose authentication methods:
   - ✅ Email + Password (minimum)
   - ✅ Google OAuth (recommended)
   - ✅ GitHub OAuth (optional)
6. Copy credentials from API Keys page:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (pk_test_...)
   - `CLERK_SECRET_KEY` (sk_test_...)
7. Note your **Issuer URL** (needed for Convex):
   - Format: `https://[subdomain].clerk.accounts.dev`
   - Example: `https://verb-noun-00.clerk.accounts.dev`

### Phase 3: Configure Environment Variables

**Update `.env.local`:**

```env
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Routes (optional but recommended)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/admin/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/admin/dashboard

# Keep existing Convex configuration
NEXT_PUBLIC_CONVEX_URL=https://tacit-elephant-15.convex.cloud
CONVEX_DEPLOYMENT=dev:tacit-elephant-15
```

**Set in Convex Dashboard (Environment Variables):**
```env
CLERK_JWT_ISSUER_DOMAIN=https://[your-subdomain].clerk.accounts.dev
```

Go to: Convex Dashboard → Settings → Environment Variables → Add

### Phase 4: Create Convex Auth Configuration

**Create NEW file: `convex/auth.config.ts`**

```typescript
export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
      applicationID: "convex",
    },
  ],
};
```

**Delete OLD file: `convex/auth.ts`**

```bash
rm convex/auth.ts
```

This removes the broken @convex-dev/auth configuration.

### Phase 5: Create ConvexClientProvider

**Replace `src/components/ConvexClientProvider.tsx`:**

```typescript
"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
```

**Key Points:**
- Uses `ConvexProviderWithClerk` from `convex/react-clerk`
- Passes `useAuth` from `@clerk/nextjs`
- Simple, clean integration

### Phase 6: Update Root Layout

**Update `src/app/layout.tsx`:**

Remove all old auth providers, add ClerkProvider:

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/PostHogProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karan Balaji - Design Engineer from Toronto",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script
            src="https://cdn.mida.so/js/optimize.js?key=nvmGW7eJdkyV9Rw81xXQKA"
            strategy="afterInteractive"
            async
          />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
          <ConvexClientProvider>
            <PostHogProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </PostHogProvider>
          </ConvexClientProvider>
          <GoogleAnalytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
```

**Critical Nesting:**
- `ClerkProvider` wraps everything
- `ConvexClientProvider` is inside ClerkProvider
- Other providers can be nested as needed

### Phase 7: Replace Middleware

**Rename old proxy.ts:**
```bash
mv src/proxy.ts src/proxy.ts.backup
```

**Create NEW `src/middleware.ts`:**

```typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect all routes except public ones
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
```

**For Custom Admin Protection:**

```typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Protect admin routes
  if (isAdminRoute(req)) {
    await auth.protect();
  }

  // Allow public routes
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

### Phase 8: Update Login Page

**Replace `src/app/admin/login/page.tsx`:**

```typescript
"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/admin/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (isSignedIn) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-none",
          },
        }}
        routing="path"
        path="/admin/login"
        signUpUrl="/sign-up"
        afterSignInUrl="/admin/dashboard"
      />
    </div>
  );
}
```

**Alternative: Custom Login Form**

If you want to keep your custom UI:

```typescript
"use client";

import { useSignIn } from "@clerk/nextjs";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LoginPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setIsLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/admin/dashboard");
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.errors?.[0]?.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-sans">
            Admin Login
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-md text-sm">
                {error}
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
                disabled={isLoading}
                autoComplete="email"
                autoFocus
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
```

### Phase 9: Update Admin Sidebar (Add Logout)

**Update `src/components/admin/admin-sidebar.tsx`:**

```typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import { LayoutDashboard, FileText, Newspaper, Mail, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/projects", icon: FileText },
  { name: "Blog Posts", href: "/admin/blog", icon: Newspaper },
  { name: "Contacts", href: "/admin/contacts", icon: Mail },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const { user } = useUser();

  if (pathname === "/admin/login") {
    return null;
  }

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold font-sans">Admin Panel</h1>
        {user && (
          <p className="text-sm text-muted-foreground mt-1">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-sans",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <Button
          onClick={() => signOut()}
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
```

### Phase 10: Create Clerk JWT Template

**CRITICAL STEP - Must Do:**

1. Go to Clerk Dashboard → JWT Templates
2. Click "New template"
3. Select "Convex" from templates
4. Name it: "convex"
5. Click "Apply changes"

This template ensures Clerk generates JWTs that Convex can validate.

### Phase 11: Deploy Convex Configuration

```bash
npx convex dev
```

The Convex dev server will automatically pick up the new `auth.config.ts`.

Or if deploying to production:
```bash
npx convex deploy
```

### Phase 12: Test Authentication

**Test Checklist:**

1. **Sign Up Flow (if enabled):**
   - Go to http://localhost:3000/sign-up
   - Create new account
   - Verify email (if required)
   - Check redirect to `/admin/dashboard`

2. **Sign In Flow:**
   - Go to http://localhost:3000/admin/login
   - Enter credentials
   - Verify successful login
   - Check redirect to `/admin/dashboard`
   - Verify user email shows in sidebar

3. **Protected Routes:**
   - Sign out
   - Try accessing `/admin/dashboard` directly
   - Should redirect to `/admin/login`
   - Sign back in
   - Should be able to access `/admin/dashboard`

4. **Logout:**
   - Click "Sign Out" in sidebar
   - Verify redirect to home or login
   - Verify cannot access admin routes
   - Check Clerk session is cleared

5. **Session Persistence:**
   - Sign in
   - Refresh page (should stay logged in)
   - Open new tab to `/admin/dashboard` (should work)
   - Close browser and reopen (session should persist)

## Files Modified Summary

| File | Action | Description |
|------|--------|-------------|
| `convex/auth.config.ts` | **CREATE** | Clerk JWT configuration |
| `convex/auth.ts` | **DELETE** | Remove old @convex-dev/auth |
| `src/components/ConvexClientProvider.tsx` | **REPLACE** | Use ConvexProviderWithClerk |
| `src/app/layout.tsx` | **UPDATE** | Wrap with ClerkProvider |
| `src/middleware.ts` | **REPLACE** | Use Clerk middleware |
| `src/app/admin/login/page.tsx` | **REPLACE** | Use Clerk SignIn component |
| `src/components/admin/admin-sidebar.tsx` | **UPDATE** | Add Clerk signOut |
| `.env.local` | **UPDATE** | Add Clerk credentials |
| `package.json` | **UPDATE** | Add @clerk/nextjs |

## Clerk vs AuthKit vs @convex-dev/auth

| Feature | @convex-dev/auth | AuthKit | **Clerk** |
|---------|------------------|---------|-----------|
| **Setup Complexity** | High | Medium | **Low** |
| **UI Components** | Build your own | Hosted only | **Pre-built + customizable** |
| **Next.js Integration** | Poor | Good | **Excellent** |
| **Convex Integration** | Native but broken | JWT only | **Official + maintained** |
| **Developer Experience** | Poor | Good | **Excellent** |
| **MFA Support** | No | Yes | **Yes (TOTP, SMS, Email)** |
| **Organizations** | No | Yes | **Yes + Roles** |
| **User Management UI** | No | Basic | **Full dashboard** |
| **SSO Support** | No | Yes | **Yes (SAML, OAuth)** |
| **Free Tier** | Yes | Limited | **10,000 MAU free** |
| **Documentation** | Poor | Good | **Excellent** |
| **Community** | Small | Growing | **Large + active** |

## Expected Outcome

After migration:
- ✅ Clean, working authentication
- ✅ Beautiful pre-built sign-in UI
- ✅ No configuration headaches
- ✅ MFA ready out of the box
- ✅ User management dashboard
- ✅ Session persistence that works
- ✅ Server-side rendering support
- ✅ Organizations and teams (future)
- ✅ Excellent developer experience
- ✅ Production-ready from day one

## Benefits Over Previous Attempts

**vs @convex-dev/auth:**
- Actually works (no "NoAuthProvider" errors)
- Official Convex integration
- Better documentation
- Active maintenance

**vs AuthKit:**
- Better Next.js integration
- More features (MFA, orgs, user management)
- Larger community
- More customizable UI
- Better free tier (10k MAU vs AuthKit limits)

## Rollback Plan

If needed, restore backup:
```bash
# Restore old middleware
mv src/middleware.ts.backup src/proxy.ts

# Reinstall old packages (not recommended - was broken)
npm install @convex-dev/auth @auth/core@0.37.0

# Restore from git
git checkout src/components/ConvexClientProvider.tsx src/app/layout.tsx
```

## Estimated Time

- Phase 1-3 (Install + Setup Clerk): 10 minutes
- Phase 4-6 (Convex config + Providers): 10 minutes
- Phase 7-9 (Middleware + UI): 15 minutes
- Phase 10-11 (JWT Template + Deploy): 5 minutes
- Phase 12 (Testing): 10 minutes
- **Total**: ~50 minutes

Clean, simple, and it actually works!
