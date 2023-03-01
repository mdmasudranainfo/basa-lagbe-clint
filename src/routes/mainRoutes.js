import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import AddHome from "../component/Dashbord/AddHome";
import AllHome from "../component/Dashbord/AllHome";
import AllSeller from "../component/Dashbord/AllSeller";

import AllUser from "../component/Dashbord/AllUser";
import BookingForSeller from "../component/Dashbord/BookingForSeller";
import PendingSeller from "../component/Dashbord/PendingSeller";
import Status from "../component/Dashbord/Status";
import EachHomeDetails from "../component/OurCategory/SingleCategories/EachHomeDetails";
import SingleCategories from "../component/OurCategory/SingleCategories/SingleCategories";
import DashbordLayout from "../layout/DashbordLayout";
import SignUp from "../page/login/SignUp";
import SellerRequest from "../page/Seller/SellerRequest/SellerRequest";
import Login from "./../page/login/Login";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layout/main/MainLayout");
const { default: Home } = require("../page/home/Home");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contactus",
        element: <Contact></Contact>,
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/requestseller",
        element: (
          <PrivateRoute>
            <SellerRequest></SellerRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/homes/:category",
        element: <SingleCategories></SingleCategories>,
        // loader: ({ params }) =>
        //   fetch(` http://localhost:5000/homes/${params.category}`),
      },
      {
        path: "/homedetails/:id",
        element: <EachHomeDetails></EachHomeDetails>,
        loader: ({ params }) =>
          fetch(` http://localhost:5000/details/${params.id}`),
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivateRoute>
        <DashbordLayout></DashbordLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashbord/",
        element: <Status />,
      },
      {
        path: "/dashbord/addhome",
        element: <AddHome></AddHome>,
      },
      {
        path: "/dashbord/allhome",
        element: <AllHome />,
      },
      {
        path: "/dashbord/users",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashbord/sellers",
        element: <AllSeller></AllSeller>,
      },

      {
        path: "/dashbord/sellerrequest",
        element: <PendingSeller></PendingSeller>,
      },

      {
        path: "/dashbord/bookingforSeller",
        element: <BookingForSeller></BookingForSeller>,
      },
    ],
  },
]);

export default routes;
