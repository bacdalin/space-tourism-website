import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DestinationPage, { dataLoader } from './pages/DestinationPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    {/* Redirect to '/destination/Moon' by default when visiting '/destination' */}
    <Route path='/destination' element={< Navigate to='/destination/Moon' />} />
    {/* Dynamic route for destination based on destination name using React router's data loader */}
    <Route path='/destination/:name' element={< DestinationPage />} loader={dataLoader} />
  </Route>
)
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
