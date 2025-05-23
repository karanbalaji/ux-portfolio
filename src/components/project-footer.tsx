import { Github, Linkedin, Twitter, Mail, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@karandesigner.com",
    icon: Mail,
  },
]

interface ProjectFooterProps {
  currentProject?: {
    title: string
    url?: string
  }
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
}

export function ProjectFooter({ currentProject, nextProject, previousProject }: ProjectFooterProps) {
  return (
    <footer className="bg-grey-100 dark:bg-grey-900 border-t border-grey-200 dark:border-grey-800 mt-16">
      {/* Project Navigation */}
      {(nextProject || previousProject) && (
        <div className="border-b border-grey-200 dark:border-grey-800">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Project */}
              <div className="space-y-4">
                {previousProject ? (
                  <Link 
                    href={previousProject.href}
                    className="group flex items-start gap-4 p-6 rounded-lg border border-grey-200 dark:border-grey-800 bg-white dark:bg-grey-800 hover:shadow-md transition-all duration-200"
                  >
                    <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Previous Project</p>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {previousProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {previousProject.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-800 bg-grey-50 dark:bg-grey-800/50">
                    <p className="text-muted-foreground text-center">First project in portfolio</p>
                  </div>
                )}
              </div>

              {/* Next Project */}
              <div className="space-y-4">
                {nextProject ? (
                  <Link 
                    href={nextProject.href}
                    className="group flex items-start gap-4 p-6 rounded-lg border border-grey-200 dark:border-grey-800 bg-white dark:bg-grey-800 hover:shadow-md transition-all duration-200 text-right"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Next Project</p>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {nextProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {nextProject.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                  </Link>
                ) : (
                  <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-800 bg-grey-50 dark:bg-grey-800/50">
                    <p className="text-muted-foreground text-center">Last project in portfolio</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Current Project */}
          <div className="lg:col-span-2">
            <Link href="/#home" className="text-2xl font-bold text-grey-900 dark:text-grey-50 hover:text-primary transition-colors">
              Karan UX
            </Link>
            {currentProject && (
              <div className="mt-4 p-4 rounded-lg bg-grey-50 dark:bg-grey-800/50 border border-grey-200 dark:border-grey-700">
                <h4 className="font-semibold text-foreground mb-2">Current Project</h4>
                <h3 className="text-lg font-bold text-primary">{currentProject.title}</h3>
                {currentProject.url && (
                  <Link 
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View Live Site →
                  </Link>
                )}
              </div>
            )}
            
            <p className="mt-4 text-grey-600 dark:text-grey-400 leading-relaxed">
              UX Engineer & Designer passionate about creating meaningful digital experiences.
            </p>
            
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-grey-50 dark:bg-grey-800 text-grey-600 dark:text-grey-400 hover:text-tertiary hover:bg-grey-200 dark:hover:bg-grey-700 transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">
              Portfolio
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#projects"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  All Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/resume.pdf"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Study Sections */}
          <div>
            <h3 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">
              This Case Study
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#executive-summary"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  Executive Summary
                </Link>
              </li>
              <li>
                <Link
                  href="#problem-statement"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  Problem Statement
                </Link>
              </li>
              <li>
                <Link
                  href="#design-thinking"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  Design Process
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                >
                  Key Features
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-tertiary/10 rounded-lg p-6 mb-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground">
              Let&apos;s discuss how I can help bring your next project to life.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="mt-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-grey-200 dark:border-grey-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-grey-500 dark:text-grey-500 text-sm">
              © {new Date().getFullYear()} Karan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-grey-500 dark:text-grey-500 hover:text-grey-700 dark:hover:text-grey-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-grey-500 dark:text-grey-500 hover:text-grey-700 dark:hover:text-grey-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 