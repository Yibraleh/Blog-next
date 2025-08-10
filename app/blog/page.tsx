// app/blog/page.tsx
import NavBar from '../components/NavBar'
import Articles from '../components/Articles'
import CommentsSection from '../components/CommentsSection'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Link from 'next/link'



export default function Page() {

  return (
    <>
      <NavBar />

      <main className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Journey Along the Blue Nile – Ethiopia’s Legendary River</h1>
        {/* Articles list */}
           <main className="p-8">
        
        
      </main>
        <Articles />
        {/* Author section */}
        <Author />
        {/* Comments section */}
        <CommentsSection />
        {/* We’ll add CommentsSection and CommentFetch underneath soon */}
      
        <Footer />
       
      </main>
    </>
  )
  }

