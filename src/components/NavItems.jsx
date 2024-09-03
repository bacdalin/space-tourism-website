import { NavLink } from 'react-router-dom';

const NavItems = ({onNavItemClick}) => {
  const linkClass = ({ isActive }) => 
    isActive
    ? 'nav-item active-nav-item text-preset-8'
    : 'nav-item';

  return (
    <>
      <span onClick={onNavItemClick}>
        <NavLink to="/" className={linkClass}><strong>00</strong> HOME</NavLink>
      </span>
      <span onClick={onNavItemClick}>
        <NavLink to="/destination" className={linkClass}><strong>01</strong> DESTINATION</NavLink>
      </span>
      <span onClick={onNavItemClick}>
        <NavLink to="#" className={linkClass}><strong>02</strong> CREW</NavLink>
      </span>
      <span onClick={onNavItemClick}>
        <NavLink to="#" className={linkClass}><strong>03</strong> TECHNOLOGY</NavLink>
      </span>
    </>
  )
}

export default NavItems