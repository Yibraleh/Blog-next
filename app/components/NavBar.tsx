// app/components/NavBar.tsx
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex space-x-4">
      <Link href="/" className="hover:underline">
  Home
</Link>
      <Link href="/blog" className="hover:underline">
  Blog
</Link>
<Link href="/info" className="hover:underline">
  Info
</Link>

    </nav>
  )
}
