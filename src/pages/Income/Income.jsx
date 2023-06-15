import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./income.css";

import { useIncome } from "../../hooks/useIncome";
import SalesChart from "../../components/Chart/SalesChart";
import Loader from "../../components/Loader";

function Income() {
  const { topSellingProducts, totalVentas, averagePrice } = useIncome();

  return (
    <div className="content">
      {topSellingProducts.length > 0 ? (
        <div className="selling_container">
          <h1 className="section-title">Productos más vendidos</h1>
          <Carousel
            showArrows={true}
            showStatus={true}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={false}
            interval={3000}
            stopOnHover={true}
            emulateTouch={true}
            className="carousel"
          >
            {topSellingProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <p className="product-quantity">
                    Cantidad vendida (Todos los carritos): {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>

          <div className="info-container">
            <div className="info-card">
              <h2 className="info-title">Ingresos totales generados</h2>
              <p className="info-value">${totalVentas.toFixed(2)}</p>
            </div>
            <div className="info-card">
              <h2 className="info-title">Precio promedio de los productos</h2>
              <p className="info-value">${averagePrice.toFixed(2)}</p>
            </div>
          </div>

          <SalesChart topSellingProducts={topSellingProducts} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Income;
