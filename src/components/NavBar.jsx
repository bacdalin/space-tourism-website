// import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const NavBar = () => {
  return (
    <nav>
        <div className='nav-container'>
            <div className='logo-container'>
                <Link to="#">
                    <img src={logo} alt=" " />
                </Link>
                <div className='nav-line'></div>
            </div>
            <div className='nav-list-container'>
                <Link to="#" className='text-preset-8 nav-item'><strong>00</strong> HOME</Link>
                <Link to="#" className='text-preset-8 nav-item'><strong>01</strong> DESTINATION</Link>
                <Link to="#" className='text-preset-8 nav-item'><strong>02</strong> CREW</Link>
                <Link to="#" className='text-preset-8 nav-item'><strong>03</strong> TECHNOLOGY</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar