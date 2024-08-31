import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
import NavItems from './NavItems';

const NavBar = () => {
    return (
        <nav>
            <div className='nav-container flex'>
                <div className='logo-container flex'>
                    <Link to="#">
                        <img src={logo} alt=" " />
                    </Link>
                    <div className='nav-line'></div>
                </div>
                <div className='nav-list-container-lg-screen text-preset-8'>
                    <NavItems />
                </div>

                {/* Hamburger Menu */}
                <div className='hamburger-icon toggle-on'>
                    <img src={hamburger} alt="Hamburger Menu" />
                </div>
                <div className='hamburger-menu-contianer toggle-off'>
                    <div className='close-hamburger-icon'>
                        <img src={closeIcon} alt="Close Hamburger Menu" />
                    </div>
                    <div className='hamburger-nav-list-contianer text-preset-8 flex'>
                        <NavItems />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar