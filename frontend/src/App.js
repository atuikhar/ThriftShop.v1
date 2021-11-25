import { Routes, Route } from 'react-router-dom'
import HomePage from 'screens/Home/Home'
import ProductDetails from 'screens/ProductDetails/ProductDetails'
import { Layout } from 'layout/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Layout>
  )
}

export default App
