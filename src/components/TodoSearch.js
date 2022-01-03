import React from "react";
import "../css/TodoSearch.css";

function TodoSearch({ search, setSearch }) {
  const onSearchValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValue}
      value={search}
    />
  );
}

export { TodoSearch };
