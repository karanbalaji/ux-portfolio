import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const showProjectCard = createTool({
  id: 'show_project_card',
  description: 'Display a rich project card with cover image, title, and description. Use this to preview projects in chat.',
  inputSchema: z.object({
    slug: z.string().describe('Project slug'),
    title: z.string().describe('Project title'),
    description: z.string().describe('Brief project description'),
    coverImage: z.string().describe('Cover image URL'),
    liveUrl: z.string().optional().describe('Live demo URL'),
    githubUrl: z.string().optional().describe('GitHub URL'),
    techStack: z.array(z.string()).optional().describe('Technologies used'),
  }),
  execute: async (project) => {
    return {
      success: true,
      component: 'ProjectCard',
      props: project,
    };
  },
});

export const showContactForm = createTool({
  id: 'show_contact_form',
  description: 'Display an interactive contact form in the chat. Use when user wants to get in touch.',
  inputSchema: z.object({
    prefilledSubject: z.string().optional().describe('Optional prefilled subject line'),
  }),
  execute: async ({ prefilledSubject }) => {
    return {
      success: true,
      component: 'ContactForm',
      props: { prefilledSubject },
    };
  },
});

export const showMeetingScheduler = createTool({
  id: 'show_meeting_scheduler',
  description: 'Display the Cal.com meeting scheduler widget. Use when user wants to schedule a call.',
  inputSchema: z.object({
    meetingType: z.enum(['quick-chat', 'consultation', 'coffee-chat']).optional().default('quick-chat').describe('Type of meeting'),
  }),
  execute: async ({ meetingType }) => {
    return {
      success: true,
      component: 'MeetingScheduler',
      props: { meetingType },
    };
  },
});

export const showComparisonTable = createTool({
  id: 'show_comparison_table',
  description: 'Display a comparison table for multiple projects. Use when user wants to compare projects.',
  inputSchema: z.object({
    projects: z.array(z.object({
      slug: z.string(),
      title: z.string(),
      techStack: z.array(z.string()),
      highlights: z.array(z.string()),
    })).min(2).max(4).describe('Projects to compare (2-4)'),
    comparisonAspects: z.array(z.string()).optional().describe('Specific aspects to compare'),
  }),
  execute: async ({ projects, comparisonAspects }) => {
    return {
      success: true,
      component: 'ComparisonTable',
      props: { projects, comparisonAspects },
    };
  },
});

export const showTechStackDiagram = createTool({
  id: 'show_tech_stack_diagram',
  description: 'Display a visual tech stack diagram. Use to show technologies used in a project or overall skills.',
  inputSchema: z.object({
    title: z.string().describe('Title for the diagram'),
    categories: z.array(z.object({
      name: z.string().describe('Category name (e.g., "Frontend", "Backend")'),
      technologies: z.array(z.string()).describe('List of technologies'),
    })).describe('Tech categories to display'),
  }),
  execute: async ({ title, categories }) => {
    return {
      success: true,
      component: 'TechStackDiagram',
      props: { title, categories },
    };
  },
});

export const recommendProjects = createTool({
  id: 'recommend_projects',
  description: 'AI-powered project recommendations based on user interests or context.',
  inputSchema: z.object({
    interests: z.array(z.string()).describe('User interests or keywords'),
    context: z.string().optional().describe('Additional context about what they\'re looking for'),
    limit: z.number().optional().default(3).describe('Number of recommendations'),
  }),
  execute: async ({ interests, context, limit = 3 }) => {
    return {
      success: true,
      component: 'ProjectRecommendations',
      props: { interests, context, limit },
    };
  },
});
