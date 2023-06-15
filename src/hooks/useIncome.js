import { useState, useEffect } from "react";
import { getAll } from "../services/methods";
import { endpoints } from "../services";

const useIncome = () => {
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [totalVentas, setTotalVentas] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    getAll(endpoints.products.getAllProducts)
      .then((res) => {
        getAll(endpoints.carts.getAllCarts).then((res2) => {
          const { topSellingProducts, totalVentas, averagePrice } =
            getTopSellingProducts(res, res2);

          setTopSellingProducts(topSellingProducts);
          setTotalVentas(totalVentas);
          setAveragePrice(averagePrice);
        });

        console.log(topSellingProducts);
        console.log("Total de ventas:", totalVentas);
        console.log("averagePrice:", averagePrice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getTopSellingProducts(productos, pedidos) {
    const topSellingProducts = {};
    let totalVentas = 0;
    let totalProductos = 0;

    for (const pedido of pedidos) {
      for (const item of pedido.products) {
        const producto = productos.find((p) => p.id === item.productId);

        if (producto) {
          if (topSellingProducts[producto.id]) {
            topSellingProducts[producto.id].quantity += item.quantity;
            topSellingProducts[producto.id].total +=
              item.quantity * producto.price;
          } else {
            topSellingProducts[producto.id] = {
              quantity: item.quantity,
              total: item.quantity * producto.price,
            };
          }

          totalVentas += item.quantity * producto.price;
          totalProductos += item.quantity;
        }
      }
    }

    const averagePrice = calculateAveragePrice(productos);

    const productsInfo = Object.keys(topSellingProducts).map((productId) => {
      const producto = productos.find((p) => p.id === parseInt(productId));
      const { quantity, total } = topSellingProducts[productId];

      return {
        id: producto.id,
        title: producto.title,
        price: producto.price,
        image: producto.image,
        quantity,
        total,
      };
    });

    return {
      topSellingProducts: productsInfo,
      totalVentas,
      averagePrice,
    };
  }

  function calculateAveragePrice(productos) {
    const totalProducts = productos.length;
    let sum = 0;

    for (const producto of productos) {
      sum += producto.price;
    }

    return totalProducts > 0 ? sum / totalProducts : 0;
  }

  return {
    topSellingProducts,
    totalVentas,
    averagePrice,
  };
};

export { useIncome };
