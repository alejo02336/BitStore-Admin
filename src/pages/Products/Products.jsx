import React, { useEffect, useState } from "react";
import { getAll } from "../../services/methods";
import { endpoints } from "../../services";
import Loader from "../../components/Loader";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/bootstrap.css";
import { useRenderItem } from "../../hooks/useRenderItem";
import ProductCard from "../../components/Products/ProductCard";
import SearchInput from "../../components/SearchInput/SearchInput";

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

          <div className="productsCards_container">
            <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />

            {renderItems(ProductCard).map((item) => item)}

            <ResponsivePagination
              className="pagination"
              current={currentPage}
              total={Math.ceil(filteredItems.length / itemsPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Products;
