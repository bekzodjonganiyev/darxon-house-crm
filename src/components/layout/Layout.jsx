import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

import "./Layout.css";

const Layout = () => {
  return (
    <section>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
