import React from "react";
// Custom hooks
import { useLocalStorage } from "./useLocalStorage";

const useTodos = () => {
  const {
    items: todos,
    setItems: setTodos,
    saveItems: saveTodos,
    loading,
    setLoading,
    error,
    setError,
    storageChange,
    setStorageChange,
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
    // console.log("NUEVOS TODOS", todos, todosFiltered);
  }, [todos]);

  React.useEffect(() => {
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log(
          "Hubo cambios en TODOS_V1",
          change,
          JSON.parse(change.newValue)
        );
        setStorageChange(true);
        setTodos(JSON.parse(change.newValue));
      }
    });
    return () => {
      window.removeEventListener("storage");
    };
  }, []);

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

  return {
    completedTodos,
    todos,
    setTodos,
    saveTodos,
    handleComplete,
    handleDelete,
    handleClickAdd,
    loading,
    setLoading,
    error,
    setError,
    search,
    setSearch,
    todosFiltered,
    setTodosFiltered,
    openModal,
    setOpenModal,
    handleAddTodo,
    storageChange,
    setStorageChange,
  };
};

export { useTodos };
