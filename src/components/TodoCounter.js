import React from "react";

// Styles
import "../css/TodoCounter.css";

const TodoCounter = ({ completedTodos = [], totalTodos = [], loading }) => {
  return (
    <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
      Completed{" "}
      <span className="TodoTaskCounter">
        {loading ? "-" : completedTodos.length}
      </span>{" "}
      of{" "}
      <span className="TodoTaskCounter">
        {loading ? "-" : totalTodos.length}
      </span>{" "}
      TODO's
    </h2>
  );
};

export { TodoCounter };
