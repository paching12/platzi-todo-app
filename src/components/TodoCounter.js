import React from "react";

// Styles
import "../css/TodoCounter.css";

const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <h2 className="TodoCounter">
      Haz completado{" "}
      <span className="TodoTaskCounter">{completedTodos.length}</span> de{" "}
      <span className="TodoTaskCounter">{totalTodos.length}</span> TODO's
    </h2>
  );
};

export { TodoCounter };
