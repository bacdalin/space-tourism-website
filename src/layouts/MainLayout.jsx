import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
const MainLayout = () => {
  return (
    <div className='wrapper'>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default MainLayout