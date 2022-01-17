import React from "react";
import "./App.css";

// TodoContext
import { TodoContext } from "./TodoContext";

// Components
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateButton } from "./components/CreateButton";
import { Header } from "./components/Header";
import { TodoForm } from "./components/todoForm";
import { EmptyTodo } from "./components/EmptyTodo";
import { LoaderScreen } from "./components/Loader/LoaderScreen";
import { ItemLoading } from "./components/Loader/ItemLoading";

// Portals
import { Modal } from "./components/Modal";

const defaultTodos = [
  {
    text: "Cortar Cebolla",
    completed: true,
  },
  {
    text: "Tomar el curso de react",
    completed: false,
  },
  {
    text: "Llorar con la llorona",
    completed: false,
  },
];

const App = () => {
  const {
    handleComplete,
    handleDelete,
    loading,
    error,
    todosFiltered,
    openModal,
    handleClickAdd,
    todos,
  } = React.useContext(TodoContext);
  return (
    <div className="main-container">
      <Header />
      <div className="app-content">
        <p className="TodoTitle">
          <span className="title">To-DO MACHINE</span>
          <span className="TodoIcon">🙌</span>
        </p>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && <LoaderScreen />}
          {!loading && !todosFiltered.length && <EmptyTodo />}
          {error && <p>Oh oh! Ha ocurrido un error debido al gordons</p>}
          {todosFiltered.map((item, index) => (
            <TodoItem
              text={item.text}
              completed={item.completed}
              key={index}
              onHandleComplete={() => handleComplete(index)}
              onHandleDelete={() => handleDelete(item.text)}
            />
          ))}
          {loading && <ItemLoading />}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
      {!loading && (
        <div
          className={`center ${
            todos.length && todos.length < 4 ? "mt-3" : ""
          } `}
        >
          <CreateButton name="add" text="+" onHandleClick={handleClickAdd} />
        </div>
      )}
    </div>
  );
};

export default App;
