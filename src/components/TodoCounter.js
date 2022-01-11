import React from "react";

import { TodoContext } from "../TodoContext";

// Styles
import "../css/TodoCounter.css";

const TodoCounter = () => {
  const { completedTodos, todos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Haz completado{" "}
      <span className="TodoTaskCounter">{completedTodos.length}</span> de{" "}
      <span className="TodoTaskCounter">{todos.length}</span> TODO's
    </h2>
  );
};

export { TodoCounter };
