import React, { FC } from "react";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";

const EcommerceSection: FC = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Ecommerce Accessories & Fashion item</h1>
        <p className="text-sm md:text-base text-gray-500">About 9,620 results (0.02 seconds)</p>
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Filters */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Per Page Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-gray-700 text-sm md:text-base">
              Per Page:
            </label>
            <select
              id="perPage"
              className="border border-gray-300 rounded-md p-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          {/* Sort By Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-gray-700 text-sm md:text-base">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="border border-gray-300 rounded-md p-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Right View Selector */}
        <div className="flex items-center gap-4">
          <label htmlFor="view" className="text-gray-700 text-sm md:text-base">
            View:
          </label>
          <button
            id="gridView"
            className="border border-gray-300 rounded-md p-2 hover:bg-gray-100"
            aria-label="Grid View"
          >
            <IoGrid className="text-xl" />
          </button>
          <button
            id="listView"
            className="border border-gray-300 rounded-md p-2 hover:bg-gray-100"
            aria-label="List View"
          >
            <FaList className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
