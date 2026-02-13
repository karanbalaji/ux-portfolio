"use client"

import { Code, TrendingUp, Users, Award, ExternalLink, MousePointer2, Sparkles } from "lucide-react"
import { HoverShadow } from "@/components/ui/hover-shadow"
import Image from "next/image"

export function AboutSection() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "650K → 1.1M Conversions",
      description: "Boosted sign-up conversions at Pocket Health using experimentation tools and data-driven UX optimization"
    },
    {
      icon: Users,
      title: "AI Community Leader",
      description: "Leading Toronto's GenAI community with 500+ professionals, organizing cutting-edge tech meetups"
    },
    {
      icon: Award,
      title: "Top 50 Mentor",
      description: "Recognized as Top 50 Growth Design Mentor on ADPList, mentoring global UX Engineers"
    }
  ]

  const skills = [
    { icon: Sparkles, name: "Claude Code + MCPs", description: "Custom skills & MCP servers" },
    { icon: Code, name: "AI SDKs", description: "Vercel AI SDK, CopilotKit, Mastra" },
    { icon: MousePointer2, name: "AI UI Frameworks", description: "CopilotKit, Shadcn, A2UI, Gen UI" },
    { icon: TrendingUp, name: "Analytics & Testing", description: "PostHog, Sentry.io + experimentation" }
  ]

  const achievements = [
    {
      title: "AI Collective Toronto Leader",
      image: "/images/about/gen-ai-uoft-meetup.jpg",
      alt: "Large group photo of AI professionals at University of Toronto GenAI meetup event",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7303931850362617856/"
    },
    {
      title: "University of Toronto Speaker",
      image: "/images/about/uoft-guest-speaker-1.jpg",
      alt: "Karan presenting on HCI and A/B testing to students at University of Toronto classroom",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7255277390459813888/"
    },
    {
      title: "Fintech Meetup Organizer",
      image: "/images/projects/fintech-toronto/fintech-meetup.jpeg",
      alt: "Professional networking event at Next AI office with fintech entrepreneurs and developers",
      link: "https://www.linkedin.com/posts/karanbalaji_ai-tech-toronto-activity-7328556873073258497-8zak"
    }
  ]

  return (
    <section id="about" role="main" className="py-20 bg-white dark:bg-grey-900">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-grey-700 dark:text-grey-200 max-w-[600px] mx-auto">
            AI Developer specialized in healthcare — from Series A startups to big enterprise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* About Text - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-grey-800 dark:text-grey-100">
              <p className="mb-6 leading-relaxed">
                Currently an AI Developer at <strong>Pfizer</strong>, building healthcare AI at enterprise scale.
                Previously at <strong>Pocket Health</strong> (Series B), where I boosted sign-up conversions from 650K to 1.1M
                through data-driven experimentation. Also selected into <strong>Next AI</strong> — Canada&apos;s top AI accelerator with &lt;1% acceptance rate.
              </p>
              <p className="mb-6 leading-relaxed">
                I build full-stack AI applications using <strong>Claude Code with custom MCPs & Skills</strong>, <strong>Mastra.ai</strong>,{" "}
                <strong>Vercel AI SDK</strong>, and <strong>CopilotKit</strong> (A2UI & Gen UI).
                I bring a design-forward approach to AI engineering — creating intelligent products that are
                powerful, intuitive, and impact-driven.
              </p>
            </div>

            {/* Modern Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <HoverShadow
                    key={index}
                    as="div"
                    containerClassName="rounded-lg"
                    className="flex items-start gap-3 p-4 bg-grey-50 dark:bg-grey-800 text-grey-900 dark:text-grey-50 border border-grey-200 dark:border-grey-700"
                    shadowIntensity="light"
                  >
                    <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold block">{skill.name}</span>
                      <span className="text-xs text-grey-600 dark:text-grey-300">{skill.description}</span>
                    </div>
                  </HoverShadow>
                )
              })}
            </div>
          </div>

          {/* Mentorship Reviews - Takes 1 column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-4">
              Mentorship Reviews
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-grey-200 dark:border-grey-700 h-[300px]">
              <iframe 
                src="https://adplist.org/widgets/reviews?src=karan-balaji" 
                title="ADPList Mentorship Reviews" 
                width="100%" 
                height="100%" 
                loading="lazy" 
                style={{ border: 0 }}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <HoverShadow
                key={index}
                as="div"
                containerClassName="rounded-xl"
                className="p-6 bg-grey-50 dark:bg-grey-800 text-center border border-grey-200 dark:border-grey-700"
                shadowIntensity="medium"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-grey-900 dark:text-grey-50 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-grey-700 dark:text-grey-200">
                  {highlight.description}
                </p>
              </HoverShadow>
            )
          })}
        </div>

        {/* Recent Achievements */}
        <div>
          <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 mb-6 text-center">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <HoverShadow
                  as="div"
                  containerClassName="rounded-xl"
                  className="relative overflow-hidden bg-grey-50 dark:bg-grey-800 border border-grey-200 dark:border-grey-700"
                  shadowIntensity="medium"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={achievement.image}
                      alt={achievement.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <ExternalLink className="h-4 w-4 text-white/90" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-grey-900 dark:text-grey-50 text-sm">
                      {achievement.title}
                    </h4>
                  </div>
                </HoverShadow>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 