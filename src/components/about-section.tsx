"use client"

import { Code, TrendingUp, Users, Award, ExternalLink, MousePointer2, Sparkles, Building, Briefcase } from "lucide-react"
import { HoverShadow } from "@/components/ui/hover-shadow"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100 }
  }
}

export function AboutSection() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "650K → 1.1M Conversions",
      description: "Boosted sign-up conversions at Pocket Health"
    },
    {
      icon: Users,
      title: "500+ Professionals",
      description: "Leading Toronto's GenAI community"
    },
    {
      icon: Award,
      title: "Top 50 Mentor",
      description: "Recognized Growth Design Mentor on ADPList"
    }
  ]

  const skills = [
    { icon: Sparkles, name: "Claude Code + MCPs", description: "Custom skills" },
    { icon: Code, name: "AI SDKs", description: "Vercel, Mastra" },
    { icon: MousePointer2, name: "AI UI Frameworks", description: "CopilotKit, Shadcn" },
    { icon: TrendingUp, name: "Analytics", description: "PostHog, Sentry.io" }
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
    <section id="about" role="main" className="py-24 relative overflow-hidden bg-white dark:bg-grey-900 z-0">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-grey-900 dark:text-grey-50">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-grey-300 max-w-2xl mx-auto">
            AI Developer specialized in healthcare — from Series A startups to big enterprise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 auto-rows-[minmax(180px,auto)]"
        >
          {/* Main Bio Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <Card className="h-full bg-white/40 dark:bg-grey-800/40 backdrop-blur-xl border-grey-200/50 dark:border-grey-700/50 shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden relative group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                  <span className="text-primary">
                    My Journey
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-grey-800 dark:text-grey-200 text-lg leading-relaxed relative z-10">
                <p>
                  Currently an AI Developer at <strong>Pfizer</strong>, building healthcare AI at enterprise scale.
                  Previously at <strong>Pocket Health</strong> (Series B), where I boosted sign-up conversions from 650K to 1.1M
                  through data-driven experimentation. Also selected into <strong>Next AI</strong> — Canada&apos;s top AI accelerator with &lt;1% acceptance rate.
                </p>
                <p>
                  I build full-stack AI applications using <strong>Claude Code with custom MCPs & Skills</strong>, <strong>Mastra.ai</strong>,{" "}
                  <strong>Vercel AI SDK</strong>, and <strong>CopilotKit</strong> (A2UI & Gen UI).
                  I bring a design-forward approach to AI engineering — creating intelligent products that are
                  powerful, intuitive, and impact-driven.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="px-3 py-1 text-sm border-transparent transition-colors">
                    <Building className="w-3 h-3 mr-1" /> Enterprise AI
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-sm border-transparent transition-colors">
                    <TrendingUp className="w-3 h-3 mr-1" /> Growth Design
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-sm border-transparent transition-colors">
                    <Sparkles className="w-3 h-3 mr-1" /> AI UI/UX
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mentorship Card */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
            <Card className="h-full bg-white/40 dark:bg-grey-800/40 backdrop-blur-xl border-grey-200/50 dark:border-grey-700/50 overflow-hidden flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mentorship Reviews</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-0 px-6 pb-6">
                <div className="w-full h-[280px] md:h-full min-h-[250px] rounded-xl overflow-hidden shadow-inner border border-grey-100 dark:border-grey-700/50 bg-white dark:bg-grey-900">
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
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card key={index} className="bg-white/60 dark:bg-grey-800/60 backdrop-blur-md border border-grey-200/60 dark:border-grey-700/60 hover:border-primary/50 transition-colors duration-300 group shadow-lg shadow-black/5 dark:shadow-black/10">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-1">{skill.name}</h4>
                        <p className="text-xs text-grey-600 dark:text-grey-400">{skill.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>

          {/* Highlights */}
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white/60 dark:bg-grey-800/60 backdrop-blur-md border border-grey-200/50 dark:border-grey-700/50 hover:bg-white/80 dark:hover:bg-grey-800/80 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 shadow-sm shadow-primary/20">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-xl text-grey-900 dark:text-grey-50 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-grey-600 dark:text-grey-400">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-grey-900 dark:text-grey-50">
              Community & Speaking
            </h3>
            <div className="h-[1px] flex-1 bg-border ml-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden bg-white/40 dark:bg-grey-800/40 backdrop-blur-sm border border-grey-200/50 dark:border-grey-700/50 group-hover:border-primary/30 transition-colors">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={achievement.image}
                      alt={achievement.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-grey-900/40 opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-semibold text-white text-lg leading-tight shadow-sm">
                        {achievement.title}
                      </h4>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 