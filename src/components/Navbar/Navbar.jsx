import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav_icon" onclick="toggleSidebar()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div class="navbar__left">
        <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a class="active_link" href="#">
          Admin
        </a>
      </div>
      <div class="navbar__right">
        <a href="#">
          <img width="30" src="assets/avatar.svg" alt="" />
        </a>
      </div>
    </nav>
  );
}
