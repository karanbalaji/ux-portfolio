import { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/../convex/_generated/api";
import { notFound } from "next/navigation";
import { ProjectNavbar } from "@/components/project-navbar";
import { ProjectFooter } from "@/components/project-footer";
import { MobileTableOfContents } from "@/components/mobile-table-of-contents";
import { ProjectBottomNavigation } from "@/components/project-bottom-navigation";
import { SectionRenderer } from "@/components/SectionRenderer";
import ReadingProgress from "@/components/project-sections/reading-progress";
import BackToTop from "@/components/project-sections/back-to-top";
import Breadcrumbs from "@/components/project-sections/breadcrumbs";
import TableOfContents from "@/components/project-sections/table-of-contents";
import SectionDivider from "@/components/project-sections/section-divider";

// Metadata generation
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchQuery(api.projects.getProjectBySlug, { slug });

  if (!project) {
    return {
      title: "Project Not Found | Karan's Portfolio"
    };
  }

  return {
    title: `${project.title} | Karan's Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

// Main page component - server component
export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = await fetchQuery(api.projects.getProjectBySlug, { slug });

  if (!project) {
    notFound();
  }

  // Parse project title for navbar
  const projectTitle = project.title.includes("PocketHealth")
    ? "PocketHealth.com"
    : "FintechToronto.com";

  // Separate sections by rendering context (matching original static page layout)
  const heroSection = project.sections.find(s => s.type === "hero");
  const quickFactsSection = project.sections.find(s => s.type === "quick-facts");
  const contentSections = project.sections.filter(s => s.type !== "hero" && s.type !== "quick-facts");

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <ReadingProgress />

      <ProjectNavbar
        projectTitle={projectTitle}
        projectUrl={project.liveUrl}
        figmaUrl={project.figmaUrl}
        githubUrl={project.githubUrl}
      />

      {/* Hero - full width, outside container (matches original static layout) */}
      {heroSection && (
        <SectionRenderer type={heroSection.type} content={heroSection.content} />
      )}

      {/* Mobile Table of Contents */}
      <MobileTableOfContents items={project.toc} />

      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Quick Facts - inside container, before the TOC grid */}
        {quickFactsSection && (
          <div className="mb-12">
            <SectionRenderer type={quickFactsSection.type} content={quickFactsSection.content} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          <div className="hidden lg:block sticky top-20 self-start">
            <TableOfContents tocData={project.toc} />
          </div>

          <div className="space-y-8">
            {contentSections.map((section, index) => (
              <div key={`${section.type}-${index}`}>
                <SectionRenderer
                  type={section.type}
                  content={section.content}
                />
                {index < contentSections.length - 1 && (
                  <SectionDivider variant={index % 2 === 0 ? "gradient" : "dots"} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectFooter
        currentProject={{
          title: projectTitle,
          url: project.liveUrl
        }}
        nextProject={project.slug === "pockethealth" ? {
          title: "FinTech Toronto",
          href: "/projects/fintechtoronto",
          description: "Centralized platform for Toronto's fintech ecosystem"
        } : undefined}
        previousProject={project.slug === "fintechtoronto" ? {
          title: "PocketHealth.com",
          href: "/projects/pockethealth",
          description: "Design Engineering at PocketHealth - Mobile-first patient experience"
        } : undefined}
      />

      <BackToTop />

      {/* Project Bottom Navigation for Mobile */}
      <ProjectBottomNavigation
        tocItems={project.toc}
        projectUrl={project.liveUrl}
      />
    </div>
  );
}

// Static params for build-time generation
export async function generateStaticParams() {
  try {
    const projects = await fetchQuery(api.projects.getProjects, {});
    return projects.map((project) => ({
      slug: project.slug,
    }));
  } catch {
    // If Convex is unavailable at build time, pages render on-demand
    return [];
  }
}

// Optional: Add ISR revalidation
export const revalidate = 3600; // Revalidate every hour
