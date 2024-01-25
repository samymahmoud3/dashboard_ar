import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import SideNavbar from "./components/sideNavbar/SideNavbar";
import Bookings from "./pages/bookings/Bookings";
import './styles/global.scss';
import Users from "./pages/users/Users";

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
    ]
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
