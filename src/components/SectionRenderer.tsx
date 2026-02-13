import dynamic from "next/dynamic";
import { memo } from "react";

// Dynamic imports for section components - loads only when section type is used
const Hero = dynamic(() => import("@/components/project-sections/hero"));
const QuickFacts = dynamic(() => import("@/components/project-sections/quick-facts"));
const ExecutiveSummary = dynamic(() => import("@/components/project-sections/executive-summary"));
const ProblemStatement = dynamic(() => import("@/components/project-sections/problem-statement"));
const DesignThinking = dynamic(() => import("@/components/project-sections/design-thinking"));
const UserFlows = dynamic(() => import("@/components/project-sections/user-flows"));
const Features = dynamic(() => import("@/components/project-sections/features"));
const UXPrinciples = dynamic(() => import("@/components/project-sections/ux-principles"));
const SocialProof = dynamic(() => import("@/components/project-sections/social-proof"));
const TechStack = dynamic(() => import("@/components/project-sections/tech-stack"));

interface SectionRendererProps {
  type: string;
  content: string; // JSON stringified data
}

// Memoized to prevent unnecessary re-renders
export const SectionRenderer = memo(function SectionRenderer({
  type,
  content,
}: SectionRendererProps) {
  // Parse JSON once per section
  let data;
  try {
    data = JSON.parse(content);
  } catch (error) {
    console.error(`Failed to parse content for section type: ${type}`, error);
    return null;
  }

  switch (type) {
    case "hero":
      return <Hero data={data} />;

    case "quick-facts":
      return <QuickFacts data={data} />;

    case "executive-summary":
      return <ExecutiveSummary data={data} />;

    case "problem-statement":
      return <ProblemStatement data={data} />;

    case "design-thinking":
      return <DesignThinking data={data} />;

    case "user-flows":
      return <UserFlows data={data} />;

    case "features":
      return <Features data={data} />;

    case "ux-principles":
      return <UXPrinciples data={data} />;

    case "social-proof":
      return <SocialProof data={data} />;

    case "tech-stack":
      return <TechStack data={data} />;

    default:
      console.warn(`Unknown section type: ${type}`);
      return null;
  }
});
