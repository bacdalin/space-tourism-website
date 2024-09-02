import { NavLink } from 'react-router-dom';

const NavItems = () => {
  const linkClass = ({ isActive }) => 
    isActive
    ? 'nav-item active-nav-item text-preset-8'
    : 'nav-item';

  return (
    <>
        <NavLink to="/" className={linkClass}><strong>00</strong> HOME</NavLink>
        <NavLink to="/destination" className={linkClass}><strong>01</strong> DESTINATION</NavLink>
        <NavLink to="#" className={linkClass}><strong>02</strong> CREW</NavLink>
        <NavLink to="#" className={linkClass}><strong>03</strong> TECHNOLOGY</NavLink>
    </>
  )
}

export default NavItems