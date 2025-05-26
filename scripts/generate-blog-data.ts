import { generateStaticBlogData } from '../src/lib/static-blog-service'

async function main() {
  console.log('🚀 Starting blog data generation...')
  
  try {
    await generateStaticBlogData()
    console.log('✅ Blog data generation completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Blog data generation failed:', error)
    process.exit(1)
  }
}

main() 