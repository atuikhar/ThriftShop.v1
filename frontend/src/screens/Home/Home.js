import React, { useState, useEffect } from 'react'
import { GridContainer } from './HomeStyles'
import Product from 'components/Product/Product'
import axios from 'axios'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <GridContainer>
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </GridContainer>
  )
}

export default HomePage
