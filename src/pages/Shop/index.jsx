import React from 'react'
import CartSummary from '../../components/CartSummary'
import Products from '../../components/Products'

const Shop = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[2.8fr_1.2fr] lg:grid-cols-[3fr_1fr] xl:grid-cols-[4fr_1fr] gap-2'>
      <Products />
      <div className='w-full bg-customOrange-200 h-screen sticky top-0'>
        <CartSummary />
      </div>
    </div>
  )
}

export default Shop
