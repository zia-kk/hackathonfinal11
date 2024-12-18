import Image from "next/image";
import EcommerceSection from "./sort";
import ShopHeader from "./grid_header";


interface Product {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  colors: Color[];
  imageUrl: string;
}

interface Color {
  
  hex: string;
}

const products: Product[] = [

  // Product 1
  {
    id: 1,
    name: "Vel elit euismod",
    price: 50.0,
    salePrice: 45.0,
    colors: [
      { hex: "#ff0000" },
      {  hex: "#0000ff" },
      {  hex: "#000000" },
    ],
    imageUrl: "/placeholder.svg?height=300&width=300",
  },

    // Product 2
  {
    id: 2,
    name: "Vel elit euismod",
    price: 50.0,
    salePrice: 45.0,
    colors: [
      { hex: "#0d9488" },
      {  hex: "#7c3aed" },
      {  hex: "#be123c" },
    ],
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
    // Product 3
    {
      id: 2,
      name: "Vel elit euismod",
      price: 50.0,
      salePrice: 45.0,
      colors: [
        { hex: "#0d9488" },
        {  hex: "#7c3aed" },
        {  hex: "#be123c" },
      ],
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
      // Product 4

      {
        id: 2,
        name: "Vel elit euismod",
        price: 50.0,
        salePrice: 45.0,
        colors: [
          { hex: "#0d9488" },
          {  hex: "#7c3aed" },
          {  hex: "#be123c" },
        ],
        imageUrl: "/placeholder.svg?height=300&width=300",
      },
        // Product 5

        {
          id: 2,
          name: "Vel elit euismod",
          price: 50.0,
          salePrice: 45.0,
          colors: [
            { hex: "#0d9488" },
            {  hex: "#7c3aed" },
            {  hex: "#be123c" },
          ],
          imageUrl: "/placeholder.svg?height=300&width=300",
        },
          // Product 6

          {
            id: 2,
            name: "Vel elit euismod",
            price: 50.0,
            salePrice: 45.0,
            colors: [
              { hex: "#0d9488" },
              {  hex: "#7c3aed" },
              {  hex: "#be123c" },
            ],
            imageUrl: "/placeholder.svg?height=300&width=300",
          },

            // Product 7
  {
    id: 1,
    name: "Vel elit euismod",
    price: 50.0,
    salePrice: 45.0,
    colors: [
      { hex: "#ff0000" },
      {  hex: "#0000ff" },
      {  hex: "#000000" },
    ],
    imageUrl: "/placeholder.svg?height=300&width=300",
  },

    // Product 8
  {
    id: 2,
    name: "Vel elit euismod",
    price: 50.0,
    salePrice: 45.0,
    colors: [
      { hex: "#0d9488" },
      {  hex: "#7c3aed" },
      {  hex: "#be123c" },
    ],
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
    // Product 9
    {
      id: 2,
      name: "Vel elit euismod",
      price: 50.0,
      salePrice: 45.0,
      colors: [
        { hex: "#0d9488" },
        {  hex: "#7c3aed" },
        {  hex: "#be123c" },
      ],
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
      // Product 10

      {
        id: 2,
        name: "Vel elit euismod",
        price: 50.0,
        salePrice: 45.0,
        colors: [
          { hex: "#0d9488" },
          {  hex: "#7c3aed" },
          {  hex: "#be123c" },
        ],
        imageUrl: "/placeholder.svg?height=300&width=300",
      },
        // Product 11

        {
          id: 2,
          name: "Vel elit euismod",
          price: 50.0,
          salePrice: 45.0,
          colors: [
            { hex: "#0d9488" },
            {  hex: "#7c3aed" },
            {  hex: "#be123c" },
          ],
          imageUrl: "/placeholder.svg?height=300&width=300",
        },
          // Product 12

          {
            id: 2,
            name: "Vel elit euismod",
            price: 50.0,
            salePrice: 45.0,
            colors: [
              { hex: "#0d9488" },
              {  hex: "#7c3aed" },
              {  hex: "#be123c" },
            ],
            imageUrl: "/placeholder.svg?height=300&width=300",
          },
        
  // Add more products as needed
];

export default function ProductGrid() {
  return (
   <>
   <ShopHeader/>
   <EcommerceSection/>
    <section className="w-full px-4 py-8 mx-auto max-w-7xl">
       
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className=" text-gray-900 line-clamp-2 font-bold text-[17px]">
                {product.name}
              </h3>
              <div className="flex gap-1">
                {product.colors.map((color) => (
                  <span
                    key={color.hex}
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                    title={color.hex}
                  ></span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-sm text-pink-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="justify-center items-center py-24 hidden md:flex sm:hidden lg:flex">
        <Image
        src="/logolist.png"
        width={904}
        height={93}
        alt="logoos"
        />
      </div>
     
    </section>


    </>
    
  );

  
}
