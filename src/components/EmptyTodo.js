import React from "react";
import "../css/emptyTodo.css";
const EmptyTodo = () => {
  return (
    <div className="firstTodo">
      <div className="firstTodo-icon">🗃</div>
      <p className="firstTodo-instructions">
        Add a new task to start, you can select the below button 👉{" "}
        <span className="firstTodo-icon-plus">➕</span>
      </p>
    </div>
  );
};

export { EmptyTodo };
