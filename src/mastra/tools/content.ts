import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const PROJECTS = [
  {
    slug: 'fintechtoronto',
    title: 'Design engineering + UX showcase: FintechToronto.com',
    description: 'A centralized platform connecting Toronto\'s fintech ecosystem through user-centered design.',
    coverImage: '/images/projects/fintech-toronto/fintechtoronto-cover.png',
    liveUrl: 'https://fintechtoronto.com',
    category: 'fintech',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Convex'],
    highlights: [
      'Solo project, 3-month timeline from design to launch',
      'Centralized platform for Toronto\'s fintech ecosystem',
      'User-centered design with comprehensive UX research',
      'Community events, blog, and directory features',
    ],
  },
  {
    slug: 'pockethealth',
    title: 'Design Engineering at PocketHealth.com',
    description: 'Mobile-first patient experience at PocketHealth — Design engineering at a Series B healthtech startup.',
    coverImage: '/images/projects/pockethealth/pockethealth-cover.png',
    liveUrl: 'https://pockethealth.com',
    category: 'healthtech',
    techStack: ['React', 'TypeScript', 'React Native', 'Node.js', 'AWS'],
    highlights: [
      'Design engineering at a Series B healthtech startup',
      'Mobile-first patient record access and sharing',
      'HIPAA-compliant secure document sharing',
      'Improved patient engagement and record retrieval',
    ],
  },
];

const ABOUT = {
  name: 'Karan Balaji',
  title: 'AI Developer from Toronto',
  bio: 'AI Developer specialized in healthcare — from Series A startups to big enterprise. Building intelligent applications with Claude Code (MCPs & Skills), Vercel AI SDK, CopilotKit, and Mastra.',
  skills: {
    ai: ['Claude Code', 'MCPs & Skills', 'Mastra', 'Vercel AI SDK', 'CopilotKit', 'LLM Applications'],
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI'],
    backend: ['Node.js', 'Convex', 'PostgreSQL', 'AWS'],
    tools: ['PostHog', 'Sentry', 'Figma', 'GitHub'],
  },
  experience: [
    { company: 'Pfizer', role: 'AI Developer (current)', type: 'Enterprise' },
    { company: 'PocketHealth', role: 'Design Engineer', type: 'Series B Startup' },
  ],
  contact: {
    email: 'karanarjunb@gmail.com',
    linkedin: 'https://linkedin.com/in/karanbalaji',
    github: 'https://github.com/karanbalaji',
    twitter: 'https://twitter.com/karanbalaji',
  },
};

export const searchProjects = createTool({
  id: 'search_projects',
  description: 'Search projects by keywords, tech stack, or category. Returns matching projects.',
  inputSchema: z.object({
    query: z.string().optional().describe('Search query for project titles, descriptions, or content'),
    category: z.string().optional().describe('Filter by category (e.g., "fintech", "healthtech")'),
    techStack: z.array(z.string()).optional().describe('Filter by technologies used (e.g., ["react", "typescript"])'),
    limit: z.number().optional().default(5).describe('Maximum number of results to return'),
  }),
  execute: async ({ query, category, techStack, limit = 5 }) => {
    let results = [...PROJECTS];

    if (category) {
      results = results.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (techStack && techStack.length > 0) {
      results = results.filter(p =>
        techStack.some(tech =>
          p.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
        )
      );
    }

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.highlights.some(h => h.toLowerCase().includes(q)) ||
        p.techStack.some(t => t.toLowerCase().includes(q))
      );
    }

    return { projects: results.slice(0, limit), total: results.length };
  },
});

export const getProjectDetails = createTool({
  id: 'get_project_details',
  description: 'Get detailed information about a specific project including all sections.',
  inputSchema: z.object({
    slug: z.string().describe('The project slug (e.g., "fintechtoronto" or "pockethealth")'),
  }),
  execute: async ({ slug }) => {
    const project = PROJECTS.find(p => p.slug === slug || p.slug.includes(slug.toLowerCase()));
    if (!project) {
      return { error: `Project "${slug}" not found. Available: ${PROJECTS.map(p => p.slug).join(', ')}` };
    }
    return { project };
  },
});

export const getBlogPosts = createTool({
  id: 'get_blog_posts',
  description: 'Get recent blog posts from the portfolio. Posts are synced from an RSS feed.',
  inputSchema: z.object({
    limit: z.number().optional().default(5).describe('Maximum number of posts to return'),
    category: z.string().optional().describe('Filter by category'),
  }),
  execute: async ({ limit = 5, category }) => {
    // Blog posts are dynamically synced via RSS - direct visitor to the blog section
    return {
      message: 'Blog posts are available on the site under the Blog section.',
      tip: 'Ask the user to scroll to the blog section or navigate to #blog for the latest posts.',
      limit,
      category,
    };
  },
});

export const getAboutInfo = createTool({
  id: 'get_about_info',
  description: 'Get information about Karan — skills, experience, background, and contact details.',
  inputSchema: z.object({
    section: z.enum(['skills', 'experience', 'contact', 'all']).optional().default('all').describe('Which section to get'),
  }),
  execute: async ({ section = 'all' }) => {
    if (section === 'skills') return { skills: ABOUT.skills };
    if (section === 'experience') return { experience: ABOUT.experience };
    if (section === 'contact') return { contact: ABOUT.contact };
    return { about: ABOUT };
  },
});
