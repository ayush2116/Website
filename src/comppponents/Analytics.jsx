import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
<img className='w-[500px] mx-auto  ' src={Laptop} alt="/"/>
<div className='flex flex-col justify-center'>
    <p className='text-[#00df9a] font-bold'>Drip fashion Wear</p>
    <h1 className=' md :text-4xl sm:text-3xl text-2xl dont-bold py-2'> Shop At Our Store</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non iste vel ducimus sunt! Delectus iste impedit hic rerum rem suscipit?</p>
    <button className='bg-black w-[200px] mx-auto md:mx-0 rounder-md font-medium rounded-md text-[#00df9a] my-6  py-3'  > Get Started</button>
</div>
</div>

    </div>
  )
} 

export default Analytics