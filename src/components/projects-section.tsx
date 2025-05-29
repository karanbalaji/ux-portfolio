"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

// Featured project data
const projects = [
  {
    title: "FintechToronto.com (NEXT AI)",
    description: "A comprehensive UX case study for Toronto's fintech ecosystem platform featuring user research, design thinking, and behavioral economics principles.",
    image: "/images/fintechtoronto-cover.png",
    tags: ["UX Research", "Design Systems", "React", "Next.js"],
    link: "/projects/fintechtoronto",
    type: "case-study" as const
  },
  {
    title: "PocketHealth.com (Series B)",
    description: "Design Engineering case study - Boosting sign-up conversions from 650K to 1.1M through mobile-first design, outcome-driven optimization, and patient-centered UX engineering.",
    image: "/images/projects/pockethealth/pockethealth-cover.png",
    tags: ["Design Engineering", "Mobile-First", "A/B Testing", "Healthcare UX"],
    link: "/projects/pockethealth",
    type: "case-study" as const
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Featured Projects</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-white max-w-[600px]">
            A showcase of my recent work in UX design and frontend development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="block">
              <CardContainer className="inter-var" containerClassName="py-8">
                <CardBody className="bg-grey-50 dark:bg-grey-900 relative group/card border border-grey-200 dark:border-grey-700 w-auto sm:w-[480px] lg:w-[550px] h-[580px] lg:h-[620px] rounded-xl p-6 shadow-sm flex flex-col cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col h-full">
                <CardItem
                  translateZ="50"
                    className="text-xl lg:text-2xl font-bold text-grey-900 dark:text-grey-50"
                >
                  {project.title}
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                    className="text-grey-600 dark:text-white text-sm lg:text-base max-w-none mt-2 flex-grow-0"
                >
                  {project.description}
                </CardItem>
                
                  <CardItem translateZ="100" className="w-full mt-4 flex-shrink-0">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                      className="w-full h-auto object-contain rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 480px, 550px"
                  />
                </CardItem>
                
                <CardItem
                  translateZ="50"
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                        className="inline-block px-3 py-1 text-xs lg:text-sm font-medium bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-grey-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </CardItem>
                
                  <div className="flex-grow"></div>
                  
                  <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    className="flex-1"
                  >
                      <Button variant="default" size="default" className="w-full gap-2 lg:text-base pointer-events-none">
                        View Case Study <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 