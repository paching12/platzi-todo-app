import React from "react";
import "../css/emptyTodo.css";
const EmptyTodo = () => {
  return (
    <div className="firstTodo">
      <div className="firstTodo-icon">🗃</div>
      <p className="firstTodo-instructions">
        Añade un nueva tarea para comenzar, selecciona el botón{" "}
        <span className="firstTodo-icon-plus">➕</span>
      </p>
    </div>
  );
};

export { EmptyTodo };
