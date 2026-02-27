# CopilotKit + Mastra Integration

This document covers the CopilotKit and Mastra integration for the portfolio site, enabling AI-powered chat, generative UI, and frontend tools.

## Quick Start

### 1. Environment Setup

Add to `.env.local`:
```bash
OPENAI_API_KEY=your-openai-api-key
```

### 2. Run Development Server

```bash
npm run dev:all
```

The CopilotKit sidebar will appear on all pages (bottom-right corner).

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                        │
├─────────────────────────────────────────────────────────────┤
│  CopilotSidebar (bottom-right)                               │
│  ├── Chat interface with streaming responses                 │
│  ├── Generative UI components                                │
│  │   ├── ProjectCard - Rich project preview                 │
│  │   ├── ContactForm - Interactive contact form             │
│  │   ├── ComparisonTable - Side-by-side project comparison  │
│  │   ├── MeetingScheduler - Cal.com integration             │
│  │   └── TechStackDiagram - Visual tech categories          │
│  └── Frontend Tools (navigation, scroll)                     │
├─────────────────────────────────────────────────────────────┤
│  /api/copilotkit → CopilotRuntime with OpenAIAdapter        │
├─────────────────────────────────────────────────────────────┤
│  Data: Convex (projects, blog_posts)                         │
└─────────────────────────────────────────────────────────────┘
```

## Available Actions

### Navigation Tools
| Action | Description |
|--------|-------------|
| `navigate_to_project` | Navigate to a project page by slug |
| `scroll_to_section` | Scroll to a page section by ID |
| `openExternalLink` | Open external URL in new tab |

### Generative UI Tools
| Action | Component | Description |
|--------|-----------|-------------|
| `show_project_card` | ProjectCard | Display rich project preview |
| `show_contact_form` | ContactForm | Interactive contact form |
| `show_meeting_scheduler` | MeetingScheduler | Cal.com scheduling widget |
| `show_comparison_table` | ComparisonTable | Compare 2-4 projects |
| `show_tech_stack_diagram` | TechStackDiagram | Visual tech categories |

## File Structure

```
src/
├── app/
│   ├── api/copilotkit/
│   │   └── route.ts              # CopilotKit API endpoint
│   └── layout.tsx                # Root layout with CopilotProvider
├── components/
│   └── copilot/
│       ├── portfolio-copilot.tsx # Main copilot component
│       ├── copilot-provider.tsx  # CopilotKit wrapper
│       └── generative-ui/
│           ├── project-card.tsx
│           ├── contact-form.tsx
│           ├── comparison-table.tsx
│           ├── meeting-scheduler.tsx
│           ├── tech-stack-diagram.tsx
│           └── index.ts
├── mastra/
│   ├── index.ts                  # Mastra configuration
│   ├── agents/
│   │   └── portfolio-agent.ts    # Portfolio assistant agent
│   └── tools/
│       ├── navigation.ts         # Navigation tools
│       ├── content.ts            # Content tools
│       └── generative-ui.ts      # GenUI tools
└── convex/
    └── projects.ts               # Added searchProjects query
```

## Dependencies

```json
{
  "@copilotkit/react-core": "latest",
  "@copilotkit/react-ui": "latest",
  "@copilotkit/runtime": "latest",
  "@ag-ui/core": "latest",
  "@ag-ui/client": "latest",
  "@mastra/core": "latest",
  "@ai-sdk/openai": "latest",
  "@ai-sdk/anthropic": "latest",
  "@ai-sdk/google": "latest",
  "zod": "latest"
}
```

## Usage Examples

### Ask About Projects
```
User: "Tell me about the fintech project"
Assistant: [Shows ProjectCard with rich preview]
```

### Compare Projects
```
User: "Compare the fintech and design system projects"
Assistant: [Shows ComparisonTable side-by-side]
```

### Navigate
```
User: "Take me to the about section"
Assistant: [Scrolls to #about section]
```

### Contact
```
User: "I want to get in touch"
Assistant: [Shows ContactForm or MeetingScheduler]
```

## Customization

### Adding New Actions

1. Define the action in `portfolio-copilot.tsx`:
```tsx
useCopilotAction({
  name: "my_new_action",
  description: "What this action does",
  parameters: [
    { name: "param1", type: "string", description: "Description" },
  ],
  handler: async ({ param1 }) => {
    // Your logic here
    return { success: true };
  },
});
```

### Adding New GenUI Components

1. Create component in `src/components/copilot/generative-ui/`
2. Export from `index.ts`
3. Add corresponding `useCopilotAction` in `portfolio-copilot.tsx`

## Troubleshooting

### Sidebar Not Appearing
- Check that `CopilotProvider` wraps the app in `layout.tsx`
- Ensure `@copilotkit/react-ui/styles.css` is imported

### API Errors
- Verify `OPENAI_API_KEY` is set in `.env.local`
- Check `/api/copilotkit` endpoint returns 200

### Type Errors
- Run `npx tsc --noEmit` to check for type issues
- Ensure all imports use correct paths

## Future Enhancements

- [ ] Add A2UI support for declarative GenUI
- [ ] Integrate MCP Apps for external tools
- [ ] Add conversation memory with Convex
- [ ] Implement AI-powered project recommendations
- [ ] Add multi-language support

## Resources

- [CopilotKit Docs](https://docs.copilotkit.ai)
- [Mastra Docs](https://mastra.ai/docs)
- [AG-UI Protocol](https://ag-ui.com)
- [OpenAI API](https://platform.openai.com/docs)
