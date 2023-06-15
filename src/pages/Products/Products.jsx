import React, { useEffect, useState } from "react";
import { getAll } from "../../services/methods";
import { endpoints } from "../../services";
import Loader from "../../components/Loader";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAll(endpoints.products.getAllProducts).then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="content">{products ? <h1>Products</h1> : <Loader />}</div>
  );
}

export default Products;
