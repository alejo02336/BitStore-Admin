import React from "react";
import "./loader.css";
import Lottie from "lottie-react";
import loading from "./loading.json";

function Loader() {
  return (
    <div className="center">
      <Lottie animationData={loading} />
      <h1>Cargando...</h1>
    </div>
  );
}

export default Loader;
