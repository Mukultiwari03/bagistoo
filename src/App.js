
import './App.css';
import Nav from "./components/Nav"
import Footer from './components/Footer.jsx';
import { Outlet} from "react-router-dom";
import Landingpage from './components/Landingpage.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Admin from './components/adminpage/Admin.jsx';
function App() {

  const Layout = ()=>{
    return(
      <div>
        <div></div>
        <Nav/>
        <Outlet></Outlet>
        <Footer/>
      </div>
      
    )
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children: [
        {
          path:'/',
          element:<Landingpage />
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
      path:'/adminpanel',
      element: <Admin/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
