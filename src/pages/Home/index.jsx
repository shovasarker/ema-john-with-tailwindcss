import React from 'react'
import banner from '../../images/banner.png'

const Home = () => {
  return (
    <main className='container px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24'>
      <div className='flex flex-col-reverse md:flex-row justify-start md:justify-between items-center gap-5 my-10'>
        <div className='w-full md:w-1/2 xl:w-3/5 text-center md:text-left'>
          <p className='text-sm xl:text-lg font-normal text-customOrange-400'>
            Sale up to 70% off
          </p>
          <h1 className='text-4xl xl:text-title font-bold text-customBlue-600 mt-12'>
            New Collection For Fall
          </h1>
          <p className='text-xl xl:text-2xl font-medium text-customBlue-400 mt-2'>
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <button className='px-5 py-2 my-12 uppercase text-lg font-medium rounded-[4px] bg-customOrange-400 text-customBlue-600 border border-customOrange-400 hover:bg-orange-400/10 transition-colors duration-300'>
            Shop Now
          </button>
        </div>
        <div className='w-full md:w-1/2 xl:w-2/5 md:pl-10'>
          <img src={banner} alt='banner' className='w-full aspect-auto' />
        </div>
      </div>
    </main>
  )
}

export default Home
