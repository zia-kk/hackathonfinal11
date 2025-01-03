import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge"

import Image from "next/image";
import Featured from "../components/Services";


export default function ProductSection() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      
      
      <section>
        <h2 className="text-2xl font-semibold text-center text-primary mb-8">
          Fetured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-12">
                 <Image
                  src="/chair1.png"
                  alt="Cantilever chair 1"
                  fill
                  className=" object-cover rounded-lg"
                />
               </div>

               <div className=" flex flex-col justify-center items-center py-4 gap-2"><h3 className="text-center text-sm  text-pink-500 font-semibold">
                Cantilever chaires
              </h3>
              <p className="text-[12px] text-[#151875]">Code-Y523201</p>
              <p className="text-[12px] text-[#151875]">$200.00</p></div>

                        {/*/////////// kursi wala section */}

            </CardContent>
            </Card>
            <Card className="overflow-hidden">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-6">
              
                 <Image
                  src="/chair2.png"
                  alt="Cantilever chair 1"
                  fill
                  className=" object-cover rounded-lg "
                  
                />
                <Button className="relative top-[180px] left-[50px] cursor-pointer bg-[#08D15F]">Veiw Detail</Button>
               </div>

               <div className="bg-[#2F1AC4] text-white flex flex-col justify-center items-center py-4 gap-2"><h3 className="text-center text-sm font-medium">
                Cantilever chaires
              </h3>
              <p className="text-[12px] ">Code-Y523201</p>
              <p className="text-[12px] ">$200.00</p></div>
            </CardContent>
            </Card>

            {/*/////////// kursi wala section */}

          <Card className="overflow-hidden">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-12">
                <Image
                  src="/chair3.png"
                  alt="Cantilever chair 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className=" flex flex-col justify-center items-center py-4 gap-2"><h3 className="text-center text-sm  text-pink-500 font-semibold">
                Cantilever chaires
              </h3>
              <p className="text-[12px] ">Code-Y523201</p>
              <p className="text-[12px] ">$200.00</p></div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-12">
                <Image
                  src="/chair4.png"
                  alt="Cantilever chair 3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className=" flex flex-col justify-center items-center py-4 gap-2"><h3 className="text-center text-sm  text-pink-500 font-semibold">
                Cantilever chaires
              </h3>
              <p className="text-[12px] text-[#151875]">Code-Y523201</p>
              <p className="text-[12px] text-[#151875]">$200.00</p></div>
            </CardContent>
          </Card>
          
        </div>
      </section>

      <h2 className="text-2xl font-semibold text-center text-primary mb-8">
      Leatest Products

        </h2>
        <div className="flex justify-evenly">
          <p className="text-[#FB4997] text-[18px] font-[400] leading-[21.5px] cursor-pointer hover:underline">New Arrival</p>
          <p className="text-[#151875] text-[18px] font-[400] leading-[21.5px] cursor-pointer hover:underline">Best Seller</p>
          <p className="text-[#151875] text-[18px] font-[400] leading-[21.5px] cursor-pointer hover:underline">Featured</p>
          <p className="text-[#151875] text-[18px] font-[400] leading-[21.5px] cursor-pointer hover:underline">Special Offer</p>
        </div>
        {/* Latest Products wala Section */}
<section className="mb-16">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* first Product   */}

    <Card className="group">

    <CardContent className="p-4">
        <div className="relative aspect-square mb-12">
          <Image
            src="/chair5.png" 
            alt="Product 1"
            fill
            className="object-cover rounded-lg"
          />
          
        </div>
       <div className="flex justify-between"> <h3 className="text-[16px] eading-[18.50px] mb-2 text-[#151875] font-semibold">Product Name 1</h3>
       <p className=" text-[#151875] font-semibold">$42.00</p>
       <p className="text-red-600 font-semibold mr-[-15px]">$65.00</p>
       </div>
      
      </CardContent>
    </Card>
    {/*second  Product  */}
    <Card className="group">
      <CardContent className="p-4">
        
        <div className="relative aspect-square mb-12">
          <Image
            src="/chair6.png" 
            alt="Product 2"
            fill
            className="object-cover rounded-lg"
          />
           
          
          <Badge className="absolute top-2 right-2 bg-blue-600 transform rotate-45">New</Badge>
        
        </div>
        <div className="flex justify-between"> <h3 className="text-[16px] eading-[18.50px] mb-2 text-[#151875] font-semibold">Product Name 1</h3>
       <p className=" text-[#151875] font-semibold">$42.00</p>
       <p className="text-red-600 font-semibold mr-[-15px]">$65.00</p>
       </div>
      </CardContent>
    </Card>
    {/* second Product  */}
    <Card className="group">
      <CardContent className="p-4">
        <div className="relative aspect-square mb-12">
          <Image
            src="/chair1.png" 
            alt="Product 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between"> <h3 className="text-[16px] eading-[18.50px] mb-2 text-[#151875] font-semibold">Product Name 1</h3>
       <p className=" text-[#151875] font-semibold">$42.00</p>
       <p className="text-red-600 font-semibold mr-[-15px]">$65.00</p>
       </div>
      </CardContent>
    </Card>
      {/* forth Product */}
      <Card className="group">
      <CardContent className="p-4">
        <div className="relative aspect-square mb-12">
          <Image
            src="/chair7.png" 
            alt="Product 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between"> <h3 className="text-[16px] eading-[18.50px] mb-2 text-[#151875] font-semibold">Product Name 1</h3>
       <p className=" text-[#151875] font-semibold">$42.00</p>
       <p className="text-red-600 font-semibold mr-[-15px]">$65.00</p>
       </div>
      </CardContent>
    </Card>
      {/* fifth Product */}
      <Card className="group">
      <CardContent className="p-4">
        <div className="relative aspect-square mb-12">
          <Image
            src="/chair8.png" 
            alt="Product 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between"> <h3 className="text-[16px] eading-[18.50px] mb-2 text-[#151875] font-semibold">Product Name 1</h3>
       <p className=" text-[#151875] font-semibold">$42.00</p>
       <p className="text-red-600 font-semibold mr-[-15px]">$65.00</p>
       </div>
      </CardContent>
    </Card>
      {/* six Product*/}
      <Card className="group">
      <CardContent className="p-4">
        <div className="relative aspect-square mb-12">
          <Image
            src="/chair4.png" 
            alt="Product 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between"> <h3 className="text-[16px] eading-[18.50px] mb-2 text-[#151875] font-semibold">Product Name 1</h3>
       <p className=" text-[#151875] font-semibold">$42.00</p>
       <p className="text-red-600 font-semibold mr-[-15px]">$65.00</p>
       </div>
      </CardContent>
    </Card>
  </div>
</section>

{/* What Shopex Offer Section */}

  <h2 className="text-2xl font-semibold text-center mb-2">What Shopex Offer!</h2>
  
<Featured/>

    </div>
  );
}
