import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cold-3 px-4' >
            <div className='lg:col-span-2 my-4'>
            <h1 className=' md:text-5xl sm:text-4xl text-2xl font-bold py-2'> want to collab with me ? </h1>
                <p>
                    Enter your Email and i will get back to you 
                </p>
            </div>  
            <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Your Email' />
                <button className='bg-[#00df9a] font-medium rounded-md w-[200px] text-[#000000] my-6 ml-4 py-3 px-6'>Notify</button>
            </div>
            <p>Hoping to see from you <span className='text-[#00df9a]'>soon </span> </p>
        </div>
    </div>
  )
}

export default Newsletter