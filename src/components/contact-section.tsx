"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset success state after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-grey-50/50 dark:bg-grey-900/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Get In Touch</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-grey-300 max-w-[600px]">
            Have a project in mind? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <HoverBorderGradient
            as="div"
            containerClassName="rounded-xl"
            className="bg-background dark:bg-grey-900 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-grey-50">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-green-800 dark:text-green-200">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <span className="text-red-800 dark:text-red-200">Something went wrong. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-grey-700 dark:text-grey-300">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="focus:ring-tertiary focus:border-tertiary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-grey-700 dark:text-grey-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="focus:ring-tertiary focus:border-tertiary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-grey-700 dark:text-grey-300">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="focus:ring-tertiary focus:border-tertiary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-grey-700 dark:text-grey-300">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="focus:ring-tertiary focus:border-tertiary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </HoverBorderGradient>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-grey-50">Let's Connect</h3>
              <p className="text-grey-600 dark:text-grey-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about design and technology. Don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-4 p-4 bg-background dark:bg-grey-900 rounded-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-grey-100 dark:bg-grey-800 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                </div>
                <div>
                  <h4 className="font-medium text-grey-900 dark:text-grey-50">Email</h4>
                  <p className="text-grey-600 dark:text-grey-300">hello@karandesigner.com</p>
                </div>
              </HoverBorderGradient>

              <HoverBorderGradient
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-4 p-4 bg-background dark:bg-grey-900 rounded-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-grey-100 dark:bg-grey-800 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                </div>
                <div>
                  <h4 className="font-medium text-grey-900 dark:text-grey-50">Phone</h4>
                  <p className="text-grey-600 dark:text-grey-300">+1 (555) 123-4567</p>
                </div>
              </HoverBorderGradient>

              <HoverBorderGradient
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-4 p-4 bg-background dark:bg-grey-900 rounded-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-grey-100 dark:bg-grey-800 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                </div>
                <div>
                  <h4 className="font-medium text-grey-900 dark:text-grey-50">Location</h4>
                  <p className="text-grey-600 dark:text-grey-300">Toronto, Canada</p>
                </div>
              </HoverBorderGradient>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-grey-900 dark:text-grey-50">Response Time</h4>
              <p className="text-grey-600 dark:text-grey-300 text-sm leading-relaxed">
                I typically respond to messages within 24 hours during business days. 
                For urgent inquiries, feel free to mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 