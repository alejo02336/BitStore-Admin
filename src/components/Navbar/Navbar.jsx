import React from "react";
import "./navbar.css";

export default function Navbar() {
  const toggleSidebar = () => {
    let sidebar = document.getElementById("sidebar");

    sidebar.classList.add("sidebar_responsive");
  };
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={toggleSidebar}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <p>Danny Alejandro Martínez Duque - Bootcamp BIT</p>
      </div>
      <div className="navbar__right">
        <img className="img_nav" width="30px" src="assets/photo.png" alt="" />
      </div>
    </nav>
  );
}
