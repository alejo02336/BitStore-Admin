import React, { useEffect, useState } from "react";
import { getAll } from "../../services/methods";
import { endpoints } from "../../services";
import Loader from "../../components/Loader";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/bootstrap.css";
import { useRenderItem } from "../../hooks/useRenderItem";
import ProductCard from "../../components/Products/ProductCard";

function Products() {
  const {
    renderItems,
    items,
    filteredItems,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    searchTerm,
    handleSearch,
    setItems,
  } = useRenderItem();

  useEffect(() => {
    getAll(endpoints.products.getAllProducts).then((res) => {
      setItems(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="content">
      {items ? (
        <div>
          <h1>Productos totales en la tienda : {items.length}</h1>
          <h1>Lista de productos:</h1>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {renderItems(ProductCard).map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}

          <ResponsivePagination
            current={currentPage}
            total={filteredItems.length / itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Products;
