import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Inomhus: 'yellow',
    CSS: 'blue',
    React: 'green',
    Next: 'cyan',
    MDX: 'mdxYellow',
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-semibold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
