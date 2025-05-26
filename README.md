# Karan Balaji - UX Portfolio

A modern, responsive portfolio website showcasing UX design expertise, projects, and professional journey. Built with Next.js 15 and featuring a clean, accessible design with dark/light theme support.

## 🌐 Live Demo

**[Visit Portfolio →](https://karanbalaji.com/)**

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Project Showcase**: Detailed case studies with interactive elements
- **Blog Integration**: Dynamic blog section with RSS feed support
- **Contact Form**: Professional contact section for inquiries
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast loading
- **Accessibility**: WCAG compliant with proper semantic markup
- **SEO Optimized**: Meta tags, structured data, and optimized content

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Animations**: [Motion](https://motion.dev/) (Framer Motion successor)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

### Development Tools
- **Build Tool**: Turbopack (Next.js 15 bundler)
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript 5
- **Package Manager**: npm/pnpm

### Deployment
- **Platform**: Static export optimized for various hosting platforms
- **Images**: Unoptimized for static hosting compatibility

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/karan-ux-portfolio.git
   cd karan-ux-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (includes blog data generation)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate-blog` - Generate blog data from RSS feeds

## 📁 Project Structure

```
karan-ux-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── projects/          # Project case studies
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── hero-section.tsx   # Landing section
│   │   ├── about-section.tsx  # About/bio section
│   │   ├── projects-section.tsx # Projects showcase
│   │   ├── blog-section.tsx   # Blog integration
│   │   └── contact-section.tsx # Contact form
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── scripts/                   # Build scripts
│   └── generate-blog-data.ts  # Blog RSS processing
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Key Components

### Hero Section
Professional introduction with animated elements and call-to-action

### About Section  
Detailed background covering UX expertise, AWS certification, and continuous learning philosophy

### Projects Section
Showcase of key projects including:
- **FinTech Toronto** - A centralized platform connecting Toronto's fintech ecosystem through user-centered design and comprehensive UX case study
- **PocketHealth** - Design engineering case study boosting sign-up conversions from 650K to 1.1M through mobile-first design, outcome-driven optimization, and patient-centered UX engineering

### Blog Integration
Dynamic blog section pulling from RSS feeds with:
- Automated content generation
- Responsive card layouts
- Read more functionality

### Contact Section
Professional contact form with validation and accessibility features

## 🔧 Configuration

### Environment Setup
The project uses static export configuration for broad hosting compatibility:

```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
```

### Theme Configuration
Supports system preference detection and manual toggle between light/dark themes.

### Blog Data Generation
Automated RSS feed processing runs before build to generate static blog content.

## 🚀 Deployment

This project is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify** 
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting provider

### Build for Production
```bash
npm run build
```

The `out/` directory contains the static export ready for deployment.

## 📱 Responsive Design

- **Mobile-first** approach with progressive enhancement
- **Breakpoints**: Tailored for mobile, tablet, and desktop
- **Touch-friendly**: Optimized interactions for mobile devices
- **Performance**: Optimized images and lazy loading

## ♿ Accessibility

- **WCAG 2.1 AA** compliance
- **Semantic HTML** structure
- **Keyboard navigation** support
- **Screen reader** optimized
- **Color contrast** meets accessibility standards
- **Focus management** for interactive elements

## 🔍 SEO Features

- **Meta tags** optimization
- **Open Graph** social sharing
- **Structured data** markup
- **Sitemap** generation
- **Performance** optimized for Core Web Vitals

## 👨‍💻 About the Developer

**Karan Balaji** is a UX Designer and AWS Solutions Architect based in Toronto, specializing in creating conversion-driven digital experiences. This portfolio showcases the intersection of design thinking and technical implementation.

### Connect
- **Website**: [karanbalaji.com](https://karanbalaji.com/)
- **Email**: karanarjunb@gmail.com
- **Blog**: [blog.karanbalaji.com](https://blog.karanbalaji.com/)

## 📄 License

This project is private and proprietary. All rights reserved.

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
