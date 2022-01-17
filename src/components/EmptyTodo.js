import React from "react";
import "../css/emptyTodo.css";
const EmptyTodo = () => {
  return (
    <div className="firstTodo">
      <div className="firstTodo-icon">🗃</div>
      <p>Añade un nueva tarea para comenzar, selecciona el botón ➕</p>
    </div>
  );
};

export { EmptyTodo };
