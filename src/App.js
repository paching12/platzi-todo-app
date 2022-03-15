import React from "react";
import "./App.css";

// Custom hooks
import { useTodos } from "./customHooks/useTodos";

// Components
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
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
    completedTodos,
    search,
    setSearch,
    handleAddTodo,
    setOpenModal,
  } = useTodos();
  return (
    <div className="main-container">
      <Header />
      <div className="app-content">
        <p className="TodoTitle">
          <span className="title">To-DO MACHINE</span>
          <span className="TodoIcon">🙌</span>
        </p>
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={todos}
            completedTodos={completedTodos}
            // loading={loading}
          />
          <TodoSearch search={search} setSearch={setSearch} />
        </TodoHeader>
        <TodoList
          search={search}
          searchedTodos={todosFiltered}
          todos={todos}
          error={error}
          onError={() => <p>Oh oh! Ha ocurrido un error debido al gordons</p>}
          loading={loading}
          onLoading={() => <LoaderScreen />}
          onEmptyTodos={() => <EmptyTodo />}
          onEmptySearchResults={(searchedText) => (
            <p className="white center">
              No hay resultados para {searchedText}
            </p>
          )}
          onLoadingSkeleton={() => <ItemLoading />}
          render={(todo, index) => (
            <TodoItem
              text={todo.text}
              completed={todo.completed}
              key={index}
              onHandleComplete={() => handleComplete(index)}
              onHandleDelete={() => handleDelete(todo.text)}
            />
          )}
        />
        {/* <TodoList>
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
        </TodoList> */}
        {!!openModal && (
          <Modal>
            <TodoForm
              handleAddTodo={handleAddTodo}
              setOpenModal={setOpenModal}
            />
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
