import { ExternalLink, Users, Calendar, TrendingUp, Code, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 scroll-mt-20">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 dark:text-grey-50">
            Social Proof & Community Impact
          </h2>
          <p className="text-lg text-grey-600 dark:text-grey-50 max-w-3xl mx-auto">
            Demonstrating real-world impact through community engagement and innovative design engineering
          </p>
        </div>

        {/* Event Success Story */}
        <div id="event-success" className="scroll-mt-20">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background dark:from-primary/10 dark:via-grey-900/50 dark:to-grey-900/50 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                {/* Event Images */}
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-full rounded-xl overflow-hidden shadow-lg bg-grey-100 dark:bg-grey-800">
                    <Image
                      src="/images/projects/fintech-toronto/fintech-meetup.jpeg"
                      alt="Karan leading Fintech + AI discussion-style meetup at Next AI office"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="text-sm text-grey-700 dark:text-grey-50 text-center italic font-medium">
                    Leading discussion-style meetup at Next AI office for the Fintech + AI community event
                  </p>
                </div>

                {/* Event Details & Impact */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <TrendingUp className="h-5 w-5" />
                      <span>Community-Driven Growth Initiative</span>
                    </div>
                    <h3 className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                      Fintech + AI Discussion Meetup
                    </h3>
                    <p className="text-grey-700 dark:text-grey-50 leading-relaxed">
                      Organized and facilitated a highly successful discussion-style meetup at Next AI&apos;s office, 
                      bringing together Toronto&apos;s fintech ecosystem to explore AI innovations. This community 
                      engagement directly contributed to significant organic growth for fintechtoronto.com.
                    </p>
                  </div>

                  {/* Event Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-grey-800 p-4 rounded-lg border border-grey-200 dark:border-grey-600 shadow-sm">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-medium">Attendance</span>
                      </div>
                      <div className="text-2xl font-bold text-grey-900 dark:text-grey-50">106+</div>
                      <div className="text-sm text-grey-600 dark:text-grey-50">RSVPs & Attendees</div>
                    </div>
                    <div className="bg-white dark:bg-grey-800 p-4 rounded-lg border border-grey-200 dark:border-grey-600 shadow-sm">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">Event Type</span>
                      </div>
                      <div className="text-lg font-bold text-grey-900 dark:text-grey-50">In-Person</div>
                      <div className="text-sm text-grey-600 dark:text-grey-50">Discussion Groups</div>
                    </div>
                  </div>

                  {/* Event Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-grey-900 dark:text-grey-50">Key Event Highlights:</h4>
                    <ul className="space-y-2 text-grey-700 dark:text-grey-50">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Co-organized with The GenAI Collective team and co-hosted with financial engineer Jacqline Geng</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Facilitated 6 focused discussion groups on AI-driven fintech innovations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Connected founders, developers, investors, and fintech professionals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Generated significant organic traffic and community engagement for fintechtoronto.com</span>
                      </li>
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm" asChild className="border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                      <Link 
                        href="https://www.linkedin.com/posts/karanbalaji_ai-tech-toronto-activity-7328556873073258497-8zak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-grey-900 dark:text-grey-100"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View LinkedIn Post
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                      <Link 
                        href="https://lu.ma/z4rwma45"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-grey-900 dark:text-grey-100"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Event Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Design Engineering Demo Story */}
        <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 via-background to-background dark:from-secondary/10 dark:via-grey-900/50 dark:to-grey-900/50 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Demo Image */}
              <div className="space-y-4 lg:order-2">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-full rounded-xl overflow-hidden shadow-lg bg-grey-100 dark:bg-grey-800">
                  <Image
                    src="/images/projects/fintech-toronto/fintech-shopify-demo.jpeg"
                    alt="Karan presenting fintechtoronto.com at Shopify Builder Sundays showcase"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-sm text-grey-700 dark:text-grey-50 text-center italic font-medium">
                  Presenting design engineering skills and fintechtoronto.com at Shopify Builder Sundays
                </p>
              </div>

              {/* Demo Details & Impact */}
              <div className="space-y-6 lg:order-1">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-grey-900 dark:text-grey-100 font-semibold">
                    <Code className="h-5 w-5" />
                    <span>Design Engineering Showcase</span>
                  </div>
                  <h3 className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                    Shopify Builder Sundays Demo
                  </h3>
                  <p className="text-grey-700 dark:text-grey-50 leading-relaxed">
                    Presented fintechtoronto.com at Shopify Builder Sundays, showcasing rapid design engineering 
                    using modern tools like ShadCN, MagicUI, and Cursor. The demo highlighted innovative AI-assisted 
                    development workflows and modern mobile-centric design principles.
                  </p>
                </div>

                {/* Demo Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-grey-800 p-4 rounded-lg border border-grey-200 dark:border-grey-600 shadow-sm">
                    <div className="flex items-center gap-2 text-grey-900 dark:text-grey-100 mb-2">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-sm font-medium">Design Focus</span>
                    </div>
                    <div className="text-lg font-bold text-grey-900 dark:text-grey-50">Mobile-First</div>
                    <div className="text-sm text-grey-600 dark:text-grey-50">Modern & Responsive</div>
                  </div>
                  <div className="bg-white dark:bg-grey-800 p-4 rounded-lg border border-grey-200 dark:border-grey-600 shadow-sm">
                    <div className="flex items-center gap-2 text-grey-900 dark:text-grey-100 mb-2">
                      <Zap className="h-4 w-4" />
                      <span className="text-sm font-medium">Development</span>
                    </div>
                    <div className="text-lg font-bold text-grey-900 dark:text-grey-50">AI-Assisted</div>
                    <div className="text-sm text-grey-600 dark:text-grey-50">Rapid Prototyping</div>
                  </div>
                </div>

                {/* Demo Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-grey-900 dark:text-grey-50">Key Demo Highlights:</h4>
                  <ul className="space-y-2 text-grey-700 dark:text-grey-50">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Showcased full-stack development using ShadCN UI + MagicUI components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Demonstrated AI-assisted development workflow with Cursor and MCP servers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Received positive feedback on modern mobile-centric design approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Generated increased sign-ups and community interest in the platform</span>
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" asChild className="border-secondary/30 hover:border-secondary/50 hover:bg-secondary/5">
                    <Link 
                      href="https://www.linkedin.com/posts/karanbalaji_ai-tech-toronto-activity-7322624364573540352-jN_Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-grey-900 dark:text-grey-100"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View LinkedIn Post
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Metrics */}
        <div id="community-impact" className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-6 md:p-8 scroll-mt-20 border border-grey-200/50 dark:border-grey-700/50">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-bold text-grey-900 dark:text-grey-50">
              Community Engagement Impact
            </h3>
            <p className="text-grey-700 dark:text-grey-50 max-w-2xl mx-auto">
              These events exemplify how UX design extends beyond digital interfaces to creating 
              meaningful community experiences and showcasing innovative development approaches.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center space-y-2 p-4 bg-white/50 dark:bg-grey-800/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary">40%+</div>
              <div className="text-xs md:text-sm font-medium text-grey-900 dark:text-grey-50">Organic Traffic Boost</div>
              <div className="text-xs text-grey-600 dark:text-grey-50">Post-event growth</div>
            </div>
            <div className="text-center space-y-2 p-4 bg-white/50 dark:bg-grey-800/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary">106</div>
              <div className="text-xs md:text-sm font-medium text-grey-900 dark:text-grey-50">Community Members</div>
              <div className="text-xs text-grey-600 dark:text-grey-50">Direct engagement</div>
            </div>
            <div className="text-center space-y-2 p-4 bg-white/50 dark:bg-grey-800/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-grey-900 dark:text-grey-100">2</div>
              <div className="text-xs md:text-sm font-medium text-grey-900 dark:text-grey-50">Major Showcases</div>
              <div className="text-xs text-grey-600 dark:text-grey-50">Community events</div>
            </div>
            <div className="text-center space-y-2 p-4 bg-white/50 dark:bg-grey-800/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-grey-900 dark:text-grey-100">25%+</div>
              <div className="text-xs md:text-sm font-medium text-grey-900 dark:text-grey-50">Sign-up Increase</div>
              <div className="text-xs text-grey-600 dark:text-grey-50">From demo showcase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 