import React from "react";

// Styles
import "../css/TodoSearch.css";

// Context
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const onSearchValue = (e) => {
    setSearch(e.target.value);
  };

  const { search, setSearch } = React.useContext(TodoContext);

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
