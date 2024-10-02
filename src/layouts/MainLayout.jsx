import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
const MainLayout = () => {
  // Get the current location and add different class name to the body based on the location pathname in order to add different bg img to each page
  const location = useLocation(); 
  useEffect(() => {
    if (location.pathname === '/') {
      document.body.className = 'home-bg';
    } else if (location.pathname.includes('/destination')) {
      document.body.className = 'destination-bg';
    } else if (location.pathname.includes('/crew')) {
      document.body.className = 'crew-bg';
    } else {
      document.body.className = 'technology-bg';
    }

    // Cleanup function: remove the class on unmount or route change to avoid having multiple class names at once
    return () => {
      document.body.className = '';
    };
  }, [location.pathname]);

  return (
    <div className='wrapper'>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default MainLayout