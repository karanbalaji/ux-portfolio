import { ArrowLeft, ExternalLink, Figma } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FintechTorontoHero() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-grey-50 via-background to-background dark:from-grey-900/50 dark:via-background dark:to-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link href="/#projects" passHref>
          <Button variant="ghost" size="sm" className="mb-8 gap-2 hover:bg-grey-100 dark:hover:bg-grey-800">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
        
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-grey-50 border border-grey-200 dark:border-grey-700 text-sm font-semibold mb-2">
            UX Case Study
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-grey-900 dark:text-grey-50">
            Enhanced UX Case Study: <br className="hidden md:block" />
            <span className="text-tertiary">FintechToronto.com</span>
          </h1>
          <p className="text-xl md:text-2xl text-grey-600 dark:text-grey-50 max-w-3xl mt-4">
            A centralized platform connecting Toronto&apos;s fintech ecosystem through user-centered design.
          </p>
        </div>
        
                {/* CTA Buttons */}        <div className="mt-8">          <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white dark:bg-white dark:hover:bg-grey-100 dark:text-grey-900 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            asChild
          >
            <Link 
              href="https://fintechtoronto.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white dark:text-grey-900 hover:text-white/90 dark:hover:text-grey-900/90"
            >
              <ExternalLink className="h-5 w-5" />
              View Live Demo
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 dark:border-primary/30 dark:hover:border-primary/50 dark:hover:bg-primary/10 px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            asChild
          >
            <Link 
              href="https://figma.com/file/example-fintech-designs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80"
            >
              <Figma className="h-5 w-5" />
              View Figma Design
            </Link>
          </Button>
                     </div>        </div>
        
        <div className="mt-12 relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden bg-grey-50 dark:bg-grey-800 border border-grey-200 dark:border-grey-700 flex items-center justify-center shadow-lg">
          {/* Placeholder for project mockup/image */}
          <div className="text-grey-400 dark:text-grey-500 text-lg font-medium">
            [Project Visual]
          </div>
        </div>
      </div>
    </section>
  )
} 