import { Clock, Users, Code, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function QuickFacts() {
  const facts = [
    {
      icon: Clock,
      label: "Timeline",
      value: "3 months",
      description: "Design to launch"
    },
    {
      icon: Users,
      label: "Team Size",
      value: "Solo Project",
      description: "Full-stack development"
    },
    {
      icon: Code,
      label: "Tech Stack",
      value: "Next.js + Supabase",
      description: "Modern web technologies"
    },
    {
      icon: TrendingUp,
      label: "Impact",
      value: "40%+ Growth",
      description: "Organic traffic increase"
    }
  ]

  return (
    <Card className="border border-grey-200 dark:border-grey-700 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-grey-900 dark:text-grey-50">
          Quick Facts
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon
            return (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="p-2 rounded-lg bg-white dark:bg-grey-800 shadow-sm">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-grey-900 dark:text-grey-50 text-sm">
                    {fact.value}
                  </div>
                  <div className="text-xs text-grey-600 dark:text-grey-400">
                    {fact.label}
                  </div>
                  <div className="text-xs text-grey-500 dark:text-grey-500 mt-1">
                    {fact.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
} 