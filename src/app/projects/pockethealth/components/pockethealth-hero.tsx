import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PocketHealthHero() {
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
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 text-sm font-semibold mb-2">
            Design Engineering Case Study
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-grey-900 dark:text-grey-50">
            Design Engineering at <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">PocketHealth.com</span>
          </h1>
          <p className="text-xl md:text-2xl text-grey-600 dark:text-white max-w-3xl mt-4">
            Boosting sign-up conversions from 650K to 1.1M through mobile-first design, outcome-driven optimization, and patient-centered UX engineering.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="mt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            asChild
          >
            <Link 
              href="https://pockethealth.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-white/90"
            >
              <ExternalLink className="h-5 w-5" />
              View Live Platform
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden bg-grey-50 dark:bg-grey-800 border border-grey-200 dark:border-grey-700 shadow-lg">
          <Image
            src="/images/projects/pockethealth/pockethealth-cover.png"
            alt="PocketHealth.com platform interface showing healthcare data management dashboard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
} 
