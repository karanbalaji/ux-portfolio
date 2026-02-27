# CopilotKit + Mastra Integration

This document covers the CopilotKit integration with Mastra for the portfolio site, enabling an AI-powered assistant that can navigate, search, and display generative UI components.

## Overview

The integration provides:
- **CopilotSidebar**: AI chat interface in the bottom-right corner
- **Frontend Actions**: Tools that execute on the client (navigation, scrolling)
- **Generative UI**: Rich React components rendered in the chat
- **OpenAI Backend**: GPT-4o powered responses

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PORTFOLIO (Next.js 16)                    │
├─────────────────────────────────────────────────────────────┤
│  CopilotSidebar (bottom-right corner)                        │
│  ├── Chat interface with streaming                           │
│  ├── useCopilotAction (frontend tools)                       │
│  └── Generative UI components                                │
├─────────────────────────────────────────────────────────────┤
│  /api/copilotkit → CopilotRuntime + OpenAIAdapter            │
└─────────────────────────────────────────────────────────────┘
```

## Quick Start

### 1. Environment Setup

Add to `.env.local`:
```bash
OPENAI_API_KEY=your-openai-api-key
```

### 2. Start Development

```bash
npm run dev
```

The CopilotSidebar will appear in the bottom-right corner of every page.

## Available Actions

### Navigation & Browsing

| Action | Description |
|--------|-------------|
| `navigate_to_project` | Navigate to a project page by slug |
| `scroll_to_section` | Scroll to a specific section (about, projects, contact) |
| `openExternalLink` | Open a URL in a new tab |

### Generative UI

| Action | Description |
|--------|-------------|
| `show_project_card` | Display a rich project card with image |
| `show_contact_form` | Display an interactive contact form |
| `show_meeting_scheduler` | Display Cal.com meeting scheduler |
| `show_comparison_table` | Compare multiple projects side-by-side |
| `show_tech_stack_diagram` | Visual tech stack display |

## File Structure

```
src/
├── app/
│   ├── api/copilotkit/
│   │   └── route.ts           # CopilotKit API endpoint
│   └── layout.tsx             # CopilotProvider wrapper
├── components/
│   └── copilot/
│       ├── portfolio-copilot.tsx  # Main component with actions
│       ├── copilot-provider.tsx    # Provider wrapper
│       └── generative-ui/
│           ├── project-card.tsx
│           ├── contact-form.tsx
│           ├── comparison-table.tsx
│           ├── meeting-scheduler.tsx
│           └── tech-stack-diagram.tsx
└── mastra/
    ├── index.ts               # Mastra configuration
    ├── agents/
    │   └── portfolio-agent.ts # Portfolio assistant agent
    └── tools/
        ├── navigation.ts      # Navigation tools
        ├── content.ts         # Content search tools
        └── generative-ui.ts   # GenUI tools
```

## Usage Examples

### Ask about a project
```
"Tell me about the fintech-toronto project"
```

### Navigate to a project
```
"Take me to the design system project"
```

### Get in touch
```
"I'd like to schedule a meeting"
"Show me the contact form"
```

### Compare projects
```
"Compare fintech-toronto and design-system projects"
```

## Customization

### Adding New Actions

Edit `src/components/copilot/portfolio-copilot.tsx`:

```tsx
useCopilotAction({
  name: "my_new_action",
  description: "Description for the AI to understand when to use this",
  parameters: [
    { name: "param1", type: "string", description: "Parameter description" },
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
3. Add action in `portfolio-copilot.tsx`

## Troubleshooting

### CopilotSidebar not appearing
- Check that `OPENAI_API_KEY` is set in `.env.local`
- Verify the CopilotProvider wraps your app in layout.tsx

### Actions not working
- Check browser console for errors
- Verify the action name matches between handler and AI response

### Type errors
- Run `npx tsc --noEmit` to check for TypeScript issues

## Dependencies

```json
{
  "@copilotkit/react-core": "latest",
  "@copilotkit/react-ui": "latest",
  "@copilotkit/runtime": "latest",
  "@mastra/core": "latest",
  "@ai-sdk/openai": "latest"
}
```

## Future Enhancements

- [ ] A2UI support for declarative generative UI
- [ ] MCP Apps integration for external tools
- [ ] Multi-model support (Claude, Gemini fallbacks)
- [ ] Conversation persistence
- [ ] Project recommendations based on browsing history
