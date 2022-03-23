import React from 'react'
import Products from '../../components/Products'

const Shop = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[2.8fr_1.2fr] lg:grid-cols-[3fr_1fr] xl:grid-cols-[4fr-1fr] gap-2'>
      <Products />
      <div className='w-full bg-customOrange-400 h-screen'></div>
    </div>
  )
}

export default Shop
