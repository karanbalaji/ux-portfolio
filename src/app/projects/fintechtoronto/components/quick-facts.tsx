import { Clock, Users, Zap, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function QuickFacts() {
  const facts = [
    {
      icon: Clock,
      label: "Timeline",
      value: "3 months",
      description: "Design to launch",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      label: "Team Size",
      value: "Solo Project",
      description: "Full-stack development",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Zap,
      label: "Key Tools",
      value: "Cursor + Figma",
      description: "AI-assisted design engineering",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    {
      icon: TrendingUp,
      label: "Impact",
      value: "40%+ Growth",
      description: "Organic traffic increase",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    }
  ]

  return (
    <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-br from-white via-grey-50/50 to-primary/5 dark:from-grey-900 dark:via-grey-800/50 dark:to-primary/10 shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-6 lg:mb-8">
          <h3 className="text-lg lg:text-xl font-bold text-grey-900 dark:text-grey-50 mb-2">
            Project Overview
          </h3>
          <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Mobile Layout - Compact Horizontal */}
        <div className="block lg:hidden space-y-3">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon
            return (
              <div key={index} className="bg-white dark:bg-grey-800 p-4 rounded-lg border border-grey-200 dark:border-grey-600 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${fact.color} flex-shrink-0`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="text-lg font-bold text-grey-900 dark:text-grey-50 truncate">
                        {fact.value}
                      </div>
                      <div className="text-xs font-medium text-grey-700 dark:text-grey-200 uppercase tracking-wide flex-shrink-0">
                        {fact.label}
                      </div>
                    </div>
                    <div className="text-xs text-grey-500 dark:text-grey-400 mt-1">
                      {fact.description}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop Layout - Original Cards */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon
            return (
              <div key={index} className="group">
                <div className="bg-white dark:bg-grey-800 p-6 rounded-xl border border-grey-200 dark:border-grey-600 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-2xl ${fact.color} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                        {fact.value}
                      </div>
                      <div className="text-sm font-medium text-grey-700 dark:text-grey-200 uppercase tracking-wide">
                        {fact.label}
                      </div>
                      <div className="text-xs text-grey-500 dark:text-grey-400 leading-relaxed">
                        {fact.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-grey-200 dark:border-grey-600">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 text-xs text-grey-500 dark:text-grey-400">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              User-Centered Design
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Community-Driven
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
              Data-Informed
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 