import { Calendar, Clock, ExternalLink } from "lucide-react"
import { HoverShadow } from "@/components/ui/hover-shadow"
import { Button } from "@/components/ui/button"
import { getLatestBlogPosts, type BlogPost } from "@/lib/blog-service"

export async function BlogSectionServer() {
  let blogPosts: BlogPost[]
  
  try {
    blogPosts = await getLatestBlogPosts(6) // Get latest 6 posts for server-side rendering
  } catch (error) {
    console.error('Error loading blog posts:', error)
    // Fallback to static content if RSS fails
    blogPosts = [
      {
        title: "The Future of Customers in the AI Revolution: Communities Will Be Key",
        excerpt: "As AI continues to evolve, its making the process of creating products more accessible than ever. However, this newfound simplicity is shifting the challenge from how to create to how to acquire and retain customers.",
        date: "2024-12-12",
        readTime: "8 min read",
        slug: "future-of-customers-ai-revolution-communities",
        category: "AI & Tech",
        link: "https://blog.karanbalaji.com/day-40-future-of-customers-in-the-ai-revolution-communities-will-be-key"
      },
      {
        title: "Mastering Design Interviews: Insights from Google",
        excerpt: "Design interviews are not just about answering questions; they are gateways to career opportunities and personal growth. Join me as I share invaluable insights from my mentorship session with Alex Small, a distinguished Staff Interaction Designer and Design Manager at Google.",
        date: "2023-10-17",
        readTime: "6 min read",
        slug: "mastering-design-interviews-insights-google",
        category: "UX Design",
        link: "https://blog.karanbalaji.com/day-33-mastering-design-interviews-insights-from-google"
      },
      {
        title: "Navigating the World of Information Architecture",
        excerpt: "Information Architecture acts as a roadmap for websites, making it an indispensable element for UX designers. Understanding the difference between Information Architecture and navigation is essential for effective website structuring.",
        date: "2023-10-06",
        readTime: "5 min read",
        slug: "navigating-world-information-architecture",
        category: "Information Architecture",
        link: "https://blog.karanbalaji.com/day-21-navigating-the-world-of-information-architecture"
      }
    ]
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-grey-900">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Latest Insights</h2>
          <p className="text-lg md:text-xl text-grey-700 dark:text-grey-200 max-w-[600px]">
            Thoughts on UX design, frontend development, and the intersection of design and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <HoverShadow
                as="article"
                containerClassName="h-full rounded-xl"
                className="group h-full bg-grey-50 dark:bg-grey-800 rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] border border-grey-200 dark:border-grey-700 hover:shadow-lg"
                shadowIntensity="medium"
              >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-grey-200 dark:bg-grey-700 text-grey-800 dark:text-grey-200 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-grey-900 dark:text-grey-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-grey-700 dark:text-grey-200 mb-4 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-grey-600 dark:text-grey-300 mb-4">
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
                
                <div className="inline-flex items-center gap-2 text-grey-800 dark:text-grey-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group-hover:gap-3 duration-300 pointer-events-none">
                  Read More
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
              </HoverShadow>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="hover:bg-grey-100 dark:hover:bg-grey-800">
            <a href="https://blog.karanbalaji.com" target="_blank" rel="noopener noreferrer">
              View All Posts
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 