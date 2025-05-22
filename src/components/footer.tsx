import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 items-center">
          <Link href="/" className="font-bold text-xl">Karan UX</Link>
          <p className="text-muted-foreground text-sm text-center max-w-md">
            UX Engineer & Designer creating beautiful, responsive, and accessible digital experiences.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:hello@karanux.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
        
        <Separator className="w-full max-w-md" />
        
        <div className="w-full max-w-md flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Karan UX. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 