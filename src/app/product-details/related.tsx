import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface Product {
  id: number
  title: string
  price: number
  rating: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Mens Fashion Wear",
    price: 45.0,
    rating: 5,
    image: "/rel1.png",
  },
  {
    id: 2,
    title: "Women's Fashion",
    price: 57.0,
    rating: 5,
    image: "/rel2.png",
  },
  {
    id: 3,
    title: "Walk Dummy Fashion",
    price: 67.0,
    rating: 5,
    image: "/rel3.png",
  },
  {
    id: 4,
    title: "Top Wall Digital Clock",
    price: 51.0,
    rating: 5,
    image: "/rel4.png",
  },
]

export default function RelatedProducts() {
  return (
    <section className="w-full py-12 m-auto">
      <div className="container px-8 md:px-12 m-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-[#101750]">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-[3/4] relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardContent className="p-4 text-[#151875]">
                <CardTitle className="text-base mb-2">{product.title}</CardTitle>
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-[#151875]">
                  ${product.price.toFixed(2)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

