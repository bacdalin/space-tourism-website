import { Link } from 'react-router-dom';

const NavItems = () => {
  return (
    <>
        <Link to="#" className='nav-item'><strong>00</strong> HOME</Link>
        <Link to="#" className='nav-item'><strong>01</strong> DESTINATION</Link>
        <Link to="#" className='nav-item'><strong>02</strong> CREW</Link>
        <Link to="#" className='nav-item'><strong>03</strong> TECHNOLOGY</Link>
    </>
  )
}

export default NavItems