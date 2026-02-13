# CLAUDE.md - AI Assistant Guidelines

> **Purpose**: This document provides comprehensive guidelines for AI assistants (Claude Code, Cursor, Copilot, etc.) working on this UX Portfolio project. Following these rules ensures code quality, consistency, and adherence to established patterns.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [🚨 Mandatory Workflows](#-mandatory-workflows-critical)
3. [Technology Guidelines](#technology-guidelines)
4. [Code Quality Standards](#code-quality-standards)
5. [File Organization](#file-organization)
6. [Development Workflow](#development-workflow)
7. [Anti-Patterns to Avoid](#anti-patterns-to-avoid)
8. [Testing Changes](#testing-changes)

---

## Project Overview

**Project Name**: Karan Balaji - UX Portfolio
**Type**: Personal portfolio showcasing UX design projects, blog, and professional journey
**Live Site**: [karanbalaji.com](https://karanbalaji.com)

### Tech Stack

- **Frontend**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with OKLCH color system
- **Components**: Radix UI primitives (shadcn/ui pattern)
- **Animations**: Motion (Framer Motion successor)
- **Backend**: Convex (serverless database and API)
- **Analytics**: PostHog
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

### Key Architectural Decisions

1. **App Router**: Using Next.js App Router with Server Components by default
2. **Design System**: OKLCH color tokens for superior color perception and dark mode support
3. **Type Safety**: Strict TypeScript across frontend and backend
4. **Component Architecture**: shadcn/ui pattern with Radix UI primitives
5. **CMS**: Convex for dynamic project and blog content

### Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── globals.css        # Global styles, OKLCH tokens
│   │   ├── projects/[slug]/   # Dynamic project pages
│   │   └── api/               # API routes
│   ├── components/
│   │   ├── ui/                # Reusable UI primitives (Button, Card, etc.)
│   │   └── *.tsx              # Feature components (Hero, About, etc.)
│   └── lib/
│       └── utils.ts           # Utility functions (cn helper)
├── convex/                    # Backend (Convex functions & schema)
│   ├── schema.ts              # Database schema
│   ├── projects.ts            # Project queries/mutations
│   ├── blog.ts                # Blog queries/mutations
│   └── contacts.ts            # Contact form handlers
├── docs/                      # Project documentation
├── public/                    # Static assets
├── designsystem.md           # Design system documentation
└── CLAUDE.md                 # This file
```

---

## 🚨 Mandatory Workflows (CRITICAL)

These workflows are **NON-NEGOTIABLE**. Always follow this priority order:

**Priority Order**: Context7 → Vercel Best Practices → Design System → Implementation

---

### 🔍 Context7 MCP - ALWAYS USE for Library/Framework Work

**When to use**: ANY time you work with libraries, frameworks, or third-party packages

- React hooks and APIs
- Next.js features (App Router, Server Components, Metadata API, etc.)
- Framer Motion animations
- Convex queries/mutations/actions
- Radix UI primitives
- Tailwind CSS v4 syntax and features
- Any npm package (lucide-react, clsx, tailwind-merge, etc.)

**Why**: Ensures you have the latest documentation and API syntax. Libraries update frequently, and context7 provides real-time access to current APIs.

**How**: Before implementing a feature that uses any library, query context7:

```
Example queries:
- "Convex query patterns with indexes"
- "Next.js App Router metadata API"
- "Radix UI Dialog component props"
- "Tailwind CSS v4 configuration"
```

**Tool**: Use the `ToolSearch` to load context7 MCP, then query the library documentation

```
ToolSearch: "select:mcp__context7__query-docs"
```

---

### ⚛️ Vercel React Best Practices - ALWAYS INVOKE for Frontend Work

**When to use**: ANY time you create or modify UI components

- Building new components
- Performance optimization
- Server vs Client Component decisions
- Data fetching strategies (Server Components, fetch, cache)
- Rendering patterns
- Bundle optimization

**Why**: Ensures optimal React 19 and Next.js 16 performance patterns from Vercel Engineering

**How**: Invoke the skill at the START of frontend implementation tasks

```
Tool: Skill
Skill name: vercel-react-best-practices
```

**What it provides**:
- Server Component patterns
- Client Component optimization
- Data fetching best practices
- Performance patterns
- Bundle optimization strategies

---

### 🎨 Design System - ALWAYS FOLLOW designsystem.md

**When to use**: ANY time you create or style UI elements

- Selecting colors (use OKLCH semantic tokens, not arbitrary values)
- Component structure (Button variants, Card layout, etc.)
- Typography (Geist Sans for body, Geist Mono for code)
- Dark/light theme support
- Spacing, borders, shadows, rounded corners
- Animation and transition patterns

**Why**: Ensures visual consistency across the entire portfolio

**How**:
1. Read `designsystem.md` before styling
2. Use existing components from `src/components/ui`
3. Reference OKLCH tokens from `src/app/globals.css`

**Key Patterns**:
- Colors: Use semantic tokens (`bg-background`, `text-foreground`, `border`, etc.)
- Typography: `font-sans` (default), `font-mono` for code
- Spacing: Use Tailwind spacing scale
- Components: Use `cn()` utility for conditional classes

---

### 📝 Documentation Workflow - ALWAYS UPDATE /docs

**When to use**: After building ANY feature, component, or making architectural changes

**What to document**:
- **New features**: `FEATURE_NAME.md` with Quick Start, usage, examples
- **New components**: `COMPONENT_GUIDE.md` with props, variants, code examples
- **Architectural decisions**: `ARCHITECTURE_DECISION.md` or `MIGRATION_*.md`
- **Integration patterns**: `SERVICE_INTEGRATION.md` (e.g., `CONVEX_SETUP.md`)
- **Troubleshooting**: Add to existing docs or create `TROUBLESHOOTING.md`

**Documentation Structure** (Follow this pattern):

```markdown
# Title (What This Document Covers)

## Quick Start
[Immediate action steps - numbered list]

## Overview/Context
[Why this exists, what problem it solves]

## Detailed Instructions
[Step-by-step with code examples]

## Tips/Best Practices
[Helpful hints, gotchas, recommendations]

## Troubleshooting/Common Issues
[Known issues and solutions]

## Related Documentation
[Cross-references to other docs]
```

**Naming Convention**: Use uppercase with underscores (e.g., `ADDING_NEW_PROJECTS.md`)

**Best Practices**:
- Include code examples in markdown code blocks with syntax highlighting
- Document WHY decisions were made, not just WHAT was built
- Keep examples up-to-date when code changes
- Cross-reference related documentation files
- Include file paths and concrete examples
- See `/docs/ADDING_NEW_PROJECTS.md` as reference

---

## Technology Guidelines

### Frontend (Next.js 16 + React 19)

**App Router Patterns**:
- Server Components by default (better performance, smaller bundles)
- Client Components only when needed (`"use client"` directive):
  - Interactive elements (onClick, useState, useEffect)
  - Browser APIs (localStorage, window)
  - React hooks (except Server Component hooks)
  - Context providers

**TypeScript**:
- All files must be `.ts` or `.tsx`
- Strict mode enabled
- Define types for props, function returns, and API responses
- Use `interface` for component props, `type` for unions/intersections

**Development**:
- Use Turbopack for development (`npm run dev`)
- Hot module replacement is automatic

---

### Styling (Tailwind CSS v4)

**Core Principles**:
- **ALWAYS** use Tailwind utility classes
- **NEVER** use inline styles or CSS modules (unless for complex animations)
- Use `cn()` utility from `src/lib/utils.ts` for conditional classes
- Reference OKLCH color tokens from `globals.css`

**Color System**:
```tsx
// ✅ GOOD - Semantic tokens
<div className="bg-background text-foreground border-border">

// ❌ BAD - Arbitrary colors
<div className="bg-white text-black border-gray-300">
```

**Dark Mode**:
- All colors automatically support dark mode via CSS variables
- Test both themes when styling
- Use semantic tokens (e.g., `bg-card`, `text-muted-foreground`)

**Conditional Classes**:
```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-class",
  condition && "conditional-class",
  variant === "primary" && "primary-class"
)} />
```

---

### Components (shadcn/ui Pattern)

**Component Architecture**:
1. **Check existing components first**: Browse `src/components/ui` before creating new UI
2. **Use Radix UI primitives**: For complex interactions (Dialog, Dropdown, Tabs, etc.)
3. **Variants with CVA**: Use `class-variance-authority` for component variants
4. **Data slots**: Use `data-slot` attributes for internal parts

**Component Structure**:
```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        outline: "outline-classes",
      },
      size: {
        default: "default-size",
        sm: "small-size",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
)

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  // Additional props
}

export const Button = ({ variant, size, className, ...props }: ButtonProps) => (
  <button
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
)
```

**Icons**:
- Only use `lucide-react` for icons
- Import specific icons: `import { ChevronRight } from "lucide-react"`

---

### Backend (Convex)

**File Organization**:
- `convex/schema.ts`: Database schema definitions
- `convex/[table].ts`: Queries and mutations for each table
- `convex/seed*.ts`: Seed scripts for initial data

**Naming Conventions**:
- **Queries**: `getX`, `getXByY`, `getXByZ`
- **Mutations**: `createX`, `updateX`, `deleteX`, `bulkCreateX`
- **Actions**: `processX`, `syncX`
- **Table names**: Use `snake_case` (e.g., `blog_posts`, not `blogPosts`)

**Args Validation** (Always required):
```typescript
import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

export const getProjectBySlug = query({
  args: {
    slug: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first()
  },
})

export const createProject = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    coverImage: v.string(),
    order: v.number(),
    toc: v.array(v.object({ /* ... */ })),
    sections: v.array(v.object({ /* ... */ })),
  },
  handler: async (ctx, args) => {
    // Check for existing
    const existing = await ctx.db
      .query("projects")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first()

    if (existing) {
      throw new Error("Project with this slug already exists")
    }

    return await ctx.db.insert("projects", args)
  },
})
```

**Query/Mutation Patterns**:
- **Index usage**: `.withIndex("by_field", (q) => q.eq("field", value))`
- **Queries**:
  - `.collect()` for multiple results
  - `.first()` for single result
  - `.take(n)` for limited results
- **Mutations**:
  - `.insert(table, data)` to create
  - `.patch(id, data)` to update
  - `.delete(id)` to remove
- **Ordering**: `.order("desc")` or `.order("asc")`
- **Optional fields**: Use `v.optional(type)`

**Best Practices**:
- Always validate unique fields (e.g., slug) before insert
- Use descriptive error messages
- Define indexes for frequently queried fields
- Use TypeScript types for query/mutation returns

---

### Analytics (PostHog)

**Configuration**:
- PostHog is configured in `src/components/PostHogProvider.tsx`
- Auto-tracked: pageviews, pageleave, exceptions
- Debug mode in development

**Manual Event Tracking**:
```tsx
import { usePostHog } from "posthog-js/react"

function MyComponent() {
  const posthog = usePostHog()

  const handleAction = () => {
    posthog.capture("event_name", {
      property_name: "value",
      // Include relevant context
      project_slug: "fintech-toronto",
      section_name: "hero",
    })
  }
}
```

**Event Naming Convention**:
- Use `snake_case` for custom events
- Examples: `project_viewed`, `contact_form_submitted`, `cta_clicked`
- Include relevant context in properties (e.g., `project_slug`, `section_name`)

**Common Events**:
- `project_viewed`: When user views a project page
- `contact_form_submitted`: When contact form is submitted
- `cta_clicked`: When primary CTA is clicked
- `blog_post_clicked`: When blog post is opened

---

## Code Quality Standards

### TypeScript
- **Strict mode**: Enabled (no implicit any, proper null checks)
- **No unused variables or imports**: Clean up before committing
- **Type everything**: Props, function returns, API responses
- **Use const**: Prefer `const` over `let`, avoid `var`

### Accessibility (WCAG 2.1 AA)
- **Semantic HTML**: Use proper elements (`<button>`, `<nav>`, `<main>`)
- **ARIA labels**: Add when semantic HTML isn't enough
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Focus management**: Visible focus states, logical tab order
- **Color contrast**: Meet WCAG AA standards (use semantic tokens)

### Performance
- **Server Components**: Default to Server Components for static content
- **Code splitting**: Dynamic imports for heavy components
- **Image optimization**: Use Next.js `<Image>` component
- **Bundle size**: Avoid unnecessary dependencies
- **Lazy loading**: Use for below-the-fold content

### Error Handling
- Proper try/catch blocks for async operations
- User-friendly error messages
- Graceful degradation

---

## File Organization

```
src/
├── app/
│   ├── [route]/
│   │   ├── page.tsx           # Route page component
│   │   └── layout.tsx         # Route-specific layout (optional)
│   ├── api/                   # API routes
│   ├── globals.css            # Global styles, OKLCH tokens
│   └── layout.tsx             # Root layout
│
├── components/
│   ├── ui/                    # Reusable UI primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── hero-section.tsx       # Feature components
│   ├── about-section.tsx
│   └── ...
│
└── lib/
    ├── utils.ts               # Utility functions (cn)
    └── ...

convex/
├── _generated/                # Auto-generated Convex files
├── schema.ts                  # Database schema
├── projects.ts                # Project queries/mutations
├── blog.ts                    # Blog queries/mutations
└── ...

docs/                          # Project documentation
public/                        # Static assets (images, fonts)
```

**Naming Conventions**:
- Components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`utils.ts`)
- API routes: kebab-case (`send-email/route.ts`)
- Convex tables: snake_case (`blog_posts`)

---

## Development Workflow

### Running the Project

**Development** (with Convex backend):
```bash
npm run dev:all
```

**Development** (frontend only):
```bash
npm run dev
```

**Build** (production):
```bash
npm run build
```

**Start** (production server):
```bash
npm start
```

### Convex Development

**Start Convex dev server**:
```bash
npm run convex:dev
```

**Deploy Convex** (production):
```bash
npm run convex:deploy
```

**Seed data**:
```bash
npm run seed:projects
npm run seed:blog
```

### Pre-Build Steps
- Blog data is automatically generated from RSS feeds during build
- Ensure Convex schema is deployed before building

### Schema Changes
- Modify `convex/schema.ts`
- Deploy to Convex: `npm run convex:deploy`
- Schema changes are immediate in Convex

---

## Anti-Patterns to Avoid

### ❌ Styling Anti-Patterns
- **Don't create CSS modules** - Use Tailwind utilities
- **Don't use inline styles** - Use Tailwind classes
- **Don't use arbitrary colors** - Use semantic tokens
- **Don't forget dark mode** - Test both themes

### ❌ Component Anti-Patterns
- **Don't create one-off components** - Check `src/components/ui` first
- **Don't bypass the design system** - Follow designsystem.md
- **Don't create components without TypeScript types** - Always type props

### ❌ Code Quality Anti-Patterns
- **Don't leave unused imports** - Clean up before committing
- **Don't use `any` type** - Use proper types or `unknown`
- **Don't skip error handling** - Handle edge cases gracefully
- **Don't add unnecessary dependencies** - Evaluate cost vs benefit

### ❌ Workflow Anti-Patterns
- **Don't skip Context7** - Always check latest library docs
- **Don't skip Vercel Best Practices** - Frontend work needs optimization
- **Don't skip Design System** - Consistency is critical
- **DON'T SKIP DOCUMENTATION** - Update `/docs` after every feature

### ❌ Accessibility Anti-Patterns
- **Don't use divs for buttons** - Use `<button>` or Button component
- **Don't forget focus states** - Ensure keyboard navigation works
- **Don't ignore color contrast** - Use semantic tokens

---

## Testing Changes

### Pre-Commit Checklist

1. **Theme Support**
   - [ ] Check component in light mode
   - [ ] Check component in dark mode
   - [ ] Verify all colors use semantic tokens

2. **Responsive Design**
   - [ ] Test on mobile (320px - 768px)
   - [ ] Test on tablet (768px - 1024px)
   - [ ] Test on desktop (1024px+)

3. **Accessibility**
   - [ ] Keyboard navigation works
   - [ ] Focus states are visible
   - [ ] Screen reader compatible (semantic HTML)
   - [ ] Color contrast meets WCAG AA

4. **Performance**
   - [ ] Check Lighthouse score (aim for 90+)
   - [ ] Verify bundle size didn't increase significantly
   - [ ] Test with Turbopack dev server

5. **Code Quality**
   - [ ] No TypeScript errors
   - [ ] No unused imports/variables
   - [ ] ESLint passes
   - [ ] Proper error handling

6. **Documentation**
   - [ ] Updated `/docs` if needed
   - [ ] Added code examples
   - [ ] Cross-referenced related docs

### Testing Tools

**Lighthouse** (in Chrome DevTools):
- Run on incognito mode
- Test both mobile and desktop
- Aim for 90+ in all categories

**TypeScript**:
```bash
npx tsc --noEmit
```

**Linting**:
```bash
npm run lint
```

**Build Test**:
```bash
npm run build
```

---

## Quick Reference

### Most Common Commands
```bash
npm run dev:all        # Start Next.js + Convex dev servers
npm run build          # Build for production
npm run lint           # Run ESLint
npm run convex:deploy  # Deploy Convex backend
```

### Most Used Imports
```typescript
// Utilities
import { cn } from "@/lib/utils"

// Components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Icons
import { ChevronRight } from "lucide-react"

// Convex
import { useQuery, useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

// PostHog
import { usePostHog } from "posthog-js/react"
```

### Key Files to Reference
- `designsystem.md` - Design system and component patterns
- `src/app/globals.css` - OKLCH color tokens
- `src/lib/utils.ts` - cn() utility
- `convex/schema.ts` - Database schema
- `/docs/ADDING_NEW_PROJECTS.md` - Adding project content
- `/docs/CONVEX_SETUP.md` - Convex integration

---

## Related Documentation

- **Design System**: See `designsystem.md` for comprehensive component and styling guidelines
- **Backend**: See `/docs/CONVEX_SETUP.md` for Convex setup and patterns
- **Adding Projects**: See `/docs/ADDING_NEW_PROJECTS.md` for content management
- **Migration**: See `/docs/MIGRATION_SUMMARY.md` for architectural decisions

---

## Summary

**Remember the Priority Order**:
1. 🔍 **Context7 MCP** - Get latest library docs
2. ⚛️ **Vercel React Best Practices** - Optimize frontend
3. 🎨 **Design System** - Maintain consistency
4. 📝 **Documentation** - Update /docs
5. ✅ **Implementation** - Write code

**Core Principles**:
- Server Components by default
- Tailwind utilities only (no CSS modules, no inline styles)
- OKLCH semantic tokens for colors
- TypeScript strict mode
- Accessibility (WCAG 2.1 AA)
- Test both light and dark themes
- Document everything

---

**Built with care for optimal UX and DX** ❤️
