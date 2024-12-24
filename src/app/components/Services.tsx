
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';


export default function Featured(){
  return (
    <div> 
      <section>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[50px]">
    <Card className='hover:bg-[#F6F5FF] cursor-pointer '>
      <CardContent className="p-6 text-center">
        <div className=" flex items-center justify-center">
          <Image src={"/delivery.png"} alt='truck' height={65} width={65}/>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-[#151875] text-[20px]">Free Delivery</h3>
        <p className="text-muted-foreground text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </CardContent >
    </Card>
    <Card className='hover:bg-[#F6F5FF] cursor-pointer'>
      <CardContent className="p-6 text-center">
      <div className=" flex items-center justify-center">
          <Image src={"/cashback.png"} alt='truck' height={50} width={50}/>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-[#151875] text-[20px]">100% Cash Back</h3>
        <p className="text-muted-foreground text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </CardContent>
    </Card>
    <Card className='hover:bg-[#F6F5FF] cursor-pointer'>
      <CardContent className="p-6 text-center">
      <div className=" flex items-center justify-center mt-0">
          <Image src={"/Quailty.png"} alt='truck' height={45} width={45}/>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-[#151875] text-[20px]">Quality Product</h3>
        <p className="text-muted-foreground text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </CardContent>
    </Card>
    <Card className='hover:bg-[#F6F5FF] cursor-pointer'>
      <CardContent className="p-6 text-center">
      <div className=" flex items-center justify-center">
          <Image src={"/24hr.png"} alt='truck' height={45} width={45}/>
        </div>
        <h3 className=" text-lg mb-2 text-[#151875] text-[20px] mt-2 font-semibold">Fast Delivery</h3>
        <p className="text-muted-foreground text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </CardContent>
    </Card>
  </div>
</section>
    </div>
  )
}

 