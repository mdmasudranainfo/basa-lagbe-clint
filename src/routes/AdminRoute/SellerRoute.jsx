import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import useSeller from "../../component/Hooka/UseSeller";
import { AuthContext } from "../../Context/UserContext";

const SellerRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loader || isSellerLoading) {
    return <p>Loading.....</p>;
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
