import React, { useContext, useEffect } from 'react'
import ProductsContext from '../../contexts/ProductsContext'
import ProductCard from '../ProductCard'

const Products = () => {
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('products.json')
      const data = await res.json()
      setProducts(data)
    }

    getProducts()
  }, [setProducts])

  return (
    <div className='w-full md:w-[452px] lg:w-[720px] xl:w-[920px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-5 px-4 md:px-0 md:mx-auto py-10'>
      {products.length > 0 &&
        products?.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
    </div>
  )
}

export default Products
