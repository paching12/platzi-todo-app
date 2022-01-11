import React from "react";
// Custom hooks
import { useLocalStorage } from "../customHooks/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  // Props to share
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    setLoading,
    error,
    setError,
  } = useLocalStorage("TODOS_V1");

  const completedTodos = todos.filter((element) => element.completed);

  const handleComplete = (index) => {
    const newTodos = todosFiltered.map((item, i) => {
      if (item && i === index) item.completed = !item.completed;
      return item;
    });
    saveTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((item, i) => item && index !== i);
    saveTodos(newTodos);
  };

  const handleClickAdd = () => {
    console.log("click");
  };

  const [todosFiltered, setTodosFiltered] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    setTodosFiltered(todos);
  }, [todos]);

  React.useEffect(() => {
    const newTodos = todos.filter((todo) => {
      if (todo.text) {
        const text = todo.text.toLowerCase();
        return text.includes(search.toLowerCase());
      }
    });
    setTodosFiltered(newTodos);
  }, [search]);

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        todos,
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
