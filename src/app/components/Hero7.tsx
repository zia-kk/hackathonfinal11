import React from "react";
import Image from "next/image";

const Hero7 = () => {
  return (
    <div>
      {/* Latest Update Section */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/poster.png"
          alt="update"
          width={1930}
          height={462}
          className="w-full h-auto"
          priority
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#151875] font-extrabold mb-4 max-w-[90%] md:max-w-[700px] leading-[1.5] tracking-wide">
            Get the Latest Update By Subscribing to Our Newsletter
          </h3>
          <button className="px-6 py-3 bg-[#FB2E86] text-white text-sm sm:text-base md:font-medium font-medium rounded-lg hover:bg-[#FB2f98] transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-24">
        <Image
          src="/logolist.png"
          width={904}
          height={93}
          alt="logos"
          className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero7;
