import { useState } from "react";

const useRenderItem = () => {
  const [items, setItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 5;

  const filterItems = () => {
    if (!searchTerm) {
      return items;
    }

    const filteredItems = items.filter((item) => {
      const itemName = `Elemento ${item.title}`;
      return itemName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredItems;
  };

  const renderItems = (Component) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredItems = filterItems();

    const itemsToRender = filteredItems
      .slice(startIndex, endIndex)
      .map((item, index) => Component({ item, index }));

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
