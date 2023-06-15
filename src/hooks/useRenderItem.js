import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRenderItem = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 5;

  const filterItems = () => {
    if (!searchTerm) {
      return items;
    }

    const filteredItems = items.filter((item) => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const propertyValue = item[key];
          if (
            typeof propertyValue === "string" &&
            propertyValue.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return true;
          }
        }
      }
      return false;
    });

    return filteredItems;
  };

  const renderItems = (Component) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredItems = filterItems();

    const itemsToRender = filteredItems
      .slice(startIndex, endIndex)
      .map((item, index) => Component({ item, index, navigate }));

    return itemsToRender;
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página al realizar una nueva búsqueda
  };

  const filteredItems = filterItems();

  return {
    items,
    filteredItems,
    setItems,
    searchTerm,
    handleSearch,
    renderItems,
    itemsPerPage,
    setCurrentPage,
    currentPage,
  };
};

export { useRenderItem };
