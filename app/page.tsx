// app/page.tsx
import Image from 'next/image'
import NavBar from './components/NavBar'

export default function HomePage() {
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome to Your Adventure
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
              Discover the wonders of Ethiopia and beyond with our curated travel blogs, tips, and stories.
            </p>
            <a href="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Explore the Blog
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
            <Image src="/nile1.jpg" alt="Feature 1" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stunning Photography</h3>
            <p className="text-gray-600">High-quality images that bring each destination to life.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
            <Image src="/nile2.jpg" alt="Feature 2" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-gray-600">Insider tips from local experts for off-the-beaten-path adventures.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
            <Image src="/nile3.jpg" alt="Feature 3" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Stories</h3>
            <p className="text-gray-600">First-hand travel experiences and inspiring stories.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="max-w-2xl mx-auto mb-6">Sign up for our newsletter to get the latest travel tips and guides straight to your inbox.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none" />
          <button type="submit" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
    </>
  )
}

