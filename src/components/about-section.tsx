"use client"

import { Code, Layout, Palette, Award, Zap, Users, TrendingUp, ExternalLink, Star, ChevronLeft, ChevronRight, Smartphone } from "lucide-react"
import { HoverShadow } from "@/components/ui/hover-shadow"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Image from "next/image"
import { useState, useEffect } from "react"

export function AboutSection() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const leadershipCards = [
    {
      title: "AI Collective Toronto Chapter Leader",
      description: "Leading Toronto's GenAI community with 500+ professionals",
      stats: "297+ sign-ups, 170+ check-ins, 65% Toronto attendees",
      icon: Users,
      color: "from-blue-500 to-purple-600",
      image: "/images/about/gen-ai-uoft-meetup.jpg",
      imageAlt: "AI Collective Toronto meetup at University of Toronto",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7303931850362617856/"
    },
    {
      title: "Guest Speaker at University of Toronto",
      description: "Talking at UoT on HCI & A/B Testing to Master's and undergraduate students",
      stats: "Covering Fitts' Law, Miller's Law, Peak-End Rule",
      icon: Award,
      color: "from-green-500 to-teal-600",
      image: "/images/about/uoft-guest-speaker-1.jpg",
      imageAlt: "Karan speaking at University of Toronto on HCI and A/B Testing",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7255277390459813888/"
    },
    {
      title: "Fintech + AI Discussion Meetup",
      description: "Organized discussion-style meetup at Next AI office for Toronto's fintech ecosystem",
      stats: "106+ RSVPs & attendees, 6 discussion groups, 40%+ organic traffic boost",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-600",
      image: "/images/projects/fintech-toronto/fintech-meetup.jpeg",
      imageAlt: "Karan leading Fintech + AI discussion-style meetup at Next AI office",
      link: "https://www.linkedin.com/posts/karanbalaji_ai-tech-toronto-activity-7328556873073258497-8zak"
    },
    {
      title: "Shopify Builder Sundays Demo",
      description: "Showcased rapid design engineering using ShadCN, MagicUI, and AI-assisted development",
      stats: "Mobile-first design, AI-assisted workflow, 25%+ sign-up increase",
      icon: Smartphone,
      color: "from-orange-500 to-red-600",
      image: "/images/projects/fintech-toronto/fintech-shopify-demo.jpeg",
      imageAlt: "Karan presenting fintechtoronto.com at Shopify Builder Sundays showcase",
      link: "https://www.linkedin.com/posts/karanbalaji_ai-tech-toronto-activity-7322624364573540352-jN_Q"
    },
    {
      title: "Top 50 Growth Design Mentor",
      description: "ADPList recognition for Oct-Dec 2024 & Jan-Mar 2025",
      stats: "Mentoring UX Engineers globally",
      icon: Star,
      color: "from-yellow-500 to-orange-600",
      image: null,
      imageAlt: "Top 50 Growth Design Mentor certificate",
      isPdf: true,
      link: "https://adplist.org/mentors/karan-balaji"
    }
  ]

  // Auto-rotate carousel with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      handleCardTransition((prev) => (prev + 1) % leadershipCards.length)
    }, 6000) // Change card every 6 seconds

    return () => clearInterval(interval)
  }, [leadershipCards.length])

  const handleCardTransition = (newIndex: number | ((prev: number) => number)) => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (typeof newIndex === 'function') {
        setCurrentCardIndex(newIndex)
      } else {
        setCurrentCardIndex(newIndex)
      }
      setIsTransitioning(false)
    }, 150) // Half of the transition duration
  }

  const nextCard = () => {
    handleCardTransition((prev) => (prev + 1) % leadershipCards.length)
  }

  const prevCard = () => {
    handleCardTransition((prev) => (prev - 1 + leadershipCards.length) % leadershipCards.length)
  }

  const currentCard = leadershipCards[currentCardIndex]
  const IconComponent = currentCard.icon

  return (
    <section id="about" className="py-20 bg-grey-50/50 dark:bg-grey-900/30 relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">About Me</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-white max-w-[600px]">
            Design Engineer with proven expertise in rapid prototyping and driving growth through experimentation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <div className="order-1 lg:order-1">
            <p className="text-lg mb-6 leading-relaxed text-grey-700 dark:text-white">
              I&apos;m a Design Engineer selected into <strong>Next AI</strong> (Canada&apos;s top AI accelerator with &lt;1% acceptance rate). 
              I specialize in rapidly building prototypes from design to frontend code using scalable design system components and measuring outcomes with experimentation tools.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-grey-700 dark:text-white">
              At <strong>Pocket Health</strong> (Series B), I boosted sign-up conversions from 650K to 1.1M through data-driven UX improvements and A/B testing using tools like Hotjar, Google Optimize, and VWO. 
              I&apos;ve built 100+ responsive templates and improved conversion rates by 17% monthly through systematic experimentation.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-grey-700 dark:text-white">
              I&apos;m the <strong>AI Collective Toronto Chapter Leader</strong>, organizing GenAI meetups that bring together 500+ professionals. 
              I also serve as a <strong>Guest Speaker at University of Toronto</strong> on HCI and A/B testing, and mentor UX Engineers on ADPList where I was recognized as a <strong>Top 50 Growth Design Mentor</strong> for multiple quarters.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
                shadowIntensity="light"
              >
                <Code className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>Rapid Prototyping</span>
              </HoverShadow>
              
              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
                shadowIntensity="light"
              >
                <Layout className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>Design Systems</span>
              </HoverShadow>
              
              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
                shadowIntensity="light"
              >
                <TrendingUp className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>A/B Testing & Analytics</span>
              </HoverShadow>
              
              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
                shadowIntensity="light"
              >
                <Zap className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>GenAI Integration</span>
              </HoverShadow>
              
              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
                shadowIntensity="light"
              >
                <Palette className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>UX Research & Testing</span>
              </HoverShadow>
              
              <HoverShadow
                as="div"
                containerClassName="rounded-lg"
                className="flex items-center gap-3 p-3 bg-background dark:bg-grey-800 text-grey-800 dark:text-grey-100"
                shadowIntensity="light"
              >
                <Users className="h-5 w-5 text-grey-600 dark:text-grey-400" />
                <span>Community Leadership</span>
              </HoverShadow>
            </div>

            {/* Key Achievements */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-grey-900 dark:text-grey-50 mb-3">Key Achievements</h3>
              <ul className="space-y-2 text-sm text-grey-700 dark:text-grey-300">
                <li>• <strong>650K → 1.1M</strong> sign-up conversions at Pocket Health</li>
                <li>• <strong>35% increase</strong> in demo conversions through design optimization</li>
                <li>• <strong>17% monthly</strong> conversion rate improvements via A/B testing</li>
                <li>• <strong>SEO scores: 55% → 92%</strong> through technical optimization</li>
                <li>• <strong>PostHog, VWO, Google Optimize</strong> experimentation expertise</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Leadership Carousel */}
          <div className="order-2 lg:order-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-grey-900 dark:text-grey-50 mb-2">Leadership & Recognition</h3>
              <p className="text-sm text-grey-600 dark:text-grey-300">Click to view achievements</p>
            </div>
            
            <div className="mb-8">
              <a
                href={currentCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02]"
              >
                <HoverShadow
                  as="div"
                  containerClassName="rounded-xl"
                  className="relative bg-background dark:bg-grey-800 rounded-xl border border-grey-200 dark:border-grey-700 overflow-hidden cursor-pointer"
                  shadowIntensity="strong"
                >
                  {/* Image/Visual Section */}
                  <div className="relative h-64 bg-grey-100 dark:bg-grey-700 overflow-hidden">
                    <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                      {currentCard.isPdf ? (
                        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${currentCard.color}`}>
                          <div className="text-center text-white">
                            <IconComponent className="h-16 w-16 mx-auto mb-3" />
                            <p className="text-lg font-medium">Top 50 Mentor</p>
                            <p className="text-sm opacity-90">ADPList Recognition</p>
                          </div>
                        </div>
                      ) : (
                        currentCard.image && (
                          <Image
                            src={currentCard.image}
                            alt={currentCard.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        prevCard()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        nextCard()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Icon Badge */}
                    {!currentCard.isPdf && (
                      <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r ${currentCard.color} flex items-center justify-center transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    )}

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4">
                      <ExternalLink className="h-5 w-5 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                      <h4 className="font-semibold text-grey-900 dark:text-grey-50 mb-2 text-lg">{currentCard.title}</h4>
                      <p className="text-sm text-grey-600 dark:text-grey-300 mb-3">{currentCard.description}</p>
                      <p className="text-xs text-grey-500 dark:text-grey-400 font-medium">{currentCard.stats}</p>
                    </div>
                  </div>
                </HoverShadow>
              </a>

              {/* Dots Indicator - Outside the card */}
              <div className="flex justify-center mt-4 gap-2">
                {leadershipCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCardTransition(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCardIndex ? 'bg-grey-900 dark:bg-grey-100 scale-125' : 'bg-grey-400 dark:bg-grey-600 scale-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Mentorship Reviews - Right Column */}
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-grey-900 dark:text-grey-50 mb-2">Mentorship Reviews</h3>
                <p className="text-sm text-grey-600 dark:text-grey-300">What mentees say about working with me</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-grey-200 dark:border-grey-700">
                <iframe 
                  src="https://adplist.org/widgets/reviews?src=karan-balaji" 
                  title="ADPList Mentorship Reviews" 
                  width="100%" 
                  height="400px" 
                  loading="lazy" 
                  style={{ border: 0 }}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 