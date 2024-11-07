import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen">
    <div className="flex h[80%]">
    <div className="w-1/2 flex flex-col justify-center items-start m-5">
      <h1 className="text-[40px] w-[496px] font-librabodoni  mt-[3l6px] ml-44 ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      <p className='text-2xl mt-2 ml-44 w-[600px] text-[rgb(120,112,84)]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
      <button className='text-3xl bg-[#A29875] w-72 h-14 mt-7 rounded-[10px] ml-44 gap-[10px] text-white'>Explore Now</button>
    </div>
    <div className="w-1/2 flex mt-[80px] ml-24 justify-center items-center">
      <Image src="/Images/figma.png" alt="pic" width={462} height={647} />
    
    </div>
   </div>
   </div>
  )
}

export default Hero
