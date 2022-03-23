import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import CartContext from '../../contexts/CartContext'
import { addToDb } from '../../utilities/fakedb'

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext)
  const { id, img, name, seller, price, ratings } = product

  const handleClick = () => {
    const existProduct = cart?.find((item) => item.id === id)
    const newCart = existProduct
      ? cart?.map((item) =>
          item.id === id
            ? { ...item, quantity: existProduct.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }]

    setCart(newCart)
    addToDb(id)
  }

  return (
    <div className='w-4/5 md:w-full mx-auto md:mx-0 border border-customBlue-50 rounded-lg overflow-hidden flex flex-col justify-start items-start'>
      <div className='px-2 pt-2'>
        <img src={img && img} alt='name' className='w-full rounded-lg' />
      </div>
      <div className='px-3.5 space-y-2 text-customBlue-800'>
        <h6 className='text-xl mt-3'>{name}</h6>
        <p>Price: ${price}</p>
      </div>
      <div className='px-3.5 space-y-2 mt-auto text-xs text-customBlue-400'>
        <p className='mt-2'>Manufacturer: {seller}</p>
        <p>Rating: {ratings}star</p>
      </div>
      <button
        onClick={handleClick}
        className='mt-3 w-full flex justify-center items-center gap-2 py-2 text-customBlue-800 bg-customOrange-200 border border-transparent !border-t-customBlue-50 rounded-b-lg hover:bg-customOrange-400 transition-colors duration-300'
      >
        <span>Add to Cart</span>
        <FaCartPlus className='text-lg' />
      </button>
    </div>
  )
}

export default ProductCard
