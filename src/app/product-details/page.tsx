'use client'

import Image from "next/image"
import { useState } from "react"
import { Heart } from 'lucide-react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Header from "./header"
import Feature from "./feature";
import RelatedProducts from "./related";
import Logos from "../components/Logos";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState("/bag1.png")

  const thumbnails = [
    "/bag2.png",
    "/bag3.png",
    "/bag4.png"
  ]

  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto p-4 md:p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left side - Images */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(thumb)}
                  className="w-16 h-16 md:w-20 md:h-20 border rounded-sm overflow-hidden hover:border-primary transition-colors"
                >
                  <Image
                    src={thumb}
                    alt={`Product thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-square">
              <Image
                src={selectedImage}
                alt="Product main image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="space-y-4 md:space-y-6 md:ml-[80px] lg:ml-[80px]">
            <div>
              <h1 className="text-lg md:text-2xl  mb-2 text-[#0D134E] font-semibold">Playwood arm chair</h1>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm  text-[#151875] font-semibold">(22)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base  line-through text-[#FB2E86] font-semibold">$35.00</span>
              <span className="text-base md:text-lg   text-[#151875] font-semibold">$32.00</span>
            </div>

            <div>
              <h2 className="font-semibold mb-2 text-[#0D134E] ">Color</h2>
              <p className="text-sm md:text-base  w-full md:w-[350px] text-[#A9ACC6] font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <h1 className="text-base md:text-lg font-semibold text-[#151875] cursor-pointer">
                Add To Cart
              </h1>
              <Heart className="text-lg md:text-2xl text-[#151875] cursor-pointer active:text-red-600" />
            </div>

            <div className="space-y-4 pt-4">
              <div>
                <h2 className=" mb-2 text-[#151875] font-semibold">Categories:</h2>
                <div className="text-sm md:text-base  text-[#151875]">Furniture</div>
              </div>

              <div>
                <h2 className="font-medium mb-2 text-[#151875]">Tags:</h2>
                <div className="text-sm md:text-base text-muted-foreground text-[#151875]">Modern, Chair</div>
              </div>

              <div>
                <h2 className="font-medium mb-2 text-[#151875]">Share:</h2>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-[#151875] flex items-center justify-center">
                    <FaFacebookF className="text-white text-sm" />
                  </div>
                  <div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-[#FB2E86] flex items-center justify-center">
                    <FaInstagram className="text-white text-sm" />
                  </div>
                  <div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-[#151875] flex items-center justify-center">
                    <FiTwitter className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature/>
      <RelatedProducts/>
      <Logos/>
            
    </>
  )
}
