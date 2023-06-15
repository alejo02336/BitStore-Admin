import React, { useEffect } from "react";
import { getAll } from "../../services/methods";
import { endpoints } from "../../services";
import SearchInput from "../../components/SearchInput/SearchInput";
import ResponsivePagination from "react-responsive-pagination";
import CartCard from "../../components/Cart/CartCard";
import { useRenderItem } from "../../hooks/useRenderItem";
import Loader from "../../components/Loader";

function Carts() {
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
    getAll(endpoints.carts.getAllCarts).then((res) => {
      setItems(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="content">
      {items ? (
        <div>
          <h1>Total de carritos en la tienda: {items.length}</h1>

          <div className="productsCards_container">
            <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />

            {renderItems(CartCard).map((item) => item)}

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

export default Carts;
