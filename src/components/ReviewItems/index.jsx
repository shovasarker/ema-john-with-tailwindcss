import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { removeFromDb } from '../../utilities/fakedb'
import ReviewItem from '../ReviewItem'

const ReviewItems = () => {
  const { cart, setCart } = useContext(CartContext)
  const removeItem = (id) => {
    setCart(cart?.filter((item) => item.id !== id))
    removeFromDb(id)
  }
  return (
    <div className='flex flex-col justify-start items-start gap-4'>
      {cart?.length > 0 ? (
        cart?.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleClick={removeItem}
          />
        ))
      ) : (
        <h2 className='w-full mt-48 font-mono text-xl font-medium text-center'>
          No items on the Cart
        </h2>
      )}
    </div>
  )
}

export default ReviewItems
