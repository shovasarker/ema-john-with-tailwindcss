import React from 'react'
import { VscTrash } from 'react-icons/vsc'

const ReviewItem = ({ product, handleClick }) => {
  const { id, img, name, shipping, price, quantity } = product
  return (
    <div className='w-full flex justify-start items-center gap-4 rounded-md border border-customBlue-50 p-2'>
      <img src={img && img} alt={name} className='w-20 rounded-md' />
      <div className='w-full flex justify-between items-center '>
        <div>
          <h6 className='font-mono text-xl font-medium'>
            {name?.length > 20 ? name.slice(0, 20) + '...' : name}
          </h6>
          <p className='font-mono text-base font-medium'>
            Price: <span className='text-customOrange-400'>${price}</span>
          </p>
          <p className='font-mono text-base font-medium'>
            Shipping Charge:{' '}
            <span className='text-customOrange-400'>${shipping}</span>
          </p>
          <p className='font-mono text-base font-medium'>
            Quantity: <span className='text-customOrange-400'>{quantity}</span>
          </p>
        </div>
        <button
          onClick={() => handleClick(id)}
          className='w-12 h-12 rounded-full border-0 bg-megenda-400/30 text-megenda-400 flex justify-center items-center text-2xl  flex-shrink-0'
        >
          <VscTrash />
        </button>
      </div>
    </div>
  )
}

export default ReviewItem
