# Adding New Projects to Convex

## Quick Start

To add a new project to your portfolio, you'll need to insert data into the Convex database.

## Method 1: Using Convex Dashboard (Recommended)

1. Go to your Convex dashboard: https://dashboard.convex.dev
2. Select your project
3. Navigate to "Data" tab
4. Select the "projects" table
5. Click "Add Document"
6. Paste the JSON structure below with your project data

## Method 2: Using Seed Script

1. Create a new file in `convex/seedNewProject.ts`
2. Follow the pattern from `seedProjects.ts`
3. Run: `npx convex run seedNewProject:seedProject`

## Project Data Structure

```typescript
{
  title: "Your Project Title",
  slug: "your-project-slug", // Used in URL: /projects/your-project-slug
  description: "Brief description of the project",
  coverImage: "/images/your-project-cover.png",
  liveUrl: "https://your-project.com",
  figmaUrl: "https://figma.com/your-project", // Optional
  githubUrl: "https://github.com/your-project", // Optional

  // Table of Contents
  toc: [
    {
      id: "executive-summary",
      label: "Executive Summary",
      subsections: [
        { id: "key-metrics", label: "Key Metrics" },
        { id: "impact", label: "Impact" }
      ]
    }
  ],

  // Page Sections
  sections: [
    {
      type: "hero",
      content: JSON.stringify({
        badge: "Your Badge Text",
        title: "Project Title: Subtitle",
        subtitle: "One-line description",
        ctaText: "View Live Site",
        ctaUrl: "https://your-project.com",
        coverImage: "/images/your-project-cover.png"
      })
    },
    {
      type: "quick-facts",
      content: JSON.stringify({
        facts: [
          {
            label: "Timeline",
            value: "6 months",
            description: "Project duration",
            icon: "Clock"
          },
          {
            label: "Team Size",
            value: "5 people",
            description: "Cross-functional team",
            icon: "Users"
          }
        ],
        tags: ["UX Design", "React", "Next.js"]
      })
    },
    {
      type: "executive-summary",
      content: JSON.stringify({
        title: "Executive Summary",
        variant: "card", // or "simple"
        metrics: [
          {
            label: "Increased user engagement",
            value: "+45%",
            color: "green"
          }
        ],
        impact: [
          "Summary of the project impact...",
          "More details about outcomes..."
        ]
      })
    }
    // Add more sections as needed
  ]
}
```

## Available Section Types

### 1. Hero
Main banner with project title and CTA.

**Fields:**
- `badge`: String (e.g., "Case Study")
- `title`: String
- `subtitle`: String
- `ctaText`: String
- `ctaUrl`: String
- `coverImage`: String (path)

### 2. Quick Facts
Overview cards with project stats.

**Fields:**
- `facts`: Array of { label, value, description, icon }
- `tags`: Array of strings
- **Available icons**: Clock, Users, Zap, TrendingUp

### 3. Executive Summary
Metrics and impact summary.

**Fields:**
- `title`: String
- `variant`: "card" | "simple"
- `metrics`: Array of { label, value, color, description }
- `impact`: Array of strings (paragraphs)

### 4. Problem Statement
Define challenges and user personas.

**Fields:**
- `title`: String
- `description`: String
- `challenges`: Array (optional)
- `personas`: Array (optional)

### 5. Design Thinking
Document your design process.

### 6. User Flows
Show wireframes and user journeys.

### 7. Features
Highlight key features and UX patterns.

### 8. UX Principles
Explain design principles applied.

### 9. Social Proof
Show testimonials and results.

### 10. Tech Stack
List technologies used.

**Fields:**
- `title`: String
- `categories`: Array of { title, tools: [{ name, purpose }] }

## Example: Complete Project

See `convex/seedProjects.ts` for complete examples of PocketHealth and FintechToronto projects.

## Tips

1. **Images**: Store images in `/public/images/` and reference with `/images/filename.png`
2. **Slugs**: Use lowercase, hyphenated slugs (e.g., "my-project")
3. **Content**: Store complex content as JSON.stringify() in the `content` field
4. **IDs**: Section IDs should match TOC IDs for scroll navigation
5. **Testing**: Test locally with `npx convex dev` before deploying

## After Adding a Project

1. The project will automatically appear on the homepage
2. Access it at `/projects/your-project-slug`
3. No code changes needed!

## Need Help?

- Check existing projects in Convex dashboard for reference
- Review `docs/MIGRATION_SUMMARY.md` for architecture details
- See `src/components/SectionRenderer.tsx` for section types
