import React from "react";
import "../Products/productCard.css";

function CartCard({ item: product = {}, index, navigate }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Formato deseado: DD/MM/AAAA
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return formattedDate;
  };

  const sum = product.products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <div key={index} className="cartItem_container">
      <div className="cart_info">
        <div>
          <p className="cart_category">
            Fecha del Carrito: {formatDate(product.date)}
          </p>
          <p className="cart_title">ID del usuario: {product.userId}</p>
          <p className="cart_title">
            Grupos de productos: {product.products.length}
          </p>
        </div>
      </div>

      <div className="cart_total">
        <p className="cart_total_price">Total de productos: {sum}</p>
      </div>
    </div>
  );
}

export default CartCard;
