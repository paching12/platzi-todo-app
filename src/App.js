import React from "react";
import "./App.css";

// Components
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateButton } from "./components/CreateButton";
import { Header } from "./components/Header";
import { LoaderScreen } from "./components/Loader/LoaderScreen";

// Custom hooks
import { useLocalStorage } from "./customHooks/useLocalStorage";

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
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [todosFiltered, setTodosFiltered] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const { items: todos, saveItems: saveTodos } = useLocalStorage(
    "TODOS_V1",
    setLoading,
    setError
  );
  const completedTodos = todos.filter((element) => element.completed);

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

  const handleClick = () => {
    console.log("click");
  };

  return (
    <React.Fragment>
      {loading && <LoaderScreen />}
      <Header />
      <p className="TodoTitle">
        <span className="title">To-DO MACHINE</span>
        <span className="TodoIcon">🙌</span>
      </p>
      <TodoCounter completed={completedTodos.length} total={todos.length} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {!loading && !todosFiltered.length && (
          <p className="firstTodo">Crea tu primer TODO</p>
        )}
        {error && <p>Oh oh! Ha ocurrido un error debido al gordons</p>}
        {todosFiltered.map((item, index) => (
          <TodoItem
            text={item.text}
            completed={item.completed}
            key={index}
            onHandleComplete={() => handleComplete(index)}
            onHandleDelete={() => handleDelete(index)}
          />
        ))}
      </TodoList>
      <div className="center">
        <CreateButton name="add" text="+" onHandleClick={handleClick} />
      </div>
    </React.Fragment>
  );
};

export default App;
