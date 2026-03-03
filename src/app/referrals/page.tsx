"use client"

import { useState, useMemo } from "react"
import { useQuery } from "convex/react"
import { Search, Filter } from "lucide-react"
import { api } from "@/../convex/_generated/api"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ReferralCard } from "@/components/referrals/referral-card"
import { SubmitReferralModal } from "@/components/referrals/submit-modal"
import { cn } from "@/lib/utils"

const categories = [
  { value: "all", label: "All" },
  { value: "banking", label: "Banking" },
  { value: "tech", label: "Tech" },
  { value: "tools", label: "Tools" },
  { value: "internet", label: "Internet" },
  { value: "productivity", label: "Productivity" },
  { value: "shopping", label: "Shopping" },
  { value: "entertainment", label: "Entertainment" },
  { value: "other", label: "Other" },
]

export default function ReferralsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const referrals = useQuery(api.referrals.getActiveReferrals, {})

  const filteredReferrals = useMemo(() => {
    if (!referrals) return []
    
    return referrals.filter((referral) => {
      const matchesSearch = 
        referral.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        referral.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = 
        selectedCategory === "all" || referral.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [referrals, searchQuery, selectedCategory])

  const groupedReferrals = useMemo(() => {
    if (selectedCategory !== "all") {
      return { [selectedCategory]: filteredReferrals }
    }
    
    return filteredReferrals.reduce((acc, referral) => {
      const cat = referral.category
      if (!acc[cat]) {
        acc[cat] = []
      }
      acc[cat].push(referral)
      return acc
    }, {} as Record<string, typeof filteredReferrals>)
  }, [filteredReferrals, selectedCategory])

  const getCategoryLabel = (value: string) => {
    return categories.find(c => c.value === value)?.label || value
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-20 md:pb-0">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-sans tracking-tight">
                Referrals
              </h1>
              <p className="text-muted-foreground text-lg">
                Curated referral links for products and services I recommend.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full sm:w-auto">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search referrals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <SubmitReferralModal />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={cn(
                    selectedCategory === cat.value && "shadow-sm"
                  )}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            {!referrals ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground">Loading referrals...</div>
              </div>
            ) : filteredReferrals.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  {searchQuery 
                    ? `No referrals found for "${searchQuery}"`
                    : "No referrals available yet."}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {Object.entries(groupedReferrals).map(([category, refs]) => (
                  refs.length > 0 && (
                    <div key={category}>
                      {selectedCategory === "all" && (
                        <h2 className="text-xl font-semibold mb-4 capitalize">
                          {getCategoryLabel(category)}
                        </h2>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {refs.map((referral) => (
                          <ReferralCard key={referral._id} referral={referral} />
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavigation />
    </div>
  )
}
