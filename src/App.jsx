import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DestinationPage, { destinationLoader } from './pages/DestinationPage';
import CrewPage, { crewLoader } from './pages/CrewPage';
import TechnologyPage, { technologyLoader } from './pages/TechnologyPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />

    {/* Redirect to '/destination/Moon' by default when visiting '/destination' */}
    <Route path='/destination' element={< Navigate to='/destination/Moon' />} />
    {/* Dynamic route for destination based on destination name using React router's data loader */}
    <Route path='/destination/:name' element={< DestinationPage />} loader={destinationLoader} />

    <Route path='/crew' element={< Navigate to='/crew/douglas-hurley' />} />
    <Route path='/crew/:name' element={< CrewPage />} loader={crewLoader} />

    <Route path='/technology' element={< Navigate to='/technology/launch-vehicle' />} />
    <Route path='/technology/:name' element={< TechnologyPage />} loader={technologyLoader} />
  </Route>
)
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
