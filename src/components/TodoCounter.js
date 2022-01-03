import React from "react";
import "../css/TodoCounter.css";

const TodoCounter = ({ completed, total }) => {
  return (
    <h2 className="TodoCounter">
      Haz completado <span className="TodoTaskCounter">{completed}</span> de{" "}
      <span className="TodoTaskCounter">{total}</span> TODO's
    </h2>
  );
};

export { TodoCounter };
