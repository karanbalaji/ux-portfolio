"use client"

import { useState } from "react"
import { useMutation } from "convex/react"
import { Plus, Loader2 } from "lucide-react"
import { api } from "@/../convex/_generated/api"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = [
  { value: "banking", label: "Banking" },
  { value: "tech", label: "Tech" },
  { value: "tools", label: "Tools" },
  { value: "internet", label: "Internet" },
  { value: "productivity", label: "Productivity" },
  { value: "shopping", label: "Shopping" },
  { value: "entertainment", label: "Entertainment" },
  { value: "other", label: "Other" },
]

export function SubmitReferralModal() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const createSubmission = useMutation(api.referral_submissions.createSubmission)

  const [formData, setFormData] = useState({
    company: "",
    description: "",
    referralUrl: "",
    category: "other",
    logoUrl: "",
    submitterName: "",
    submitterEmail: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await createSubmission({
        company: formData.company,
        description: formData.description,
        referralUrl: formData.referralUrl,
        category: formData.category,
        logoUrl: formData.logoUrl || undefined,
        submitterName: formData.submitterName || undefined,
        submitterEmail: formData.submitterEmail || undefined,
      })
      
      setSuccess(true)
      setFormData({
        company: "",
        description: "",
        referralUrl: "",
        category: "other",
        logoUrl: "",
        submitterName: "",
        submitterEmail: "",
      })
      
      setTimeout(() => {
        setSuccess(false)
        setOpen(false)
      }, 2000)
    } catch (error) {
      console.error("Failed to submit:", error)
      alert("Failed to submit referral. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Plus className="w-4 h-4" />
          Submit a Referral
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Submit a Referral</DialogTitle>
          <DialogDescription>
            Share a referral link with the community. Submissions are reviewed before being published.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="text-green-600 dark:text-green-400 text-lg font-medium">
              Thanks for your submission!
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              We&apos;ll review it shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g., Wise, Notion, AWS"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description of the service and referral benefit"
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralUrl">Referral URL *</Label>
              <Input
                id="referralUrl"
                type="url"
                value={formData.referralUrl}
                onChange={(e) => setFormData({ ...formData, referralUrl: e.target.value })}
                placeholder="https://..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
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

            <div className="space-y-2">
              <Label htmlFor="logoUrl">Logo URL (optional)</Label>
              <Input
                id="logoUrl"
                type="url"
                value={formData.logoUrl}
                onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                placeholder="https://...logo.png"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submitterName">Your Name (optional)</Label>
                <Input
                  id="submitterName"
                  value={formData.submitterName}
                  onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="submitterEmail">Your Email (optional)</Label>
                <Input
                  id="submitterEmail"
                  type="email"
                  value={formData.submitterEmail}
                  onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Submit
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
