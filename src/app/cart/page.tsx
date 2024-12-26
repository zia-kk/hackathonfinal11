import Image from "next/image";
import Header from "./topnavbar";
import { IoIosCheckmarkCircle } from "react-icons/io";
const products = [
  {
    id: 1,
    name: "Ut diam consequat",
    price: "$32.00",
    color: "Brown",
    size: "XL",
    image: "/cart1.png", // Path to the image in public folder
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    price: "$32.00",
    color: "Black",
    size: "L",
    image: "/cart2.png",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    price: "$32.00",
    color: "Red",
    size: "M",
    image: "/cart3.png",
  },
  {
    id: 3,
    name: "Elit massa diam",
    price: "$32.00",
    color: "Red",
    size: "M",
    image: "/cart4.png",

  },
  {
    id: 3,
    name: "Proin pharetra elementum",
    price: "$32.00",
    color: "Red",
    size: "M",
    image: "/cart5.png",
  },
  // Add more products as needed
];

const Cart: React.FC = () => {
  
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-[#1D3178]">Product</th>
                  <th className="px-4 py-2 text-[#1D3178]">Price</th>
                  <th className="px-4 py-2 text-[#1D3178]">Quantity</th>
                  <th className="px-4 py-2 text-[#1D3178]">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="px-4 py-4 flex items-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="rounded-lg mr-4"
                      />
                      <div>
                        <p className="font-semibold text-gray-700">{product.name}</p>
                        <p className="text-sm text-gray-500">Color: {product.color}</p>
                        <p className="text-sm text-gray-500">Size: {product.size}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-700">{product.price}</td>
                    <td className="px-4 py-4">
                      <input
                        type="number"
                        defaultValue={1}
                        className="w-16 px-2 py-1 border rounded-lg text-center"
                      />
                    </td>
                    <td className="px-4 py-4 text-gray-700">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center p-4">
              <button className="px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600">
                Update Cart
              </button>
              <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Totals and Calculate Shipping */}
          <div className="space-y-6">
            {/* Cart Totals */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#1D3178] mb-4">Cart Totals</h3>
              <div className="space-y-2">
                <p className="flex justify-between text-gray-600">
                  <span>Subtotal:</span> <span>$219.00</span>
                </p>
                <p className="flex justify-between text-gray-600">
                  <span>Total:</span> <span>$325.00</span>
                </p>
                <p className="text-sm text-gray-500 flex gap-2 items-center">
                <IoIosCheckmarkCircle className="text-[#19D16F]"  />Shipping & taxes calculated at checkout
                </p>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-white bg-[#19D16F] rounded-md hover:bg-green-600">
                Proceed to Checkout
              </button>
            </div>

            {/* Calculate Shipping */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#1D3178] mb-4">
                Calculate Shipping
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FB2E86] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
                <button className="w-full px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600">
                  Calculate Shipping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Cart;
