import products from '../../data'
import { GridContainer } from './HomeStyles'
import Product from 'components/Product/Product'

const HomePage = () => {
  return (
    <GridContainer>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </GridContainer>
  )
}

export default HomePage
