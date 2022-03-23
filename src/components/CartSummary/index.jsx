import React, { useContext, useEffect } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from '../Button'
import CartContext from '../../contexts/CartContext'
import ProductsContext from '../../contexts/ProductsContext'
import { deleteShoppingCart, getShoppingdCart } from '../../utilities/fakedb'

const CartSummary = () => {
  const { cart, setCart } = useContext(CartContext)
  const { products } = useContext(ProductsContext)
  useEffect(() => {
    const storedCart = getShoppingdCart()
    const newCart = Object.entries(storedCart)?.map(([id, quantity]) => {
      return {
        ...products?.find((product) => product.id === id),
        quantity: quantity,
      }
    })
    setCart(newCart)
  }, [products, setCart])

  const clearCart = () => {
    deleteShoppingCart()
    setCart([])
  }

  //Calculating Different values from cart Array
  const totalQuantity = cart?.reduce(
    (totalQuantity, { quantity }) => (totalQuantity += quantity),
    0
  )
  const totalShipping = cart?.reduce(
    (totalShipping, { shipping }) => (totalShipping += shipping),
    0
  )
  const totalPrice = cart?.reduce(
    (totalPrice, { quantity, price }) => (totalPrice += quantity * price),
    0
  )
  const tax = (totalPrice / 10)?.toFixed(2)
  const grandTotal = totalPrice + totalShipping + parseFloat(tax)
  return (
    <div className='py-5 px-4 md:px-2 xl:px-4 space-y-4 text-customBlue-400 bg-customOrange-200'>
      <h2 className='text-xl lg:text-2xl font-bold text-center text-customBlue-600 mb-8'>
        Order Summary
      </h2>
      <p>Selected Items: {totalQuantity ? totalQuantity : 0}</p>
      <p>Total Price: ${totalPrice ? totalPrice?.toLocaleString('en') : 0}</p>
      <p>Total Shipping Charge: ${totalShipping ? totalShipping : 0}</p>
      <p>Tax: ${tax ? tax : 0}</p>
      <p className='text-xl font-bold text-customBlue-600 !mt-5 !mb-12'>
        Grand Total: ${grandTotal ? grandTotal?.toFixed(2) : 0.0}
      </p>
      <Button handleClick={clearCart} bgColor={'bg-megenda-400'}>
        <span>Clear Cart</span>
        <RiDeleteBinLine className='text-lg' />
      </Button>
      <Button bgColor={'bg-customOrange-400'}>
        <span>Review Order</span>
        <AiOutlineArrowRight className='text-lg' />
      </Button>
    </div>
  )
}

export default CartSummary
