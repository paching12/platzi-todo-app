import React from "react";

// Styles
import "../css/TodoSearch.css";

// Context

function TodoSearch({ search, setSearch, loading }) {
  const onSearchValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValue}
      value={search}
      disable={loading ? "true" : "false"}
    />
  );
}

export { TodoSearch };
