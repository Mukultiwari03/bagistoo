import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import Landingpage from "./components/Landingpage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./components/adminpage/Loginpage.jsx";
import { Link } from "react-router-dom";
import Admin from "./components/adminpage/Admin";
import Main from "./components/adminpage/Main";
import Customers from "./components/adminpage/Customers";
function App() {
  const Layout = () => {
    return (
      <div className="overflow-hidden">
        <div className="bg-blue-950 text-white p-2 flex justify-between max-w-full items-center ps-3 pe-3">
          <div>
            <span className=" font-bold">Bagisto</span> Admin
          </div>
          <div className="underline">
            <Link to="/Loginpage">Admin Panel</Link>
          </div>
        </div>
        <Nav />
        <Outlet></Outlet>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landingpage />,
        },
        // {
        //   path:'/men',
        //   element:<Men/>
        // },
        // {
        //   path:'/women',
        //   element:<Women />
        // },
      ],
    },
    {
      path: "/Admin",
      element: <Admin />,
      children: [
        {
          path: "/Admin/",
          element: <Main />,
        },
        {
          path: "/Admin/Customers",
          element: <Customers />,
        },
      ],
    },
    {
      path: "/Loginpage",
      element: <Loginpage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
