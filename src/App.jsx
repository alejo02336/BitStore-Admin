import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";
import Income from "./pages/Income/Income";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
