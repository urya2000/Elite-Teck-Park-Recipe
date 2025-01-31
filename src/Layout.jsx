import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./componetns/header/Nav";


//common

const Layout = () => {
  return (
    <>
     
      <Nav />
      <main>
        <Outlet />
      </main>
     
    </>
  );
};

export default Layout;
