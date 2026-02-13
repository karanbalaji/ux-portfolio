import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumbs() {
  const breadcrumbs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/#projects" },
  ]

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-grey-600 dark:text-grey-100">
        {breadcrumbs.map((item, index) => {
          const IconComponent = item.icon

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-grey-400 dark:text-grey-200" />
              )}

              <Link
                href={item.href}
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                {IconComponent && <IconComponent className="h-4 w-4" />}
                {item.label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
