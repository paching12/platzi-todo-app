import React from "react";

// Styles
import "../css/todoForm.css";

const TodoForm = ({ handleAddTodo, setOpenModal }) => {
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
      <label>Write your new TODO </label>
      <textarea
        onKeyUp={onKeyUp}
        onChange={onHandleChange}
        placeholder="Cut onion for having lunch"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onHandleCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Add
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
