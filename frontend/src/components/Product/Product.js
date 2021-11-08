import * as React from 'react'
import { Rating } from 'components/Rating/Rating'
import Link from '@mui/material/Link'

import { CardImage, Title, Wrapper } from './ProductStyles'

export default function Product({ product }) {
  return (
    <Wrapper>
      <Link href={`/products/${product._id}`} underline="none">
        <CardImage src={product.image} alt={product.name} />
        <Title>{product.name}</Title>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Link>
    </Wrapper>
  )
}
