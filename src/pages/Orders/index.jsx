import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsCreditCard } from 'react-icons/bs'
import Button from '../../components/Button'
import CartSummary from '../../components/CartSummary'
import ReviewItems from '../../components/ReviewItems'

const Orders = () => {
  const navigate = useNavigate()
  return (
    <section className='container px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24 grid grid-cols-1 md:grid-cols-[1.7fr_1.3fr] lg:grid-cols-[3fr_2fr] gap-5 my-10'>
      <ReviewItems />
      <CartSummary pLarge>
        <Button
          handleClick={() => navigate('/shipment')}
          bgColor={'bg-customOrange-400'}
        >
          <span>Proceed to Shipment</span>
          <BsCreditCard />
        </Button>
      </CartSummary>
    </section>
  )
}

export default Orders
