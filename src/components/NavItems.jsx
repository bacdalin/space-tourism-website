import { NavLink } from 'react-router-dom';

const NavItems = ({ onLinkClick, isHamburgerMenu }) => {
  return (
    <>
      <NavLink 
        to="/" 
        onClick={isHamburgerMenu ? onLinkClick : undefined} 
        className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}
      >
        <strong>00</strong> HOME
      </NavLink>

      <NavLink 
        to="/destination" 
        onClick={isHamburgerMenu ? onLinkClick : undefined} 
        className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}
      >
        <strong>01</strong> DESTINATION
      </NavLink>

      <NavLink 
        to="/crew" 
        onClick={isHamburgerMenu ? onLinkClick : undefined} 
        className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}
      >
        <strong>02</strong> CREW
      </NavLink>

      <NavLink 
        to="/technology" 
        onClick={isHamburgerMenu ? onLinkClick : undefined} 
        className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}
      >
        <strong>03</strong> TECHNOLOGY
      </NavLink>
    </>
  );
};

export default NavItems;
