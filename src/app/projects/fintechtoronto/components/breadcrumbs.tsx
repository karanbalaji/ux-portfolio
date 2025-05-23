import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumbs() {
  const breadcrumbs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/#projects" },
    { label: "FintechToronto.com", href: "/projects/fintechtoronto", current: true }
  ]

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-grey-600 dark:text-grey-400">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1
          const IconComponent = item.icon

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-grey-400 dark:text-grey-500" />
              )}
              
              {isLast ? (
                <span className="font-medium text-grey-900 dark:text-grey-100 flex items-center gap-1">
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
} 