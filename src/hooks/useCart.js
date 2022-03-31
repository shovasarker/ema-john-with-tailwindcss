import { useContext, useEffect } from 'react'
import CartContext from '../contexts/CartContext'
import ProductsContext from '../contexts/ProductsContext'
import { getShoppingdCart } from '../utilities/fakedb'

const useCart = () => {
  const { products } = useContext(ProductsContext)
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    if (products?.length < 1) return
    const storedCart = getShoppingdCart()
    setCart(
      Object.entries(storedCart)?.map(([id, quantity]) => {
        const found = products?.find((item) => item.id === id)
        return found
          ? {
              ...found,
              quantity: quantity,
            }
          : {}
      })
    )
  }, [products, setCart])

  return [cart, setCart]
}

export default useCart
