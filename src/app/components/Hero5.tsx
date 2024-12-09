import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import React from "react";

const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-2xl font-semibold text-center text-primary mb-8">
      Discount Item

        </h2>
        <div className="flex gap-6 mb-9 justify-center items-center">
          <p className="text-[#FB4997] text-[18px] font-[400] leading-[21.5px] cursor-pointer hover:underline">Wood Chair</p>
          <p className="text-[#151875] text-[18px] font-[400] leading-[21.5px] cursor-pointer hover:underline">Plastic Chair</p>
          <p className="text-[#151875] text-[18px] font-[400] leading-[21.5px] cursor-pointer hover:underline">Sofa Colletion</p>

        </div>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6">
        {/* Left Content */}
        <div className="flex-1 ml-[100px] ">
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            20% Discount Of All Products
            <p className="text-[18px] text-[#FB2E86]">Eams Sofa Compact</p>
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-none  space-y-2 text-gray-500 flex  items-center gap-4">
            <ul>
              <li><GiCheckMark className="inline-block" />Material expose like metals</li>
              <li><GiCheckMark className="inline-block"/>Simple neutral colours</li></ul>
            
            <ul>
            <li><GiCheckMark className="inline-block"/>Clear lines and geometric figures</li>
              <li><GiCheckMark className="inline-block"/>Material expose like metals</li></ul>
          </ul>
          <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        

        <div className="flex-1">
        <Image
            src="/chair19.png"
            alt="Chair"
            height={300}
            width={300}
            className="rounded-full  w-full max-w-sm mx-auto"
          />
        
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;