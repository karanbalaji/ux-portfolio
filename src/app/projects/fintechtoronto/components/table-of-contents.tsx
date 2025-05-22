import Link from "next/link"

const tocItems = [
  { id: "executive-summary", label: "Executive Summary" },
  { id: "problem-statement", label: "Problem Statement & Context" },
  { id: "design-thinking", label: "Design Thinking Process" },
  { id: "user-flows", label: "User Flows & Experience Maps" },
  { id: "features", label: "Features & UX Details" },
  { id: "ux-principles", label: "UX Laws & Principles" },
  { id: "tech-stack", label: "Tech Stack & Implementation" },
]

export default function TableOfContents() {
  return (
    <div className="p-6 rounded-lg border border-border bg-muted/20">
      <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-3">
          {tocItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
} 