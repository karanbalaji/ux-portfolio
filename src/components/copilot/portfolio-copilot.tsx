"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProjectCard } from "./generative-ui/project-card";
import { ContactForm } from "./generative-ui/contact-form";
import { ComparisonTable } from "./generative-ui/comparison-table";
import { MeetingScheduler } from "./generative-ui/meeting-scheduler";
import { TechStackDiagram } from "./generative-ui/tech-stack-diagram";

export function PortfolioCopilot() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [renderedComponent, setRenderedComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useCopilotReadable({
    description: "Current page path",
    value: currentPath,
  });

  useCopilotAction({
    name: "show_project_card",
    description: "Display a project card with rich visuals in the chat",
    parameters: [
      { name: "slug", type: "string", description: "Project slug" },
      { name: "title", type: "string", description: "Project title" },
      { name: "description", type: "string", description: "Brief description" },
      { name: "coverImage", type: "string", description: "Cover image URL" },
    ],
    handler: async ({ slug, title, description, coverImage }) => {
      setRenderedComponent(
        <ProjectCard
          slug={slug}
          title={title}
          description={description}
          coverImage={coverImage}
          onClick={() => router.push(`/projects/${slug}`)}
        />
      );
      return { success: true };
    },
  });

  useCopilotAction({
    name: "navigate_to_project",
    description: "Navigate the user to a specific project page",
    parameters: [
      { name: "slug", type: "string", description: "The project slug to navigate to" },
    ],
    handler: async ({ slug }) => {
      router.push(`/projects/${slug}`);
      return { success: true, slug };
    },
  });

  useCopilotAction({
    name: "scroll_to_section",
    description: "Scroll to a specific section on the current page",
    parameters: [
      { name: "sectionId", type: "string", description: "Section ID (e.g., 'about', 'projects', 'contact')" },
    ],
    handler: async ({ sectionId }) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return { success: true, sectionId };
      }
      return { success: false, sectionId };
    },
  });

  useCopilotAction({
    name: "show_contact_form",
    description: "Display an interactive contact form in the chat",
    parameters: [],
    handler: async () => {
      setRenderedComponent(<ContactForm />);
      return { success: true };
    },
  });

  useCopilotAction({
    name: "show_meeting_scheduler",
    description: "Display the Cal.com meeting scheduler widget",
    parameters: [
      {
        name: "meetingType",
        type: "string",
        description: "Type of meeting: quick-chat, consultation, or coffee-chat",
      },
    ],
    handler: async ({ meetingType }) => {
      const validType = (meetingType === "quick-chat" || meetingType === "consultation" || meetingType === "coffee-chat")
        ? meetingType
        : "quick-chat";
      setRenderedComponent(<MeetingScheduler meetingType={validType} />);
      return { success: true };
    },
  });

  useCopilotAction({
    name: "show_comparison_table",
    description: "Display a comparison table for multiple projects",
    parameters: [
      {
        name: "projectsJson",
        type: "string",
        description: "JSON string of projects array with slug, title, techStack, highlights",
      },
    ],
    handler: async ({ projectsJson }) => {
      try {
        const projects = JSON.parse(projectsJson);
        setRenderedComponent(<ComparisonTable projects={projects} />);
        return { success: true };
      } catch {
        return { success: false };
      }
    },
  });

  useCopilotAction({
    name: "show_tech_stack_diagram",
    description: "Display a visual tech stack diagram",
    parameters: [
      { name: "title", type: "string", description: "Title for the diagram" },
      {
        name: "categoriesJson",
        type: "string",
        description: "JSON string of categories array with name and technologies",
      },
    ],
    handler: async ({ title, categoriesJson }) => {
      try {
        const categories = JSON.parse(categoriesJson);
        setRenderedComponent(<TechStackDiagram title={title} categories={categories} />);
        return { success: true };
      } catch {
        return { success: false };
      }
    },
  });

  return (
    <>
      {renderedComponent}
      <CopilotSidebar
        defaultOpen={false}
        clickOutsideToClose={true}
        labels={{
          title: "Portfolio Assistant",
          initial:
            "Hi! 👋 I can help you explore Karan's projects, navigate the site, or get in touch. What would you like to see?",
          placeholder: "Ask about projects, skills, or contact...",
          regenerateResponse: "Regenerate",
        }}
        className="font-sans"
      />
    </>
  );
}
