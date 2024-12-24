"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import ShopHeader from "../Shop_grid_defualt/grid_header"
import Featured from "../components/Services";
import Client from "../components/Client";


export default function AboutSection() {
  return (
   <>
  
<ShopHeader/>
   <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="relative rounded-2xl  bg-white p-4 md:p-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image container */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
            <Image
              src="/about.png"
              alt="Business professionals discussing ecommerce"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content container */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-bold text-blue-900 md:text-3xl lg:text-4xl">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-muted-foreground md:text-lg flex flex-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
              mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae
              eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div>
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h2 className="text-2xl font-semibold text-center mb-8">Our Features</h2>
        <Featured/>
        <Client/>
       

        
   </>
    
  )
}

