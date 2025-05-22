import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "A guide to creating designs that are accessible to everyone, including users with disabilities.",
    date: "2023-10-15",
    readTime: "8 min read",
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Design Systems",
    excerpt: "Exploring how design systems are evolving and what that means for UX engineers and designers.",
    date: "2023-09-22",
    readTime: "6 min read",
    link: "#",
  },
  {
    id: 3,
    title: "User Testing Methods for Better UX",
    excerpt: "A comprehensive look at different user testing methodologies and when to use them.",
    date: "2023-08-10",
    readTime: "10 min read",
    link: "#",
  },
]

export function BlogSection() {
  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  return (
    <section id="blog" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Blog Posts</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
            Thoughts on UX design, engineering, and the intersection of both.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="line-clamp-2 hover:text-primary">
                  <Link href={post.link} className="transition-colors hover:text-primary">{post.title}</Link>
                </CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-4 text-xs mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 flex-shrink-0" /> {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 flex-shrink-0" /> {post.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Button variant="ghost" size="sm" className="gap-1 hover:text-primary hover:bg-primary/5" asChild>
                  <Link href={post.link}>
                    Read more <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="gap-2 hover:bg-primary/10 px-6">
            <Link href="/blog">View all posts <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 