import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from "./HeaderElems"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { useToken } from '../../context/AccessTokenProvider'


import Sidebar from '../Sidebar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {token, setToken} = useToken()

  /* TODO: Create a logout function that clears the cookie */

  return (
    <>
    <Nav>
      <NavContainer>
        <NavLogo to='/'>FavourHood</NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(prev => !prev)}/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/favours'>Favours</NavLink>
          </NavItem>
          {!token ?
          <>
            <NavItem>
              <NavLink to='signup'>Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='login'>Login</NavLink>
            </NavItem>
          </>
            :
            <NavItem>
              <NavLink onClick={() => setToken("")} to='#'>Logout</NavLink>
            </NavItem>
          }
        </NavMenu>
      </NavContainer>
    </Nav>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Header
