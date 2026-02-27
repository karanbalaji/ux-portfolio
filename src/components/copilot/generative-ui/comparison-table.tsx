"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectToCompare {
  slug: string;
  title: string;
  techStack: string[];
  highlights: string[];
}

interface ComparisonTableProps {
  projects: ProjectToCompare[];
  comparisonAspects?: string[];
  className?: string;
}

export function ComparisonTable({ projects, comparisonAspects = [], className }: ComparisonTableProps) {
  const router = useRouter();

  const allTech = [...new Set(projects.flatMap((p) => p.techStack))];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg">Project Comparison</CardTitle>
        <CardDescription>
          Compare {projects.length} projects side by side
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 font-medium">Aspect</th>
                {projects.map((project) => (
                  <th key={project.slug} className="text-left p-3 bg-muted/50 font-medium">
                    <button
                      onClick={() => router.push(`/projects/${project.slug}`)}
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Key Highlights</td>
                {projects.map((project) => (
                  <td key={project.slug} className="p-3">
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-1.5">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              {allTech.map((tech) => (
                <tr key={tech} className="border-t">
                  <td className="p-3 font-medium">{tech}</td>
                  {projects.map((project) => (
                    <td key={project.slug} className="p-3">
                      {project.techStack.includes(tech) ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
          {projects.map((project) => (
            <Button
              key={project.slug}
              variant="outline"
              size="sm"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              View {project.title}
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
