import { NextResponse } from 'next/server'
import { fetchBlogPosts } from '@/lib/blog-service'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '6', 10)

    // Validate pagination parameters
    const validPage = Math.max(1, page)
    const validLimit = Math.min(Math.max(1, limit), 20) // Max 20 posts per page

    const paginatedPosts = await fetchBlogPosts(validPage, validLimit)
    return NextResponse.json(paginatedPosts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'
export const revalidate = 3600 // Revalidate every hour 