"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "A complete redesign of an e-commerce platform focusing on improving user experience and conversion rates.",
    image: "/vercel.svg",
    tags: ["UX Design", "UI Design", "React"],
    link: "#",
  },
  {
    id: 2,
    title: "Banking App",
    description: "A modern banking application with a focus on accessibility and security.",
    image: "/vercel.svg",
    tags: ["UX Research", "UI Design", "NextJS"],
    link: "#",
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    description: "A comprehensive dashboard for healthcare providers to monitor patient data and metrics.",
    image: "/vercel.svg",
    tags: ["UI Design", "Data Visualization", "TypeScript"],
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50 backdrop-blur-sm border-b border-muted">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
            A selection of my recent work in UX engineering and design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg border border-muted bg-background/70 backdrop-blur-sm">
              <div className="relative h-[180px] md:h-[200px] w-full bg-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-6 dark:invert"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block px-3 py-1 bg-muted/60 backdrop-blur-sm text-foreground/80 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full gap-2 bg-background/70 backdrop-blur-sm border-muted hover:bg-primary/5" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 