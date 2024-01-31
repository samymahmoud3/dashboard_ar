import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import SideNavbar from "./components/sideNavbar/SideNavbar";
import Bookings from "./pages/bookings/Bookings";
import Users from "./pages/users/Users";
import Drivers from "./pages/drivers/Drivers";
import TravelPartners from "./pages/travelPartners/TravelPartners";
import Blogs from "./pages/blogs/Blogs";
import Packages from "./pages/packages/Packages";
import PackagesControl from "./pages/packagesControl/PackagesControl";
import Landmarks from "./pages/landmarks/Landmarks";
import LandmarksControl from "./pages/landmarksControl/LandmarksControl";
import Hotels from "./pages/hotels/Hotels";
import Rewards from "./pages/rewards/Rewards";
import Settings from "./pages/settings/Settings";
import './styles/global.scss';

function App() {
  const Layout = () => {
    return (
      <div className='main'>
          <div className='sideNavContainer'>
            <SideNavbar />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
      </div>
    )
  }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/bookings',
        element: <Bookings />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/drivers',
        element: <Drivers />
      },
      {
        path: '/travel-partners',
        element: <TravelPartners />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/packages',
        element: <Packages />
      },
      {
        path: '/packages-control',
        element: <PackagesControl />
      },
      {
        path: '/landmarks',
        element: <Landmarks />
      },
      {
        path: '/landmarks-control',
        element: <LandmarksControl />
      },
      {
        path: '/hotels',
        element: <Hotels />
      },
      {
        path: '/rewards',
        element: <Rewards />
      },
      {
        path: '/settings',
        element: <Settings />
      },
    ]
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
