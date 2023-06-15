import React from "react";
import Swal from "sweetalert2";

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
          <img src="assets/bit.png" alt="logo" />
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
        <h2>Modulo de gestión</h2>
        <NavLink
          onClick={closeSidebar}
          to="/BitStore-Admin/"
          className={({ isActive }) =>
            isActive ? "sidebar__link active_menu_link" : "sidebar__link"
          }
        >
          <i className="fa fa-archive" aria-hidden="true"></i>
          Productos
        </NavLink>
        <NavLink
          onClick={closeSidebar}
          to="/BitStore-Admin/carts"
          className={({ isActive }) =>
            isActive ? "sidebar__link active_menu_link" : "sidebar__link"
          }
        >
          <i className="fa fa-shopping-cart"></i>
          Carritos
        </NavLink>
        <NavLink
          to="/BitStore-Admin/income"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive ? "sidebar__link active_menu_link" : "sidebar__link"
          }
        >
          <i className="fa fa-money"></i>
          Ingresos
        </NavLink>

        <div
          onClick={() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Funcionalidad no disponible",
            });
          }}
          className="sidebar__logout"
        >
          <i className="fa fa-power-off"></i>
          <a href="#">Cerrar sesión</a>
        </div>
      </div>
    </div>
  );
}
