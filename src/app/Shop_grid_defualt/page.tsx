import Image from "next/image";
import EcommerceSection from "./sort";
import Header from "./topnavbar";


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
    imageUrl: "/chair21.png",
  },

    // Product 2
  {
    id: 2,
    name: "Ultricies condimentum imperdiet",
    price: 50.0,
    salePrice: 45.0,
    colors: [
      { hex: "#0d9488" },
      {  hex: "#7c3aed" },
      {  hex: "#be123c" },
    ],
    imageUrl: "/chair22.png",
  },
    // Product 3
    {
      id: 2,
      name: "Vitae suspendisse sed",
      price: 50.0,
      salePrice: 45.0,
      colors: [
        { hex: "#0d9488" },
        {  hex: "#7c3aed" },
        {  hex: "#be123c" },
      ],
      imageUrl: "/chair23.png",
    },
      // Product 4

      {
        id: 2,
        name: "Sed at fermentum",
        price: 50.0,
        salePrice: 45.0,
        colors: [
          { hex: "#0d9488" },
          {  hex: "#7c3aed" },
          {  hex: "#be123c" },
        ],
        imageUrl: "/chair24.png",
      },
        // Product 5

        {
          id: 2,
          name: "Fusce pellentesque at",
          price: 50.0,
          salePrice: 45.0,
          colors: [
            { hex: "#0d9488" },
            {  hex: "#7c3aed" },
            {  hex: "#be123c" },
          ],
          imageUrl: "/chair25.png",
        },
          // Product 6

          {
            id: 2,
            name: "Vestibulum magna laoreet",
            price: 50.0,
            salePrice: 45.0,
            colors: [
              { hex: "#0d9488" },
              {  hex: "#7c3aed" },
              {  hex: "#be123c" },
            ],
            imageUrl: "/chair26.png",
          },

            // Product 7
  {
    id: 1,
    name: "Sollicitudin amet orci",
    price: 50.0,
    salePrice: 45.0,
    colors: [
      { hex: "#ff0000" },
      {  hex: "#0000ff" },
      {  hex: "#000000" },
    ],
    imageUrl: "/chair27.png",
  },

    // Product 8
  {
    id: 2,
    name: "Ultrices mauris sit",
    price: 50.0,
    salePrice: 45.0,
    colors: [
      { hex: "#0d9488" },
      {  hex: "#7c3aed" },
      {  hex: "#be123c" },
    ],
    imageUrl: "/chair28.png",
  },
    // Product 9
    {
      id: 2,
      name: "Pellentesque condimentum ac",
      price: 50.0,
      salePrice: 45.0,
      colors: [
        { hex: "#0d9488" },
        {  hex: "#7c3aed" },
        {  hex: "#be123c" },
      ],
      imageUrl: "/chair29.png",
    },
      // Product 10

      {
        id: 2,
        name: "Cras scelerisque velit",
        price: 50.0,
        salePrice: 45.0,
        colors: [
          { hex: "#0d9488" },
          {  hex: "#7c3aed" },
          {  hex: "#be123c" },
        ],
        imageUrl: "/chair30.png",
      },
        // Product 11

        {
          id: 2,
          name: "Lectus vulputate faucibus",
          price: 50.0,
          salePrice: 45.0,
          colors: [
            { hex: "#0d9488" },
            {  hex: "#7c3aed" },
            {  hex: "#be123c" },
          ],
          imageUrl: "/chair31.png",
        },
          // Product 12

          {
            id: 2,
            name: "Purus risus, ut",
            price: 50.0,
            salePrice: 45.0,
            colors: [
              { hex: "#0d9488" },
              {  hex: "#7c3aed" },
              {  hex: "#be123c" },
            ],
            imageUrl: "/chair24.png",
          },
        
  // Add more products as needed
];

export default function ProductGrid() {
  return (
   <>
   <Header/>
   <EcommerceSection/>
    <section className="w-full px-4 py-8 mx-auto max-w-7xl">
       
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105 "
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
