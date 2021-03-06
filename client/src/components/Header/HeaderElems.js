import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: #000;
  height: 10vh;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  @media screen and (max-width: 868px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 10vh;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover, &:active {
    background: #E78816;
  }
`