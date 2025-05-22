import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FintechTorontoHero() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link href="/#projects" passHref>
          <Button variant="ghost" size="sm" className="mb-8 gap-2 hover:bg-background/80">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
        
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
            UX Case Study
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Enhanced UX Case Study: <br className="hidden md:block" />
            <span className="text-primary">FintechToronto.com</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mt-4">
            A centralized platform connecting Toronto's fintech ecosystem through user-centered design.
          </p>
        </div>
        
        <div className="mt-16 relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden bg-muted/50 border border-border flex items-center justify-center">
          {/* Placeholder for project mockup/image */}
          <div className="text-muted-foreground">
            [Project Visual]
          </div>
        </div>
      </div>
    </section>
  )
} 