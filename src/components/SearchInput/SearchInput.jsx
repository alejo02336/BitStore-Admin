import React from "react";
import "./search.css";

export default function SearchInput({ searchTerm, handleSearch }) {
  return (
    <input
      className="search_input"
      type="text"
      placeholder="Buscar..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}
