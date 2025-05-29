"use client"

import { Calendar, Clock, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverShadow } from "@/components/ui/hover-shadow"
import { useEffect, useState, useRef } from "react"

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
  const [mobilePosts, setMobilePosts] = useState<BlogPost[]>([]) // For mobile infinite loading
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileLoadedPages, setMobileLoadedPages] = useState(1) // Track loaded pages for mobile
  const postsPerPage = 6
  const mobileScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch from static JSON file
    fetch('/blog-data.json')
      .then(res => res.json())
      .then((data: BlogPost[]) => {
        setAllPosts(data)
        setCurrentPosts(data.slice(0, postsPerPage))
        setMobilePosts(data.slice(0, postsPerPage)) // Initialize mobile posts
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
  const hasMoreMobilePosts = mobileLoadedPages < totalPages

  const handlePageChange = (page: number) => {
    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    setCurrentPosts(allPosts.slice(startIndex, endIndex))
    setCurrentPage(page)
    
    // Scroll to top of blog section
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
  }

  const loadMoreMobilePosts = () => {
    if (hasMoreMobilePosts) {
      const nextPage = mobileLoadedPages + 1
      const startIndex = 0
      const endIndex = nextPage * postsPerPage
      setMobilePosts(allPosts.slice(startIndex, endIndex))
      setMobileLoadedPages(nextPage)
    }
  }

  // Handle scroll event for mobile infinite loading
  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollLeft = container.scrollLeft
    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth
    
    // Load more when near the end (within 100px)
    if (scrollLeft + clientWidth >= scrollWidth - 100 && hasMoreMobilePosts) {
      loadMoreMobilePosts()
    }
  }

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white dark:bg-grey-900">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Latest Insights</h2>
            <p className="text-lg md:text-xl text-grey-700 dark:text-grey-200 max-w-[600px]">
              Thoughts on UX design, frontend development, and the intersection of design and technology.
            </p>
          </div>
          
          {/* Mobile Swipeable Loading */}
          <div className="block md:hidden overflow-x-auto scrollbar-hide mb-8">
            <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="min-w-[320px] bg-grey-50 dark:bg-grey-800 rounded-xl overflow-hidden shadow-sm p-6 border border-grey-200 dark:border-grey-700" style={{ scrollSnapAlign: 'start' }}>
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

          {/* Desktop Grid Loading */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="h-full bg-grey-50 dark:bg-grey-800 rounded-xl overflow-hidden shadow-sm p-6 border border-grey-200 dark:border-grey-700">
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
    <section id="blog" className="py-20 bg-white dark:bg-grey-900">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-grey-900 dark:text-grey-50">Latest Insights</h2>
          <p className="text-lg md:text-xl text-grey-700 dark:text-grey-200 max-w-[600px]">
            Thoughts on UX design, frontend development, and the intersection of design and technology.
          </p>
          {allPosts.length > 0 && (
            <p className="text-sm text-grey-600 dark:text-grey-300 mt-2">
              <span className="hidden md:inline">
                Showing {((currentPage - 1) * postsPerPage) + 1}-{Math.min(currentPage * postsPerPage, allPosts.length)} of {allPosts.length} posts
              </span>
              <span className="md:hidden">
                Showing {mobilePosts.length} of {allPosts.length} posts
              </span>
            </p>
          )}
          
          {/* Mobile swipe indicator */}
          <div className="block md:hidden mt-4">
            <p className="text-xs text-grey-600 dark:text-grey-400 flex items-center gap-2">
              <span>Swipe to explore</span>
              <span className="text-lg">→</span>
              {hasMoreMobilePosts && (
                <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                  +{allPosts.length - mobilePosts.length} more
                </span>
              )}
            </p>
          </div>
        </div>
        
        {/* Mobile Swipeable Layout */}
        <div
          ref={mobileScrollRef}
          className="block md:hidden overflow-x-auto scrollbar-hide"
          onScroll={handleMobileScroll}
        >
          <div className="flex gap-4 pb-4 px-2" style={{ scrollSnapType: 'x mandatory' }}>
            {mobilePosts.map((post, index) => (
              <HoverShadow
                key={`${post.slug}-${index}`}
                as="article"
                containerClassName="min-w-[320px] rounded-xl"
                className="group min-w-[320px] bg-grey-50 dark:bg-grey-800 rounded-xl overflow-hidden border border-grey-200 dark:border-grey-700"
                shadowIntensity="medium"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-grey-200 dark:bg-grey-700 text-grey-800 dark:text-grey-200 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-grey-900 dark:text-grey-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-grey-700 dark:text-grey-200 mb-4 leading-relaxed flex-1 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-xs text-grey-600 dark:text-grey-300">
                      <div className="flex items-center gap-1 mr-3">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-grey-800 dark:text-grey-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group-hover:gap-3 duration-300"
                    >
                      Read More About {post.category}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </HoverShadow>
            ))}
            
            {/* Load more indicator for mobile */}
            {hasMoreMobilePosts && (
              <div className="min-w-[320px] flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-sm text-grey-600 dark:text-grey-300">Loading more...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <HoverShadow
              key={`${post.slug}-${index}`}
              as="article"
              containerClassName="h-full rounded-xl"
              className="group h-full bg-grey-50 dark:bg-grey-800 rounded-xl overflow-hidden border border-grey-200 dark:border-grey-700"
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
                
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-grey-800 dark:text-grey-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group-hover:gap-3 duration-300"
                >
                  Read More About {post.category}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </HoverShadow>
          ))}
        </div>
        
        {/* Pagination Controls - Desktop only */}
        {totalPages > 1 && (
          <div className="hidden md:flex items-center justify-center gap-4 mt-12">
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
        
        {/* Load more button for mobile */}
        {hasMoreMobilePosts && (
          <div className="block md:hidden text-center mt-8">
            <Button 
              variant="outline" 
              onClick={loadMoreMobilePosts}
              className="hover:bg-grey-100 dark:hover:bg-grey-800"
            >
              Load More Posts ({allPosts.length - mobilePosts.length} remaining)
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