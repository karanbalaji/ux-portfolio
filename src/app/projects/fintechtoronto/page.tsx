import { Metadata } from "next"
import FintechTorontoHero from "./components/fintech-toronto-hero"
import TableOfContents from "./components/table-of-contents"
import ExecutiveSummary from "./components/executive-summary"
import ProblemStatement from "./components/problem-statement"
import DesignThinking from "./components/design-thinking"
import UserFlows from "./components/user-flows"
import Features from "./components/features"
import UXPrinciples from "./components/ux-principles"
import TechStack from "./components/tech-stack"

export const metadata: Metadata = {
  title: "FintechToronto.com Case Study | Karan's Portfolio",
  description: "Enhanced UX Case Study for FintechToronto.com - A centralized platform for Toronto's fintech ecosystem",
}

export default function FintechTorontoPage() {
  return (
    <div className="min-h-screen bg-background">
      <FintechTorontoHero />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          <div className="hidden lg:block sticky top-24 self-start">
            <TableOfContents />
          </div>
          <div className="space-y-16">
            <ExecutiveSummary />
            <ProblemStatement />
            <DesignThinking />
            <UserFlows />
            <Features />
            <UXPrinciples />
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  )
} 