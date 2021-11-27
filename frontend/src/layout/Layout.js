// import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { LayoutWrapper } from './LayoutStyles'
import Footer from 'components/Footer/Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  )
}
