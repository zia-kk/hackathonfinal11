import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from 'lucide-react'

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  image: string
  author: string
}

export function BlogPost({ title, excerpt, date, image, author }: BlogPostProps) {
  return (
    <article className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 66vw, 100vw"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="text-purple-600">{author}</span>
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {date}
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-purple-800 hover:text-purple-600">
          <Link href="#">{title}</Link>
        </h2>
        <p className="text-gray-600">{excerpt}</p>
        <Link
          href="#"
          className="inline-block text-sm font-medium text-purple-600 hover:text-purple-800"
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}

