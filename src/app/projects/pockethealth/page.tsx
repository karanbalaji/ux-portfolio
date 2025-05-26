import { Metadata } from "next"
import { ProjectNavbar } from "@/components/project-navbar"
import { ProjectFooter } from "@/components/project-footer"
import { MobileTableOfContents } from "@/components/mobile-table-of-contents"
import { ProjectBottomNavigation } from "@/components/project-bottom-navigation"
import PocketHealthHero from "./components/pockethealth-hero"
import TableOfContents from "./components/table-of-contents"
import ExecutiveSummary from "./components/executive-summary"
import ProblemStatement from "./components/problem-statement"
import DesignThinking from "./components/design-thinking"
import UserFlows from "./components/user-flows"
import Features from "./components/features"
import UXPrinciples from "./components/ux-principles"
import SocialProof from "./components/social-proof"
import TechStack from "./components/tech-stack"
import ReadingProgress from "./components/reading-progress"
import BackToTop from "./components/back-to-top"
import QuickFacts from "./components/quick-facts"
import SectionDivider from "./components/section-divider"
import Breadcrumbs from "./components/breadcrumbs"

// Table of contents data for mobile component
const tocData = [
  { 
    id: "executive-summary", 
    label: "Executive Summary",
    subsections: [
      { id: "key-metrics", label: "Key Metrics" },
      { id: "impact-overview", label: "Impact Overview" }
    ]
  },
  { 
    id: "problem-statement", 
    label: "Problem Statement",
    subsections: [
      { id: "conversion-challenges", label: "Conversion Challenges" },
      { id: "user-personas", label: "User Personas" },
      { id: "technical-debt", label: "Technical Debt" }
    ]
  },
  { 
    id: "design-thinking", 
    label: "Design Process",
    subsections: [
      { id: "research-insights", label: "Research & Insights" },
      { id: "ab-testing", label: "A/B Testing Strategy" },
      { id: "iterative-design", label: "Iterative Design" },
      { id: "implementation", label: "Implementation" }
    ]
  },
  { 
    id: "user-flows", 
    label: "User Flows",
    subsections: [
      { id: "landing-page-optimization", label: "Landing Page Optimization" },
      { id: "landing-pages", label: "Landing Page Templates" },
      { id: "mobile-experience", label: "Mobile Experience Design" }
    ]
  },
  { 
    id: "features", 
    label: "UX Laws & Heuristic Evaluation",
    subsections: [
      { id: "conversion-optimization", label: "UX Laws Applied" },
      { id: "analytics-tracking", label: "Heuristic Evaluation" },
      { id: "performance-improvements", label: "UX Improvements" }
    ]
  },
  { 
    id: "ux-principles", 
    label: "UX Principles & Outcome-Driven Design",
    subsections: [
      { id: "fundamental-laws", label: "Fundamental UX Laws" },
      { id: "outcome-driven-design", label: "Outcome-Driven Design" },
      { id: "references", label: "References" }
    ]
  },
  { 
    id: "social-proof", 
    label: "Results & Impact",
    subsections: [
      { id: "conversion-metrics", label: "Conversion Metrics" },
      { id: "performance-gains", label: "Performance Gains" },
      { id: "seo-improvements", label: "SEO Improvements" }
    ]
  },
  { 
    id: "tech-stack", 
    label: "Tech Stack",
    subsections: [
      { id: "analytics-tools", label: "Analytics Tools" },
      { id: "testing-platforms", label: "Testing Platforms" },
      { id: "design-tools", label: "Design Tools" }
    ]
  },
]

export const metadata: Metadata = {
  title: "PocketHealth Case Study | Karan's Portfolio",
  description: "Growth Engineering Case Study for PocketHealth.com - Boosting conversions from 650K to 1.1M through data-driven UX optimization",
}

export default function PocketHealthPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <ReadingProgress />
      
      <ProjectNavbar 
        projectTitle="PocketHealth.com"
        projectUrl="https://pockethealth.com"
        figmaUrl="https://figma.com/file/pockethealth-designs"
        githubUrl="#"
      />
      
      <PocketHealthHero />
      
      {/* Mobile Table of Contents */}
      <MobileTableOfContents items={tocData} />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Quick Facts */}
        <div className="mb-12">
          <QuickFacts />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          <div className="hidden lg:block sticky top-20 self-start">
            <TableOfContents />
          </div>
          <div className="space-y-8">
            <ExecutiveSummary />
            <SectionDivider variant="gradient" />
            
            <ProblemStatement />
            <SectionDivider variant="gradient" />
            
            <DesignThinking />
            <SectionDivider variant="gradient" />
            
            <UserFlows />
            <SectionDivider variant="gradient" />
            
            <Features />
            <SectionDivider variant="dots" />
            
            <UXPrinciples />
            <SectionDivider variant="gradient" />
            
            <SocialProof />
            <SectionDivider variant="gradient" />
            
            <TechStack />
          </div>
        </div>
      </div>
      
      <ProjectFooter 
        currentProject={{
          title: "PocketHealth.com",
          url: "https://pockethealth.com"
        }}
        nextProject={{
          title: "FinTech Toronto",
          href: "/projects/fintechtoronto",
          description: "Centralized platform for Toronto's fintech ecosystem"
        }}
      />
      
      <BackToTop />
      
      {/* Project Bottom Navigation for Mobile */}
      <ProjectBottomNavigation 
        tocItems={tocData}
        projectUrl="https://pockethealth.com"
      />
    </div>
  )
} 
