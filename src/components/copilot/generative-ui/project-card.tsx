"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack?: string[];
  onClick?: () => void;
  className?: string;
}

export function ProjectCard({
  slug,
  title,
  description,
  coverImage,
  liveUrl,
  githubUrl,
  techStack = [],
  onClick,
  className,
}: ProjectCardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/projects/${slug}`);
    }
  };

  return (
    <Card className={cn("overflow-hidden group cursor-pointer hover:border-primary/50 transition-all", className)}>
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      {techStack.length > 0 && (
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 5 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                +{techStack.length - 5} more
              </span>
            )}
          </div>
        </CardContent>
      )}
      <CardFooter className="gap-2">
        <Button variant="default" size="sm" onClick={handleNavigate}>
          View Project
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
        {githubUrl && (
          <Button variant="outline" size="icon" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="outline" size="icon" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
