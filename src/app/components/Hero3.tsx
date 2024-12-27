import React from "react";
import Image from "next/image";

const OneMore: React.FC = () => {
  return (
    <div>
      {/* Lower Section */}
      <section className="bg-[#F2F0FF] h-auto md:h-[410px] flex justify-center items-center py-10 px-4">
        <div className="p-[64px] flex flex-wrap md:flex-nowrap items-center gap-10">
          {/* Product Image */}
          <div className="flex justify-center md:justify-start">
            <div className="h-[250px] w-[250px] md:h-[400px] md:w-[400px] bg-[#F5E1FC] rounded-full flex items-center justify-center">
              <Image
                src="/chair9.png"
                alt="Product"
                height={400}
                width={400}
                className="rounded-lg shadow-md max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-[400px] text-center md:text-left">
            <h3 className="text-xl font-bold text-[#151875] mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="text-[#151875] space-y-2 list-disc pl-5">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-3">
              <button className="bg-[#FB2E86] text-white py-2 px-6 rounded shadow-md hover:bg-purple-700 transition-all duration-300">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-[#151875] md:mt-0">
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
