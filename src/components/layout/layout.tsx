import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import { LayoutStyled } from './layout.styled'

export const Layout = () => {
  return (
      <LayoutStyled>
        <div>
          <Header />
          <Outlet/>
        </div>
        <Footer/>
      </LayoutStyled>
    )
}
