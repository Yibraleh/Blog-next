// app/components/Footer.tsx
'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Yibraleh Ayele. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="/" className="hover:underline text-sm">Home</a>
          <a href="/blog" className="hover:underline text-sm">Blog</a>
          <a href="https://twitter.com/Yibraleh" className="hover:underline text-sm">Twitter</a>
          <a href="https://github.com/Yibra" className="hover:underline text-sm">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
