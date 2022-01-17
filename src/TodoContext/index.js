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

  const handleDelete = (index) => {
    const newTodos = todos.filter((item, i) => item && index !== i);
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
        handleAddTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
