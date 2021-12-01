import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GridContainer } from './HomeStyles'
import Product from 'components/Product/Product'
import { listProducts } from 'actions/productActions'

import Loader from 'components/Loader/Loader'
import Error from 'components/Error/Error'
import { Container } from '@mui/material'

const HomePage = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} type="error" />
      ) : (
        <GridContainer>
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </GridContainer>
      )}
    </Container>
  )
}

export default HomePage
