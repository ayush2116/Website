import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'> HAUL SHOP</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> DRIP and DAPPPER</h1>
        <div className='flex justify-center items-center '>
            <p className='md:text-5xl sm:text-4xl font-bold text-xl py-4'>We Sell</p>
            <Typed className='pl-2 md:text-5xl sm:text-4xl font-bold text-xl' strings={['Tshirt','Jeans','Overshirts']} typeSpeed={120} backSpeed={130} loop/>       
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'></p>
        <button className='bg-[#00df9a] w-[200px] rounder-md font-medium rounded-md text-black my-6 mx-auto py-3'>Get Started</button>
        </div>
        
    </div>
  )
}

export default Hero