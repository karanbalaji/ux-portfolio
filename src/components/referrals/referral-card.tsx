"use client"

import { ExternalLink, Landmark, Laptop, Wrench, Wifi, Zap, ShoppingBag, Tv, Link } from "lucide-react"
import Image from "next/image"
import { useMutation } from "convex/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Id } from "@/../convex/_generated/dataModel"
import { api } from "@/../convex/_generated/api"

const categoryColors: Record<string, string> = {
  banking: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  tech: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  tools: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  internet: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  productivity: "bg-green-500/10 text-green-600 dark:text-green-400",
  shopping: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  entertainment: "bg-red-500/10 text-red-600 dark:text-red-400",
  other: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  banking: Landmark,
  tech: Laptop,
  tools: Wrench,
  internet: Wifi,
  productivity: Zap,
  shopping: ShoppingBag,
  entertainment: Tv,
  other: Link,
}

interface ReferralCardProps {
  referral: {
    _id: Id<"referrals">
    slug: string
    company: string
    description: string
    referralUrl: string
    category: string
    logoUrl?: string
    lucideIcon?: string
    clicks: number
  }
  className?: string
}

export function ReferralCard({ referral, className }: ReferralCardProps) {
  const incrementClicks = useMutation(api.referrals.incrementClicks)

  const handleClick = async () => {
    try {
      await incrementClicks({ id: referral._id })
    } catch (error) {
      console.error("Failed to track click:", error)
    }
  }

  const IconComponent = categoryIcons[referral.category] || Link

  return (
    <Card className={cn("group hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {referral.logoUrl ? (
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={referral.logoUrl}
                  alt={referral.company}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-muted-foreground" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-foreground truncate">
                {referral.company}
              </h3>
              <Badge 
                variant="secondary" 
                className={cn("text-[10px] px-2 py-0.5", categoryColors[referral.category] || categoryColors.other)}
              >
                {referral.category}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {referral.description}
            </p>

            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-muted-foreground">
                {referral.clicks} clicks
              </span>
              
              <Button
                size="sm"
                variant="default"
                asChild
                onClick={handleClick}
              >
                <a
                  href={referral.referralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  Visit
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
