import React, { useEffect, useState } from "react";
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
import { ChangeAlert } from "./components/ChangeAlert";

// Portals
import { Modal } from "./components/Modal";

const App = () => {
  const { states, stateUpdates } = useTodos();
  const [loadingScreen, setLoadingScreen] = useState(true);

  const {
    loading,
    error,
    todosFiltered,
    openModal,
    todos,
    completedTodos,
    search,
  } = states;

  const {
    handleClickAdd,
    handleComplete,
    handleDelete,
    handleAddTodo,
    setOpenModal,
    setSearch,
    syncTodos,
  } = stateUpdates;

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 1500);
  }, []);

  return (
    <div className="main-container">
      {loadingScreen && <LoaderScreen />}
      <Header />
      <div className="app-content">
        <p className="TodoTitle">
          <span className="title">To-DO MACHINE</span>
          <span className="TodoIcon">🙌</span>
        </p>

        <TodoHeader loading={loading}>
          <TodoCounter totalTodos={todos} completedTodos={completedTodos} />
          <TodoSearch search={search} setSearch={setSearch} />
        </TodoHeader>
        <TodoList
          search={search}
          searchedTodos={todosFiltered}
          todos={todos}
          error={error}
          onError={() => <p>Oops! There was a problem here.</p>}
          loading={loading}
          onEmptyTodos={() => <EmptyTodo />}
          onEmptySearchResults={(searchedText) => (
            <p className="white center">
              There aren't results for {searchedText}
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
      <ChangeAlert sync={syncTodos} />
    </div>
  );
};

export default App;
