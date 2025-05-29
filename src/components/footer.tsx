import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/karanbalaji",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/karanbalaji/",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/Karanbalaji047",
    icon: XIcon,
  },
  {
    name: "Email",
    href: "mailto:karanarjunb@gmail.com",
    icon: Mail,
  },
]

const footerLinks = [
  {
    title: "Work",
    links: [
      { name: "Projects", href: "#projects" },
      { name: "Case Studies", href: "#projects" },
      { name: "Process", href: "#about" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "About Me", href: "#about" },
      { name: "Skills", href: "#about" },
      { name: "Experience", href: "#about" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" },
      { name: "Resume", href: "/resume.pdf" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-grey-100 dark:bg-grey-900 border-t border-grey-200 dark:border-grey-800">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="text-2xl font-bold text-grey-900 dark:text-grey-50 hover:text-primary transition-colors">
              Karan
            </Link>
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

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-grey-900 dark:text-grey-50 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-grey-200 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-grey-200 dark:border-grey-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-grey-500 dark:text-grey-300 text-sm">
              © {new Date().getFullYear()} Karan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-grey-500 dark:text-grey-300 hover:text-grey-700 dark:hover:text-grey-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-grey-500 dark:text-grey-300 hover:text-grey-700 dark:hover:text-grey-100 transition-colors"
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