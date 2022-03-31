import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import CartSummary from '../../components/CartSummary'
import Products from '../../components/Products'

const Shop = () => {
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-1 md:grid-cols-[2.8fr_1.2fr] lg:grid-cols-[3fr_1fr] xl:grid-cols-[4fr_1fr] gap-2'>
      <Products />
      <div className='w-full bg-customOrange-200 h-screen sticky top-0'>
        <CartSummary>
          <Button
            handleClick={() => navigate('/orders')}
            bgColor={'bg-customOrange-400'}
          >
            <span>Review Order</span>
            <AiOutlineArrowRight className='text-lg' />
          </Button>
        </CartSummary>
      </div>
    </div>
  )
}

export default Shop
