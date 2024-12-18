import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/blog1.png",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "blog2.png",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "blog3.png",
  },
];

const LeatestBlog: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-[#151875] mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="bg-white rounded-md shadow-md p-4"
          style={{ width: "300px", height: "420px" }}
        >
          <Image src={blogPosts[0].imgSrc} alt={blogPosts[0].title} className="h-40 w-full object-cover rounded-md" />
          <div className="mt-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
            <FaPenNib className="text-[#FB2E86]" /><span className="text-[#151875]">{blogPosts[0].author}</span>
              <span>•</span>
              <MdOutlineDateRange className="text-[#FFA454]" /><span className="text-[#151875]">{blogPosts[0].date}</span>
            </div>
            <h2 className="text-lg font-semibold text-[#151875] mt-2">{blogPosts[0].title}</h2>
            <p className="text-sm text-[#151875] mt-2">{blogPosts[0].description}</p>
            <button className="text-[#151875] underline mt-4 tex-[18px] font-semibold">Read More</button>
          </div>
        </div>

        <div
          className="bg-white rounded-md shadow-md p-4"
          style={{ width: "300px", height: "420px" }}
        >
          <Image  src={blogPosts[1].imgSrc} alt={blogPosts[1].title} className="h-40 w-full object-cover rounded-md" />
          <div className="mt-4">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <FaPenNib className="text-[#FB2E86]" /><span className="text-[#151875]">{blogPosts[0].author}</span>
              <span>•</span>
              <MdOutlineDateRange className="text-[#FFA454]" /><span className="text-[#151875]">{blogPosts[0].date}</span>
            </div>
            <h2 className="text-lg font-semibold text-[#151875] mt-2">{blogPosts[0].title}</h2>
            <p className="text-sm text-[#151875] mt-2">{blogPosts[0].description}</p>
            <button className="text-[#151875] underline mt-4 tex-[18px] font-semibold">Read More</button>
          </div>
        </div>

        <div
          className="bg-white rounded-md shadow-md p-4"
          style={{ width: "300px", height: "420px" }}
        >
          <Image  src={blogPosts[2].imgSrc} alt={blogPosts[2].title} className="h-40 w-full object-cover rounded-md" />
          <div className="mt-4">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <FaPenNib className="text-[#FB2E86]" /><span className="text-[#151875]">{blogPosts[0].author}</span>
              <span>•</span>
              <MdOutlineDateRange className="text-[#FFA454]" /><span className="text-[#151875]">{blogPosts[0].date}</span>
            </div>
            <h2 className="text-lg font-semibold text-[#151875] mt-2">{blogPosts[0].title}</h2>
            <p className="text-sm text-[#151875] mt-2">{blogPosts[0].description}</p>
            <button className="text-[#151875] underline mt-4 tex-[18px] font-semibold">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeatestBlog;
