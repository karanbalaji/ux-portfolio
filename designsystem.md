# Design System Documentation

## Overview
This project is a high-fidelity personal portfolio and blog built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. It features a modern, interactive aesthetic with dark mode support, 3D elements, and smooth animations.

## Tech Stack & Core Libraries
- **Framework:** Next.js 16 (Turbopack)
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Component Primitives:** Radix UI (`@radix-ui/react-*`)
- **Icons:** Lucide React
- **Animations:** Framer Motion (`motion`), `tw-animate-css`
- **Fonts:** Geist Sans & Geist Mono (`next/font/google`)
- **Theme Management:** `next-themes`

## Typography
The project uses the **Geist** font family, optimized for legibility and code display.

- **Sans Serif:** `Geist Sans` (Variable)
  - CSS Variable: `--font-geist-sans`
  - Tailwind Class: `font-sans` (Default)
- **Monospace:** `Geist Mono` (Variable)
  - CSS Variable: `--font-geist-mono`
  - Tailwind Class: `font-mono`

## Color System
Colors are defined in `src/app/globals.css` using the **OKLCH** color space for superior perceptibility and gamut support. The system supports both light and dark modes via CSS variables.

### Semantic Palette
| Token | Description |
|-------|-------------|
| `background` | Page background color |
| `foreground` | Default text color |
| `primary` | Main brand color (used for primary buttons) |
| `secondary` | Secondary brand color (softer contrast) |
| `tertiary` | Third-level accent color |
| `accent` | Used for hover states and subtle highlights |
| `muted` | De-emphasized backgrounds |
| `card` | Background for card components |
| `popover` | Background for floating elements (dialogs, dropdowns) |
| `destructive` | Error or danger actions (e.g., delete) |
| `border` | Default border color |
| `input` | Form input borders/backgrounds |
| `ring` | Focus ring color |

### Grey Scale
A comprehensive neutral scale is defined from `grey-50` to `grey-900`.

## Component Architecture
UI components are located in `src/components/ui`. They follow a pattern heavily inspired by **shadcn/ui**, leveraging Radix UI primitives for accessibility and behavior, styled with Tailwind CSS.

### Common Patterns
1.  **Variants (`cva`):** Components use `class-variance-authority` to manage style variants (e.g., `default`, `outline`, `ghost`).
2.  **CN Utility:** The `cn` utility (`src/lib/utils.ts`) is used everywhere to merge Tailwind classes and resolve conflicts.
3.  **Data Slots:** Components often use `data-slot="..."` attributes (e.g., `data-slot="button"`) to identify internal parts, useful for debugging or specific CSS targeting.
4.  **Radix Primitives:** Complex interactive components (Dialogs, Tabs, Switches) wrap Radix UI primitives.

### Key Components

#### Button (`src/components/ui/button.tsx`)
- **Variants:** `default`, `destructive`, `outline`, `secondary`, `tertiary`, `ghost`, `link`, `ghost-tertiary`.
- **Sizes:** `default`, `sm`, `lg`, `icon`.
- **Focus:** Custom focus rings using `ring` and `ring-offset` utilities.

#### Card (`src/components/ui/card.tsx`)
- **Structure:** `Card` > `CardHeader` > `CardTitle` + `CardDescription` > `CardContent` > `CardFooter`.
- **Styling:** Rounded corners (`rounded-xl`), border, and shadow.
- **Layout:** The header uses a specific grid layout to accommodate optional actions.

### Visual Effects
The project includes several advanced visual components (likely from Aceternity UI or similar):
- `3d-card`: Parallax depth effects.
- `background-beams`: Animated background lighting.
- `hover-border-gradient`: Interactive border animations.
- `3d-marquee`: Infinite scrolling content.

## Directory Structure
```
/src
  /app           # App Router pages and layouts
    globals.css  # Global styles and Tailwind theme variables
    layout.tsx   # Root layout with providers (Theme, PostHog)
  /components
    /ui          # Reusable, atomic UI components (Buttons, Inputs)
    *.tsx        # Feature-specific or layout components (Navbar, Footer)
  /lib
    utils.ts     # Utility functions (cn)
```

## Usage Instructions for Agents
1.  **Adding Components:** When creating new UI elements, check `src/components/ui` first. Prefer composing existing primitives over writing raw HTML/CSS.
2.  **Styling:** ALWAYS use Tailwind CSS utility classes. Avoid inline styles or CSS modules unless absolutely necessary for complex animations.
3.  **Dark Mode:** Ensure all color classes work for both light and dark modes (e.g., using `bg-background` instead of `bg-white`).
4.  **Icons:** Use `lucide-react` for iconography.
5.  **New Pages:** Place new routes in `src/app`. Use `page.tsx` for the view and `layout.tsx` if a nested layout is needed.

## Configuration
- **Tailwind:** Configured in `tailwind.config.ts` (content paths) and `src/app/globals.css` (`@theme`).
- **PostCSS:** `postcss.config.mjs` handles processing.
- **Icons:** `lucide-react` is the standard icon set.
