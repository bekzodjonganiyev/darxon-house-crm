import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import "./Layout.css";

const Layout = () => {
  return (
    <section>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Header />
        <div className="main-app">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Layout;
