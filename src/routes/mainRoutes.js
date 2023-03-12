import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import AddHome from "../component/Dashbord/AddHome";
import AllHome from "../component/Dashbord/AllHome";
import AllSeller from "../component/Dashbord/AllSeller";

import AllUser from "../component/Dashbord/AllUser";
import BookingForSeller from "../component/Dashbord/BookingForSeller";
import MyBookingUser from "../component/Dashbord/MyBookingUser";
import PendingSeller from "../component/Dashbord/PendingSeller";
import Status from "../component/Dashbord/Status";
import EachHomeDetails from "../component/OurCategory/SingleCategories/EachHomeDetails";
import SingleCategories from "../component/OurCategory/SingleCategories/SingleCategories";
import DashbordLayout from "../layout/DashbordLayout";
import SignUp from "../page/login/SignUp";
import SellerRequest from "../page/Seller/SellerRequest/SellerRequest";
import Login from "./../page/login/Login";
import AdminRoute from "./AdminRoute/AdminRoute";
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
        //   fetch(`http://localhost:5000/homes/${params.category}`),
      },
      {
        path: "/homedetails/:id",
        element: <EachHomeDetails></EachHomeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
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
        path: "/dashbord/mybookinguser",
        element: <MyBookingUser />,
      },
      {
        path: "/dashbord/allhome",
        element: (
          <AdminRoute>
            {" "}
            <AllHome />
          </AdminRoute>
        ),
      },
      {
        path: "/dashbord/users",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashbord/sellers",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },

      {
        path: "/dashbord/sellerrequest",
        element: (
          <AdminRoute>
            <PendingSeller></PendingSeller>
          </AdminRoute>
        ),
      },

      {
        path: "/dashbord/bookingforSeller",
        element: <BookingForSeller></BookingForSeller>,
      },
    ],
  },
]);

export default routes;
