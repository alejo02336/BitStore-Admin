import React from "react";
import "./productCard.css";

function ProductCard({ item: product, index, navigate }) {
  const handleProductClick = () => {
    navigate(`/BitStore-Admin/productDetail/${product.id}`, {
      state: {
        product,
      },
    });
  };

  return (
    <div
      key={index}
      onClick={handleProductClick}
      className="cartItem_container"
    >
      <div className="cart_info">
        <img className="cart_img" src={product.image} alt="" />
        <div>
          <p className="cart_category">{product.category}</p>
          <p className="cart_title">{product.title}</p>
          <p className="cart_rating">Rating: {product.rating.rate} ⭐</p>
          <p className="cart_price">$ {product.price}</p>
        </div>
      </div>

      <div className="cart_total">
        <p className="cart_total_price">$ {product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
