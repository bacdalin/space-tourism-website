import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
import NavItems from './NavItems';
import { useEffect, useState } from 'react';

const NavBar = () => {
    // Toggle on and off the hamburger menu
    const [isToggled, setIsToggled] = useState(false); //Track if the hamburger menu is toggled

    const hamburgerToggleHandler = () => {
        setIsToggled(prevState => !prevState);
    };

    // Close the menu when Escape key is pressed
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isToggled) {
                setIsToggled(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isToggled])

    return (
        <nav>
            <div className='nav-container d-flex'>
                <div className='logo-container d-flex'>
                    <Link to="#">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className='nav-line'></div>
                </div>
                <div className='nav-list-container-lg-screen text-preset-8'>
                    <NavItems />
                </div>

                {/* Hamburger Menu */}
                <button 
                    className='hamburger-icon' 
                    aria-expanded={isToggled}
                    onClick={hamburgerToggleHandler}
                >
                    <img src={isToggled ? closeIcon : hamburger} alt={isToggled ? 'Close Menu' : 'Open Menu'} />
                </button>
                {/* Give the hamburger menu container the class 'open' when it is open */}
                <div className={`d-flex hamburger-menu-container ${isToggled ? 'open' : ''}`}>
                    <div className='hamburger-nav-list-container text-preset-8 d-flex'>
                        {/* Pass the function as a prop to NavItems so the menu can close when user clicks on a nav item */}
                        <NavItems onLinkClick={hamburgerToggleHandler} isHamburgerMenu={true} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar