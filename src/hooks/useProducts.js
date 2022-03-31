import { useContext, useEffect } from 'react'
import ProductsContext from '../contexts/ProductsContext'

const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('products.json')
      const data = await res.json()

      setProducts(data)
    }
    getProducts()
  }, [setProducts])

  return [products, setProducts]
}

export default useProducts
