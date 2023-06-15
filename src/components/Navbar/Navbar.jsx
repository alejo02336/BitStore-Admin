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
        <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <img width="30px" src="assets/user.jpg" alt="" />
        </a>
      </div>
    </nav>
  );
}
