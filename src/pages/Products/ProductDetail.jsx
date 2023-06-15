import React from "react";
import { useLocation } from "react-router-dom";
import "./productDetail.css";
import Swal from "sweetalert2";

function ProductDetail() {
  const { state } = useLocation();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="detail_container content">
      <img className="detail_img" src={state.product.image} alt="" />

      <div className="detail_info">
        <p className="detail_category">{state.product.category}</p>
        <p className="detail_title">{state.product.title}</p>
        <p className="detail_rating">Rating: {state.product.rating.rate}</p>
        <p className="detail_price">$ {state.product.price}</p>
        <p className="detail_description">{state.product.description}</p>

        <div className="detail_buttons">
          <button
            onClick={() => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Funcionalidad no disponible",
              });
            }}
            className="add_cart"
          >
            Add to cart
          </button>
          <button onClick={handleGoBack} className="go_cart add_cart">
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
