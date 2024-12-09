import React from 'react'
import Image from 'next/image'
const Hero7 = () => {
  return (
    <div>
        {/* letaest updte */}
<div className="relative">
  <Image
    src="/poster.png"
    alt="update"
    width={1930}
    height={462}
    className="w-full"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center">
    <h3 className="text-4xl text-[#151875] font-extrabold mb-4">
    Get Leatest Update By Subscribe
    0ur Newslater
    </h3>
    <button className="px-6 py-3 bg-[#FB2E86] text-white rounded-lg hover:bg-[#FB2f98]">
      Shop Now
    </button>
  </div>
</div>
<div className="flex justify-center items-center py-24">
  <Image
  src="/logolist.png"
  width={904}
  height={93}
  alt="logoos"
  />
</div>
    </div>
  )
}

export default Hero7