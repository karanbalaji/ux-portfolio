import Parser from 'rss-parser'

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  category: string
  link: string
  content?: string
}

export interface PaginatedBlogPosts {
  posts: BlogPost[]
  totalPosts: number
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

// Initialize RSS parser
const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'description']
  }
})

// Function to extract reading time from content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const textContent = content.replace(/<[^>]*>/g, '') // Strip HTML tags
  const wordCount = textContent.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readingTime} min read`
}

// Function to extract excerpt from content
function extractExcerpt(content: string, maxLength: number = 150): string {
  const textContent = content.replace(/<[^>]*>/g, '') // Strip HTML tags
  if (textContent.length <= maxLength) {
    return textContent
  }
  return textContent.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

// Function to determine category from title or content
function determineCategory(title: string): string {
  const titleLower = title.toLowerCase()
  
  if (titleLower.includes('ux') || titleLower.includes('user experience') || titleLower.includes('design')) {
    return 'UX Design'
  }
  if (titleLower.includes('development') || titleLower.includes('frontend') || titleLower.includes('react') || titleLower.includes('javascript')) {
    return 'Development'
  }
  if (titleLower.includes('ai') || titleLower.includes('artificial intelligence') || titleLower.includes('machine learning')) {
    return 'AI & Tech'
  }
  if (titleLower.includes('community') || titleLower.includes('networking') || titleLower.includes('leadership')) {
    return 'Community'
  }
  if (titleLower.includes('business') || titleLower.includes('startup') || titleLower.includes('entrepreneurship')) {
    return 'Business'
  }
  if (titleLower.includes('information architecture') || titleLower.includes('navigation')) {
    return 'Information Architecture'
  }
  
  return 'Insights'
}

// Function to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Function to parse all RSS items
async function parseAllRSSItems(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL('https://blog.karanbalaji.com/rss.xml')
    
    return feed.items.map((item: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const content = (item as any)['content:encoded'] || (item as any).description || item.contentSnippet || ''
      const title = item.title || 'Untitled Post'
      const date = item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      
      return {
        title,
        excerpt: extractExcerpt(content),
        date,
        readTime: calculateReadingTime(content),
        slug: createSlug(title),
        category: determineCategory(title),
        link: item.link || '#',
        content
      }
    }).sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    
    // Return fallback data if RSS fetch fails
    return [
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
}

// Main function to fetch and parse RSS feed with pagination
export async function fetchBlogPosts(page: number = 1, limit: number = 6): Promise<PaginatedBlogPosts> {
  const allPosts = await parseAllRSSItems()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts,
    totalPosts,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1
  }
}

// Function to get latest posts (for homepage)
export async function getLatestBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await parseAllRSSItems()
  return allPosts.slice(0, limit)
}

// Function to get a single blog post by slug (for potential future use)
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const allPosts = await parseAllRSSItems()
  return allPosts.find(post => post.slug === slug) || null
} 