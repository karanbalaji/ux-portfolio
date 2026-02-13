# Backend Migration Plan (Convex)

## Goal
Migrate the current static/hardcoded content (Projects, Blog) to a dynamic backend using Convex. This will allow for easier creation, editing, and maintenance of content.

## 1. Setup & Configuration
- [ ] Initialize Convex: `npx convex dev`
- [ ] Configure `convex.json` if needed.
- [ ] Set up environment variables.

## 2. Schema Design

### `blog_posts` Table
Replacing the RSS/Static JSON fallback.
- `slug`: string (index)
- `title`: string
- `excerpt`: string
- `content`: string (HTML or Markdown)
- `publishedDate`: string
- `readTime`: string (can be calculated, but storing for override is fine)
- `category`: string
- `coverImage`: string (optional)
- `externalLink`: string (optional, if keeping RSS pattern)

### `projects` Table
Replacing `src/app/projects/*` pages.
- `slug`: string (index, e.g., "fintechtoronto", "pockethealth")
- `title`: string
- `description`: string
- `coverImage`: string
- `liveUrl`: string
- `githubUrl`: string (optional)
- `figmaUrl`: string (optional)
- `order`: number (for sorting on homepage)
- `toc`: json (Array of `{ id, label, subsections: {id, label}[] }`)
- `sections`: json (Array of section objects)
  - Example Section Object:
    ```json
    {
      "type": "executive-summary",
      "data": {
        "metrics": [...],
        "impact": "..."
      }
    }
    ```

### `contacts` Table
- `name`: string
- `email`: string
- `message`: string
- `submittedAt`: number

## 3. Migration & Seeding

### Blog
- [x] Created RSS sync system (`convex/syncBlog.ts`) that:
  - Fetches blog posts from `https://blog.karanbalaji.com/rss.xml`
  - Parses RSS feed and extracts posts
  - Stores in Convex `blog_posts` table
  - Updates existing posts if content changes
- [x] Created cron job (`convex/crons.ts`) to auto-sync daily at 6 AM UTC
- [x] Manual sync available via `syncFromRSS` action

### Projects
- [ ] Manually create seed data for "FintechToronto" and "PocketHealth" based on their current React components.
- [ ] Extract the text/data from the TSX files into a structured JSON format for seeding.

## 4. Frontend Refactor

### Dynamic Project Page (`src/app/projects/[slug]/page.tsx`)
- [ ] Create a dynamic route to handle any project slug.
- [ ] Fetch project data using `useQuery(api.projects.getBySlug, { slug })`.
- [ ] Implement a `SectionRenderer` component that switches on `section.type` and renders the appropriate existing component (e.g., `<ExecutiveSummary data={section.data} />`).
- [ ] Refactor existing components (`ExecutiveSummary`, `ProblemStatement`, etc.) to accept `data` props instead of having hardcoded text.

### Blog Section
- [ ] Update `src/lib/blog-service.ts` or create a new `ConvexBlogService` to fetch from Convex.
- [ ] Update `src/components/blog-section.tsx` to use the new data source.

### Admin / Dashboard
- [ ] Use the built-in Convex Dashboard for data entry initially.
- [ ] (Optional) Create a protected route `/admin` for custom content management if the Convex Dashboard is insufficient.

## 5. Implementation Steps
1.  **Init**: Run `npx convex dev`.
2.  **Schema**: Define `convex/schema.ts`.
3.  **Seed**: Write and run seed scripts to populate DB with existing content.
4.  **API**: Create `convex/projects.ts` and `convex/blog.ts` queries/mutations.
5.  **Refactor Components**: Modify UI components to accept props.
6.  **Routing**: Create `[slug]` page for projects.
7.  **Integration**: Connect Homepage and Navigation to dynamic data.
