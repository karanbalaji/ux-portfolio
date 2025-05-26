"use client"

import { Calendar, Clock, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverShadow } from "@/components/ui/hover-shadow"
import { useEffect, useState } from "react"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  category: string
  link: string
}

export function StaticBlogSection() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([])
  const [currentPosts, setCurrentPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    // Fetch from static JSON file
    fetch('/blog-data.json')
      .then(res => res.json())
      .then((data: BlogPost[]) => {
        setAllPosts(data)
        setCurrentPosts(data.slice(0, postsPerPage))
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading blog data:', error)
        setLoading(false)
      })
  }, [])

  const totalPages = Math.ceil(allPosts.length / postsPerPage)
  const hasNextPage = currentPage < totalPages
  const hasPreviousPage = currentPage > 1

  const handlePageChange = (page: number) => {
    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    setCurrentPosts(allPosts.slice(startIndex, endIndex))
    setCurrentPage(page)
    
    // Scroll to top of blog section
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (loading) {
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
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="h-full bg-background dark:bg-grey-900 rounded-xl overflow-hidden shadow-sm p-6">
                <div className="animate-pulse">
                  <div className="h-6 bg-grey-200 dark:bg-grey-700 rounded mb-4 w-20"></div>
                  <div className="h-6 bg-grey-200 dark:bg-grey-700 rounded mb-3 w-full"></div>
                  <div className="h-4 bg-grey-200 dark:bg-grey-700 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-grey-200 dark:bg-grey-700 rounded mb-4 w-3/4"></div>
                  <div className="flex gap-4 mb-4">
                    <div className="h-4 bg-grey-200 dark:bg-grey-700 rounded w-24"></div>
                    <div className="h-4 bg-grey-200 dark:bg-grey-700 rounded w-20"></div>
                  </div>
                  <div className="h-4 bg-grey-200 dark:bg-grey-700 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 bg-grey-50/50 dark:bg-grey-900/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Latest Insights</h2>
          <p className="text-lg md:text-xl text-grey-600 dark:text-grey-300 max-w-[600px]">
            Thoughts on UX design, frontend development, and the intersection of design and technology.
          </p>
          {allPosts.length > 0 && (
            <p className="text-sm text-grey-500 dark:text-grey-400 mt-2">
              Showing {((currentPage - 1) * postsPerPage) + 1}-{Math.min(currentPage * postsPerPage, allPosts.length)} of {allPosts.length} posts
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <HoverShadow
              key={`${post.slug}-${index}`}
              as="article"
              containerClassName="h-full rounded-xl"
              className="group h-full bg-background dark:bg-grey-900 rounded-xl overflow-hidden"
              shadowIntensity="medium"
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
                
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-grey-700 dark:text-grey-300 hover:text-tertiary transition-colors font-medium group-hover:gap-3 duration-300"
                >
                  Read More
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </HoverShadow>
          ))}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!hasPreviousPage}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className="min-w-[40px]"
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasNextPage}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
        
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