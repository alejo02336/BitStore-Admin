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
        <div>
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

          <h1>Ingresos totales generados: ${totalVentas.toFixed(2)}</h1>
          <h1>Precio promedio de los productos: ${averagePrice.toFixed(2)}</h1>

          <SalesChart topSellingProducts={topSellingProducts} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Income;
