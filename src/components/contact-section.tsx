"use client"

import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Paperclip, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HoverShadow } from "@/components/ui/hover-shadow"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [attachment, setAttachment] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fileError, setFileError] = useState<string>("")

  // Images for the 3D marquee background
  const marqueeImages = [
    "/images/projects/fintech-toronto/fintechtoronto-cover.png",
    "/images/projects/pockethealth/pockethealth-cover.png",
    "/images/projects/fintech-toronto/fintech-shopify-demo.jpeg",
    "/images/projects/fintech-toronto/fintech-meetup.jpeg",
    "/images/about/gen-ai-uoft-meetup.jpg",
    "/images/about/uoft-guest-speaker-1.jpg",
    "/images/fintechtoronto-cover.png",
    "/images/projects/fintech-toronto/fintechtoronto-cover.png", // Duplicate for better distribution
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError("")
    
    if (!file) {
      setAttachment(null)
      return
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
    
    if (!allowedTypes.includes(file.type)) {
      setFileError("Only PDF, DOC, and DOCX files are allowed")
      setAttachment(null)
      e.target.value = ""
      return
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      setFileError("File size must be less than 10MB")
      setAttachment(null)
      e.target.value = ""
      return
    }

    setAttachment(file)
  }

  const removeAttachment = () => {
    setAttachment(null)
    setFileError("")
    // Reset file input
    const fileInput = document.getElementById('attachment') as HTMLInputElement
    if (fileInput) fileInput.value = ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const submitFormData = new FormData()
      submitFormData.append('name', formData.name)
      submitFormData.append('email', formData.email)
      submitFormData.append('subject', formData.subject)
      submitFormData.append('message', formData.message)
      
      if (attachment) {
        submitFormData.append('attachment', attachment)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitFormData,
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", subject: "", message: "" })
        setAttachment(null)
        setFileError("")
        // Reset file input
        const fileInput = document.getElementById('attachment') as HTMLInputElement
        if (fileInput) fileInput.value = ""
      } else {
        setSubmitStatus('error')
        if (result.error) {
          setFileError(result.error)
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-grey-50/50 dark:bg-grey-900/30 overflow-hidden">
      {/* 3D Marquee Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <ThreeDMarquee images={marqueeImages} className="h-full w-full" />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Get In Touch</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-white max-w-[600px]">
            Have a project in mind? Let&apos;s discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <HoverShadow
            as="div"
            containerClassName="rounded-xl"
            className="bg-background dark:bg-grey-900 p-8 rounded-xl"
            shadowIntensity="medium"
          >
            <h3 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-grey-50">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-green-800 dark:text-green-200">Message sent successfully! I&apos;ll get back to you soon.</span>
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
                  placeholder="What&apos;s this about?"
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
              
              <div className="space-y-2">
                <Label htmlFor="attachment" className="text-grey-700 dark:text-grey-300">
                  Attachment <span className="text-sm text-grey-500">(Optional)</span>
                </Label>
                <div className="space-y-3">
                  <div className="relative">
                    <Input
                      id="attachment"
                      name="attachment"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-grey-100 file:text-grey-700 hover:file:bg-grey-200 dark:file:bg-grey-800 dark:file:text-grey-300 dark:hover:file:bg-grey-700"
                    />
                  </div>
                  
                  {attachment && (
                    <div className="flex items-center gap-2 p-3 bg-grey-50 dark:bg-grey-800 rounded-lg border">
                      <Paperclip className="h-4 w-4 text-grey-600 dark:text-grey-400" />
                      <span className="text-sm text-grey-700 dark:text-grey-300 flex-1">
                        {attachment.name} ({(attachment.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={removeAttachment}
                        className="h-6 w-6 p-0 hover:bg-grey-200 dark:hover:bg-grey-700"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  {fileError && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      {fileError}
                    </div>
                  )}
                  
                  <p className="text-xs text-grey-500 dark:text-grey-400">
                    Supported formats: PDF, DOC, DOCX (Max 10MB)
                  </p>
                </div>
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
          </HoverShadow>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-grey-50">Let&apos;s Connect</h3>
              <p className="text-grey-600 dark:text-white mb-8 leading-relaxed">
                I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about design and technology. Don&apos;t hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-4 p-4 bg-background dark:bg-grey-900 rounded-lg"
                shadowIntensity="light"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-grey-100 dark:bg-grey-800 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                </div>
                <div>
                  <h4 className="font-medium text-grey-900 dark:text-grey-50">Email</h4>
                  <p className="text-grey-600 dark:text-grey-300">karanarjunb@gmail.com</p>
                </div>
              </HoverShadow>

              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-4 p-4 bg-background dark:bg-grey-900 rounded-lg"
                shadowIntensity="light"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-grey-100 dark:bg-grey-800 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                </div>
                <div>
                  <h4 className="font-medium text-grey-900 dark:text-grey-50">Location</h4>
                  <p className="text-grey-600 dark:text-grey-300">Toronto, Canada</p>
                </div>
              </HoverShadow>
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