import React from 'react'
import Image from 'next/image'

const Logos = () => {
  return (
    <div>
         <div className="justify-center items-center py-24 hidden md:flex sm:hidden lg:flex">
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

export default Logos