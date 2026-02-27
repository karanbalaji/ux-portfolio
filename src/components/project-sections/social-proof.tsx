"use client"

import { TrendingUp, Gauge, Search, Target, BarChart3, Award, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverShadow } from "@/components/ui/hover-shadow"

interface Achievement {
  title: string
  metric: string
  description: string
  details: string[]
}

interface TimelineItem {
  phase: string
  title: string
  achievements: string[]
}

interface Testimonial {
  quote: string
  author: string
  role: string
  impact: string
}

interface EventItem {
  name: string
  attendees: string
  format: string
  impact: string
}

interface SocialProofData {
  title?: string
  description?: string
  achievements?: Achievement[]
  timeline?: TimelineItem[]
  testimonials?: Testimonial[]
  events?: EventItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Gauge,
  Search,
  Target,
}

const colorMap: Record<string, string> = {
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
}

const achievementColors = ["green", "blue", "purple", "orange"]

export default function SocialProof({ data }: { data: SocialProofData }) {
  const { title = "Results & Impact", description, achievements = [], timeline = [], testimonials = [], events = [] } = data

  return (
    <section id="social-proof" className="scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50 mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
          {description && (
            <p className="text-lg text-grey-600 dark:text-white max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {achievements.length > 0 && (
          <div id="key-achievements" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const colorClass = colorMap[achievementColors[index % achievementColors.length]]
                const IconComponent = iconMap[Object.keys(iconMap)[index % 4]] || TrendingUp
                
                return (
                  <HoverShadow
                    key={index}
                    as="div"
                    containerClassName="rounded-xl"
                    className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700"
                    shadowIntensity="medium"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl ${colorClass}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                            {achievement.title}
                          </h4>
                          <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                            {achievement.metric}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                        {achievement.description}
                      </p>
                      {achievement.details && achievement.details.length > 0 && (
                        <div className="space-y-1">
                          {achievement.details.map((detail, idx) => (
                            <div key={idx} className="text-xs text-grey-600 dark:text-white flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {detail}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </HoverShadow>
                )
              })}
            </div>
          </div>
        )}

        {timeline.length > 0 && (
          <div id="timeline" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Project Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timeline.map((item, index) => (
                <Card key={index} className="border border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="px-3 py-1 bg-primary text-white text-sm font-bold rounded-full">
                        {item.phase}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50 mb-3">
                      {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-grey-600 dark:text-grey-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {events.length > 0 && (
          <div id="event-success" className="scroll-mt-20">
            <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50 mb-6">
              Community Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => {
                const colorClass = colorMap[achievementColors[index % achievementColors.length]]
                return (
                  <HoverShadow
                    key={index}
                    as="div"
                    containerClassName="rounded-xl"
                    className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-700"
                    shadowIntensity="medium"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl ${colorClass}`}>
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-grey-900 dark:text-grey-50">
                            {event.name}
                          </h4>
                          <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                            {event.attendees}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-grey-500 dark:text-grey-400 bg-grey-50 dark:bg-grey-700 px-3 py-1.5 rounded">
                        Format: {event.format}
                      </div>
                      <p className="text-sm text-grey-600 dark:text-white leading-relaxed">
                        Impact: {event.impact}
                      </p>
                    </div>
                  </HoverShadow>
                )
              })}
            </div>
          </div>
        )}

        {achievements.length === 0 && timeline.length === 0 && events.length === 0 && (
          <Card className="border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
            <CardContent className="p-6">
              <p className="text-grey-600 dark:text-grey-300">
                Social proof content coming soon.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
