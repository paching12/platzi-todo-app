import React from "react";
import { TodoContext } from "../TodoContext";

// Styles
import "../css/todoForm.css";

const TodoForm = () => {
  const { handleAddTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState();

  const onHandleCancel = () => {
    setNewTodoValue("");
    setOpenModal(false);
  };

  const onHandleChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(newTodoValue);
    setOpenModal(false);
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleAddTodo(newTodoValue);
      onHandleCancel();
    }
  };

  return (
    <form onSubmit={onHandleSubmit} className="TodoForm">
      <div className="TodoForm-icon-title">📝</div>
      <label>Escribe tu nuevo TODO </label>
      <textarea
        onKeyUp={onKeyUp}
        onChange={onHandleChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onHandleCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
