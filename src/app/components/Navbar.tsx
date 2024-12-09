import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-col md:flex-row lg:flex-row justify-evenly items-center p-[168px]">
      <div className="text-xl font-bold text-purple-700 text-[34px] ">
        Hekto
      </div>
      <ul className="flex space-x-6 text-sm">
        <li className=" text-[16px]">Home</li>
        <li className=" text-[16px]">Pages</li>
        <li className=" text-[16px]">Products</li>
        <li className=" text-[16px]">Blog</li>
        <li className=" text-[16px]">Shop</li>
        <li className=" text-[16px]">Contact</li>
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
