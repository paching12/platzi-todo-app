import React from "react";
import "../css/TodoItem.css";

function TodoItem({ text, completed, onHandleComplete, onHandleDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onHandleComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onHandleDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
