import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const navigateToProject = createTool({
  id: 'navigate_to_project',
  description: 'Navigate the user to a specific project page. Use this when the user wants to view a project.',
  inputSchema: z.object({
    slug: z.string().describe('The project slug to navigate to (e.g., "fintech-toronto", "design-system")'),
    projectName: z.string().optional().describe('The display name of the project for confirmation'),
  }),
  execute: async ({ slug, projectName }) => {
    return {
      success: true,
      action: 'navigate',
      path: `/projects/${slug}`,
      projectName: projectName || slug,
    };
  },
});

export const scrollToSection = createTool({
  id: 'scroll_to_section',
  description: 'Scroll to a specific section on the current page. Use this to help users navigate within a page.',
  inputSchema: z.object({
    sectionId: z.string().describe('The section ID to scroll to (e.g., "about", "projects", "contact", "blog")'),
    sectionName: z.string().optional().describe('The display name of the section'),
  }),
  execute: async ({ sectionId, sectionName }) => {
    return {
      success: true,
      action: 'scroll',
      target: sectionId,
      sectionName: sectionName || sectionId,
    };
  },
});

export const openExternalLink = createTool({
  id: 'open_external_link',
  description: 'Open an external link in a new tab. Use for GitHub, Figma, live demos, etc.',
  inputSchema: z.object({
    url: z.string().url().describe('The URL to open'),
    description: z.string().optional().describe('What this link is for'),
  }),
  execute: async ({ url, description }) => {
    return {
      success: true,
      action: 'open_link',
      url,
      description,
    };
  },
});
