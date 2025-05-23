import { Metadata } from "next"
import { ProjectNavbar } from "@/components/project-navbar"
import { ProjectFooter } from "@/components/project-footer"
import { MobileTableOfContents } from "@/components/mobile-table-of-contents"
import FintechTorontoHero from "./components/fintech-toronto-hero"
import TableOfContents from "./components/table-of-contents"
import ExecutiveSummary from "./components/executive-summary"
import ProblemStatement from "./components/problem-statement"
import DesignThinking from "./components/design-thinking"
import UserFlows from "./components/user-flows"
import Features from "./components/features"
import UXPrinciples from "./components/ux-principles"
import SocialProof from "./components/social-proof"
import TechStack from "./components/tech-stack"

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
      { id: "market-analysis", label: "Market Analysis" },
      { id: "user-personas", label: "User Personas" },
      { id: "pain-points", label: "Pain Points" }
    ]
  },
  { 
    id: "design-thinking", 
    label: "Design Process",
    subsections: [
      { id: "empathize-define", label: "Empathize & Define" },
      { id: "ideate", label: "Ideate" },
      { id: "prototype-test", label: "Prototype & Test" },
      { id: "implement", label: "Implement" }
    ]
  },
  { 
    id: "user-flows", 
    label: "User Flows",
    subsections: [
      { id: "content-creation", label: "Content Creation" },
      { id: "event-discovery", label: "Event Discovery" },
      { id: "user-onboarding", label: "User Onboarding" }
    ]
  },
  { 
    id: "features", 
    label: "Features & UX",
    subsections: [
      { id: "ui-patterns", label: "UI Patterns" },
      { id: "accessibility", label: "Accessibility" },
      { id: "mobile-design", label: "Mobile Design" }
    ]
  },
  { 
    id: "ux-principles", 
    label: "UX Principles",
    subsections: [
      { id: "usability-heuristics", label: "Usability Heuristics" },
      { id: "behavioral-economics", label: "Behavioral Economics" }
    ]
  },
  { 
    id: "social-proof", 
    label: "Social Proof",
    subsections: [
      { id: "event-success", label: "Fintech + AI Meetup" },
      { id: "community-impact", label: "Community Impact Metrics" }
    ]
  },
  { 
    id: "tech-stack", 
    label: "Tech Stack",
    subsections: [
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "infrastructure", label: "Infrastructure" }
    ]
  },
]

export const metadata: Metadata = {
  title: "FintechToronto.com Case Study | Karan's Portfolio",
  description: "Enhanced UX Case Study for FintechToronto.com - A centralized platform for Toronto's fintech ecosystem",
}

export default function FintechTorontoPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProjectNavbar 
        projectTitle="FintechToronto.com"
        projectUrl="https://fintechtoronto.com"
        figmaUrl="https://figma.com/file/example-fintech-designs"
        githubUrl="https://github.com/example/fintech-toronto"
      />
      
      <FintechTorontoHero />
      
      {/* Mobile Table of Contents */}
      <MobileTableOfContents items={tocData} />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          <div className="hidden lg:block sticky top-20 self-start">
            <TableOfContents />
          </div>
          <div className="space-y-16">
            <ExecutiveSummary />
            <ProblemStatement />
            <DesignThinking />
            <UserFlows />
            <Features />
            <UXPrinciples />
            <SocialProof />
            <TechStack />
          </div>
        </div>
      </div>
      
      <ProjectFooter 
        currentProject={{
          title: "FintechToronto.com",
          url: "https://fintechtoronto.com"
        }}
        nextProject={{
          title: "E-Commerce Platform",
          href: "/projects/ecommerce",
          description: "Modern shopping experience with advanced personalization"
        }}
        previousProject={{
          title: "Healthcare Dashboard",
          href: "/projects/healthcare",
          description: "Patient management system for healthcare providers"
        }}
      />
    </div>
  )
} 