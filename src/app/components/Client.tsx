'use client'

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Selina Gomez",
    role: "Lead Art Director, Digital",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    image: "/client.png"
  },
  {
    id: 2,
    name: "John Smith",
    role: "Senior Developer",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sit amet ultricies nisi. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/client.png"
  },
]

export default function Client() {
  return (
    <section className="py-12 px-4 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Client Say!
        </h2>
        
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center p-6 text-[#8A8FB9]">
                    <div className="mb-6">
                      <div className="relative w-32 h-24 md:w-191 md:h-32  overflow-hidden ">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name} profile`}
                          height={200}
                          width={200}
                          className="bg-center"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-xl md:text-2xl font-semibold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
        
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === 0 ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

