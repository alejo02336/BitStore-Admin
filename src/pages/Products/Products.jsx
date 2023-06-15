import React, { useEffect, useState } from "react";
import { getAll } from "../../services/methods";
import { endpoints } from "../../services";
import Loader from "../../components/Loader";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/bootstrap.css";

function Products() {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAll(endpoints.products.getAllProducts).then((res) => {
      setProducts(res);
      console.log(res);
    });
  }, []);

  const itemsPerPage = 5;

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredItems = products.filter((item) => {
      const itemName = `Elemento ${item.title}`;
      return itemName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const itemsToRender = filteredItems
      .slice(startIndex, endIndex)
      .map((item, index) => <h1 key={index}> {item.title}</h1>);

    return itemsToRender;
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página al realizar una nueva búsqueda
  };

  return (
    <div className="content">
      {products ? (
        <div>
          <h1>Productos totales en la tienda : {products.length}</h1>
          <h1>Lista de productos:</h1>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {renderItems()}

          <ResponsivePagination
            current={currentPage}
            total={products.length / 5}
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
