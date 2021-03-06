import * as React from 'react'
import { Rating } from 'components/Rating/Rating'
import { Link } from 'react-router-dom'

import { CardImage, Title, Wrapper } from './ProductStyles'

export default function Product({ product }) {
  return (
    <Wrapper>
      <Link to={`/product/${product._id}`} underline="none">
        <CardImage src={product.image} alt={product.name} />
        <Title>{product.name}</Title>
        <Title>&#x20B9; {product.price}</Title>
        <Rating value={product.rating} />
      </Link>
    </Wrapper>
  )
}
