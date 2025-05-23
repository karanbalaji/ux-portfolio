import { ReactNode } from "react"
import { ProjectNavbar } from "@/components/project-navbar"
import { ProjectFooter } from "@/components/project-footer"

interface ProjectLayoutProps {
  children: ReactNode
  projectTitle: string
  projectUrl?: string
  nextProject?: {
    title: string
    href: string
    description: string
  }
  previousProject?: {
    title: string
    href: string
    description: string
  }
  className?: string
}

export function ProjectLayout({ 
  children, 
  projectTitle, 
  projectUrl, 
  nextProject, 
  previousProject,
  className = ""
}: ProjectLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <ProjectNavbar 
        projectTitle={projectTitle}
        projectUrl={projectUrl}
      />
      
      {children}
      
      <ProjectFooter 
        currentProject={{
          title: projectTitle,
          url: projectUrl
        }}
        nextProject={nextProject}
        previousProject={previousProject}
      />
    </div>
  )
} 