import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md mt-[10px] px-4 py-3 flex flex-col md:flex-row lg:flex-row justify-evenly items-center p-[168px]">
      <div className=" font-bold text-purple-700 text-[42px]">
        Hekto
      </div>
      <ul className="flex space-x-6 text-sm">
        <li className=" cursor-pointer font-semibold hover:underline text-[18px]">Home</li>
       <Link href="/Pages"><li className=" cursor-pointer font-semibold hover:underline text-[18px]">Pages</li></Link> 
        <li className=" cursor-pointer font-semibold hover:underline text-[18px]">Products</li>
        <li className=" cursor-pointer font-semibold hover:underline text-[18px]">Blog</li>
        <li className=" cursor-pointer font-semibold hover:underline text-[18px]">Shop</li>
        <li className=" cursor-pointer font-semibold hover:underline text-[18px]">Contact</li>
      </ul>
      <div className="flex items-center">
        <input
          type="text"
          id="inputtext"
          placeholder="What are you looking for?"
          className=" p-[24px] h-[48px] w-[317px] bg-gray-200"
        />
        <div className="absolute "></div>
        <div className="bg-pink-600 h-[48px] w-[40px] text-[26px] font-semibold flex justify-center items-center ">
          <CiSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
