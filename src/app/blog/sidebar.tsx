import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from 'lucide-react'

const recentPosts = [
  {
    title: "This is a blog established here",
    image: "/blog/blogside1.png"
  },
  {
    title: "This is a blog established here",
    image: "/blog/blogside2.png"
  },
  {
    title: "This is a blog established here",
    image: "/blog/blogside3.png"
  },
  {
    title: "This is a blog established here",
    image: "/blog/blogside4.png"
  }
]

const saleProducts = [
  {
    name: "Best product of month March",
    price: "$99.00",
    image: "/blog/blogside5.png.png"
  },
  {
    name: "Premium publisher of month",
    price: "$89.00",
    image: "/blog/blogside6.png"
  },
  {
    name: "Super laptop Silver ProXL",
    price: "$129.00",
    image: "/blog/blogside7.png"
  }
]

const otherProducts = [
  {
    name: "Quick link set",
    image: "/blog/blogblogside8.png"
  },
  {
    name: "Bag presents",
    image: "/blog/blogblogside9.png"
  },
  {
    name: "Shoes green",
    image: "/blog/blogblogside10.png"
  },
  {
    name: "Phone in",
    image: "/blog/blogblogside11.png"
  }
]

export function Sidebar() {
  return (
    <aside className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">Search</h2>
        <Input type="search" placeholder="Search..." className="w-full" />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">Categories</h2>
        <div className="space-y-2">
          {["November 2023", "October 2023", "September 2023"].map((category) => (
            <Link
              key={category}
              href="#"
              className="block text-gray-600 hover:text-purple-600"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">Recent Post</h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              href="#"
              className="flex gap-3 group"
            >
              <div className="relative h-[60px] w-[100px] flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-gray-600 group-hover:text-purple-600">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">Sale Product</h2>
        <div className="grid gap-4">
          {saleProducts.map((product, index) => (
            <Link
              key={index}
              href="#"
              className="flex gap-3 group"
            >
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-purple-600">
                  {product.name}
                </p>
                <p className="text-sm text-purple-600">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">Other product</h2>
        <div className="grid grid-cols-2 gap-4">
          {otherProducts.map((product, index) => (
            <div key={index} className="space-y-2">
              <Link
                href="#"
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 group-hover:text-purple-600">
                  {product.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">Follow</h2>
        <div className="flex gap-4">
          <Link href="#" className="text-purple-600 hover:text-purple-800">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-purple-600 hover:text-purple-800">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-purple-600 hover:text-purple-800">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {["General", "Lifestyle", "Fashion", "Design", "Media"].map((tag) => (
            <Link
              key={tag}
              href="#"
              className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-purple-100 hover:text-purple-600"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

