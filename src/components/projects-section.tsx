"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

// Sample project data
const projects = [
  {
    title: "FintechToronto.com",
    description: "A comprehensive UX case study for Toronto's fintech ecosystem platform featuring user research, design thinking, and behavioral economics principles.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
    tags: ["UX Research", "Design Systems", "React", "Next.js"],
    link: "/projects/fintechtoronto",
    type: "case-study" as const
  },
  {
    title: "E-commerce Dashboard",
    description: "Modern admin dashboard for e-commerce management with real-time analytics and inventory tracking.",
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    type: "project" as const
  },
  {
    title: "Design System Library",
    description: "Comprehensive component library built with React and documented with Storybook for consistent UI development.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "Storybook", "CSS-in-JS", "Documentation"],
    github: "https://github.com",
    demo: "https://demo.com",
    type: "project" as const
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Featured Projects</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-grey-300 max-w-[600px]">
            A showcase of my recent work in UX design and frontend development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var" containerClassName="py-8">
              <CardBody className="bg-grey-50 dark:bg-grey-900 relative group/card border border-grey-200 dark:border-grey-700 w-auto sm:w-[350px] h-auto rounded-xl p-6 shadow-sm">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-grey-900 dark:text-grey-50"
                >
                  {project.title}
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-grey-600 dark:text-grey-300 text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                  />
                </CardItem>
                
                <CardItem
                  translateZ="50"
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-grey-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </CardItem>
                
                <div className="flex justify-between items-center mt-6">
                  {project.type === "case-study" ? (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.link}
                      className="flex-1"
                    >
                      <Button variant="default" size="sm" className="w-full gap-2">
                        View Case Study <ExternalLink className="h-3 w-3" />
                      </Button>
                    </CardItem>
                  ) : (
                    <>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 mr-2"
                      >
                        <Button variant="default" size="sm" className="w-full gap-2">
                          Live Demo <ExternalLink className="h-3 w-3" />
                        </Button>
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-3 w-3" />
                        </Button>
                      </CardItem>
                    </>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
} 