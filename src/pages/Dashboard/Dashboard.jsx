import React from "react";
import "./dashboard.css";
import Lottie from "lottie-react";
import mantenimiento from "./mantenimiento.json";

export default function Dashboard() {
  return (
    <div className="content">
      <h1>Bievenido a BitStore</h1>
      <p>Panel de control administrador</p>
      <div className="manteinance">
        <Lottie className="manteinance" animationData={mantenimiento} />
        <h1>Sitio en mantenimiento...</h1>
      </div>
    </div>
  );
}
