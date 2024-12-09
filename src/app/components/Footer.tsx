import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hekto</h2>
          <div className="flex flex-col  space-y-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="rounded-md border border-gray-300"
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold">Sign Up</button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Contact Info <br /> 17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Care</h2>
          <ul className="space-y-2 text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Pages</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center justify-center flex gap-[50px] mx-[200px] text-gray-500 text-sm">
        <h3 className="text-[18px]">©Webecy - All Rights Reserved</h3>
        <FaFacebook className="text-[26px]"/>
        <FaSquareTwitter className="text-[26px]"/>
      </div>
    </footer>
  );
};

export default Footer;