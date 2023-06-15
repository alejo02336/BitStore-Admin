import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />

      <Dashboard />
    </div>
  );
}
