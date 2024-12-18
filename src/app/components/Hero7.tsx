import React from "react";
import Image from "next/image";

const Hero7 = () => {
  return (
    <div>
      {/* Latest Update */}
      <div className="relative">
        <Image
          src="/poster.png"
          alt="update"
          width={1930}
          height={462}
          className="w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#151875] font-extrabold mb-4 max-w-[90%] md:max-w-[700px] leading-[1.5] tracking-wide">
            Get Latest Update By Subscribing to Our Newsletter
          </h3>
          <button className="px-4 py-2 md:px-6 md:py-3 bg-[#FB2E86] text-white rounded-lg hover:bg-[#FB2f98]">
            Shop Now
          </button>
        </div>
      </div>
      {/* Logo Section */}
      <div className="flex justify-center items-center py-12 md:py-24">
        <Image
          src="/logolist.png"
          width={904}
          height={93}
          alt="logos"
          className="w-[80%] sm:w-[70%] md:w-[100%] lg:w-[100%]"
        />
      </div>
    </div>
  );
};

export default Hero7;
