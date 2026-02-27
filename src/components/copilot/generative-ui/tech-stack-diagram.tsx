"use client";

import { cn } from "@/lib/utils";

interface TechCategory {
  name: string;
  technologies: string[];
}

interface TechStackDiagramProps {
  title: string;
  categories: TechCategory[];
  className?: string;
}

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
  Backend: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
  Database: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400",
  DevOps: "bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400",
  AI: "bg-pink-500/10 border-pink-500/30 text-pink-600 dark:text-pink-400",
  Tools: "bg-cyan-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-400",
  default: "bg-muted border-border text-muted-foreground",
};

export function TechStackDiagram({ title, categories, className }: TechStackDiagramProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-4", className)}>
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {category.name}
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {category.technologies.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border",
                    categoryColors[category.name] || categoryColors.default
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
