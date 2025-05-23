import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

// Sample blog post data
const blogPosts = [
  {
    title: "The Psychology of UX: Understanding User Behavior",
    excerpt: "Exploring how cognitive psychology principles can inform better design decisions and create more intuitive user experiences.",
    date: "2024-03-15",
    readTime: "5 min read",
    slug: "psychology-of-ux",
    category: "UX Design"
  },
  {
    title: "Building Accessible Design Systems",
    excerpt: "A comprehensive guide to creating inclusive design systems that work for users with disabilities while maintaining visual appeal.",
    date: "2024-03-10",
    readTime: "8 min read",
    slug: "accessible-design-systems",
    category: "Accessibility"
  },
  {
    title: "React Performance Optimization for UX Engineers",
    excerpt: "Practical techniques for optimizing React applications to deliver smooth user experiences without compromising functionality.",
    date: "2024-03-05",
    readTime: "6 min read",
    slug: "react-performance-optimization",
    category: "Development"
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-grey-50/50 dark:bg-grey-900/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Latest Insights</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-grey-300 max-w-[600px]">
            Thoughts on UX design, frontend development, and the intersection of design and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <HoverBorderGradient
              key={index}
              as="article"
              containerClassName="rounded-xl"
              className="group h-full bg-background dark:bg-grey-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-grey-300 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-grey-900 dark:text-grey-50 group-hover:text-tertiary transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-grey-600 dark:text-grey-300 mb-4 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-grey-500 dark:text-grey-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-grey-700 dark:text-grey-300 hover:text-tertiary transition-colors font-medium group-hover:gap-3 duration-300"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="hover:bg-grey-100 dark:hover:bg-grey-800">
            <Link href="/blog">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 