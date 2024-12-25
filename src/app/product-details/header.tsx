import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export default function Header() {
  return (
    <div className="py-8 px-4 md:px-6 lg:px-8 bg-[#F6F5FF] ">
     <div className="ml-[100px]">
     <h1 className="text-2xl md:text-3xl font-bold text-[#1B224B] mb-4">
       Product Detail
      </h1>
      <nav className="flex items-center space-x-1 text-sm ">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link
          href="/pages"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Pages
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-rose-500 font-medium">Product Detail</span>
      </nav>
     </div>
    </div>
  )
}

