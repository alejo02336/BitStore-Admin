import React, { useEffect } from "react";

import "./sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const closeSidebar = () => {
    let sidebar = document.getElementById("sidebar");

    sidebar.classList.remove("sidebar_responsive");
  };

  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="assets/logo.png" alt="logo" />
          <h1>BITSTORE</h1>
        </div>
        <i
          onClick={closeSidebar}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <NavLink
          onClick={closeSidebar}
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar__link active_menu_link" : "sidebar__link"
          }
        >
          <i className="fa fa-home"></i>
          Principal
        </NavLink>
        <h2>Modulo de gestión</h2>
        <NavLink
          onClick={closeSidebar}
          to="/products"
          className={({ isActive }) =>
            isActive ? "sidebar__link active_menu_link" : "sidebar__link"
          }
        >
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          Productos
        </NavLink>
        <NavLink
          onClick={closeSidebar}
          to="/carts"
          className={({ isActive }) =>
            isActive ? "sidebar__link active_menu_link" : "sidebar__link"
          }
        >
          <i className="fa fa-building-o"></i>
          Carritos
        </NavLink>
        <NavLink
          to="/income"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive ? "sidebar__link active_menu_link" : "sidebar__link"
          }
        >
          <i className="fa fa-wrench"></i>
          Ingresos
        </NavLink>

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Cerrar sesión</a>
        </div>
      </div>
    </div>
  );
}
