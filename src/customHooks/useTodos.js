import React from "react";
// Custom hooks
import { useLocalStorage } from "./useLocalStorage";

const useTodos = () => {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
    sync,
    sincronize: syncTodos,
  } = useLocalStorage("TODOS_V1");

  const completedTodos = todos.filter((element) => element.completed);

  const handleAddTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: todo,
    });
    saveTodos(newTodos);
  };

  const handleComplete = (index) => {
    const newTodos = todosFiltered.map((item, i) => {
      if (item && i === index) item.completed = !item.completed;
      return item;
    });
    saveTodos(newTodos);
  };

  const handleDelete = (text) => {
    const newTodos = todos.filter(
      (item) => item && text.toLowerCase() !== item.text.toLowerCase()
    );
    saveTodos(newTodos);
  };

  const [todosFiltered, setTodosFiltered] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickAdd = () => {
    setOpenModal(!openModal);
  };

  React.useEffect(() => {
    setTodosFiltered(todos);
  }, [todos]);

  React.useEffect(() => {
    const newTodos = todos.filter((todo) => {
      if (todo.text) {
        const text = todo.text.toLowerCase();
        return text.includes(search.toLowerCase());
      }
      return todo;
    });
    setTodosFiltered(newTodos);
  }, [search, todos]);

  const states = {
    completedTodos,
    todos,
    loading,
    error,
    search,
    todosFiltered,
    openModal,
    sync,
  };

  const stateUpdates = {
    saveTodos,
    handleComplete,
    handleDelete,
    handleClickAdd,
    setSearch,
    setTodosFiltered,
    setOpenModal,
    handleAddTodo,
    syncTodos,
  };

  return {
    states,
    stateUpdates
  };
};

export { useTodos };
