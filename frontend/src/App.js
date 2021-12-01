import { Routes, Route } from 'react-router-dom'
import HomePage from 'screens/Home/Home'
import ProductDetail from 'screens/ProductDetail/ProductDetail'
import CartScreen from 'screens/CartScreen/CartScreen'
import { Layout } from 'layout/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart/:id" element={<CartScreen />} />
      </Routes>
    </Layout>
  )
}

export default App
