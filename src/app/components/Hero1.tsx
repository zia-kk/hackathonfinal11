"use client";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  const slide = {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/sofa1.png", 
    lampImage: "/lamp.png", 
  };

  return (
    <section className="relative bg-gray-100 py-10 md:py-20 px-5 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Section */}
      <div className="w-full md:w-1/4 flex justify-center md:justify-start items-start relative mt-10 md:mt-0">
        <div className="absolute top-[-100px] md:top-[-150px] left-[-40px] md:left-0 z-10 hidden">
          <Image
            src="/image 32.png"
            alt="Lamp"
            width={387}
            height={387}
            className="object-contain max-w-[200px] md:max-w-[350px]"
          />
        </div>
      </div>

      {/* Center Section */}
      <div className="w-full md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-pink-500 font-medium mt-6">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          {slide.title}
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {slide.description}
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-1/2 md:w-1/3 mx-auto md:mx-0 text-center"
        >
          {slide.buttonText}
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center relative mt-10 md:mt-0">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-5 md:p-10 shadow-xl">
          <Image
            src="/hero1chair.png"
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full max-w-[300px] md:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
