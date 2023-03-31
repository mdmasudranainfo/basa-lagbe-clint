import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Nav from "../../component/nav/Nav";

function MainLayout() {
  return (
    <div>
      <Nav />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
