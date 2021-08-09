import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink} from './SidebarElems'
const Sidebar = ({isOpen, setIsOpen}) => {
  return <SidebarContainer isOpen={isOpen}>
    <Icon>
      <CloseIcon onClick={() => setIsOpen(prev => !prev)}/>
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink onClick={() => setIsOpen(prev => !prev)} to='about'>About</SidebarLink>
        <SidebarLink onClick={() => setIsOpen(prev => !prev)} to='services'>Services</SidebarLink>
        <SidebarLink onClick={() => setIsOpen(prev => !prev)} to='signup'>Get Started</SidebarLink>
      </SidebarMenu>
    </SidebarWrapper>
  </SidebarContainer>
}

export default Sidebar;