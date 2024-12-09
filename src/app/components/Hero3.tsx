import React from "react";
import Image from "next/image";
const OneMore: React.FC = () => {
  return (
    <div className="">
     
      {/* Lower Section */}
      <section className="bg-[#F2F0FF]  h-[410px] flex justify-center">
        <div className="p-[64px]  flex flex-wrap md:flex-nowrap items-center gap-10 px-6">
          <div className=" ">
            <div className="h-[400px] w-[400px] bg-[#F5E1FC] rounded-full"> 
            <Image
              src="/chair9.png"
              alt="Product"
              height={400}
              width={400}
              className="rounded-lg shadow-md h-[400px] w-[400px]"
            />
          </div>
            </div>
            {/* Product Image */}
          
          <div className="w-[400px]">
            <h3 className="text-xl font-bold text-[#151875] mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="text-[#151875] space-y-2 list-disc pl-3">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <button className="bg-[#FB2E86] text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                Add To Cart
              </button>
                  <p className="mt-2 text-sm text-[#151875]">
                B&B Italian Sofa - $32.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneMore;