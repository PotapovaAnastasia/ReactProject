import { HeaderStyled } from './header.styled'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-container">
        <div className="logo">PostsGramm</div>
        <div className="header-links">
          <NavLink className="header-link" to="/about">About us</NavLink>
          <NavLink className="header-link" to="/account">Account</NavLink>
          <NavLink className="header-link" to="/posts">Posts</NavLink>
          <NavLink className="header-link" to="/">Sign up</NavLink>
        </div>
      </div>   
    </HeaderStyled>
  )
}
