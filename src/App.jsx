import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";
import Income from "./pages/Income/Income";
import ProductDetail from "./pages/Products/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/BitStore-Admin" element={<Dashboard />} />
          <Route path="/BitStore-Admin/products" element={<Products />} />
          <Route path="/BitStore-Admin/carts" element={<Carts />} />
          <Route path="/BitStore-Admin/income" element={<Income />} />
          <Route
            path="/BitStore-Admin/productDetail/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
