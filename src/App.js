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

function App() {
  const [todos, setTodos, saveTodos] = useLocalStorage("TODOS_V1");
  const [search, setSearch] = React.useState("");

  const completedTodos = todos.filter((element) => element.completed);

  React.useEffect(() => {
    const newTodos = todos.map((todo) => {
      if (todo.text) {
        const text = todo.text.toLowerCase();
        if (text.includes(search.toLowerCase())) todo.show = true;
        else todo.show = false;
      }
      return todo;
    });
    setTodos(newTodos);
  }, [search]);

  const handleComplete = (index) => {
    const newTodos = todos.map((item, i) => {
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
      <LoaderScreen />
      <Header />
      <p className="TodoTitle">
        <span className="title">To-DO MACHINE</span>
        <span className="TodoIcon">🙌</span>
      </p>
      <TodoCounter completed={completedTodos.length} total={todos.length} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {todos.map(
          (item, index) =>
            item.show !== false && (
              <TodoItem
                text={item.text}
                completed={item.completed}
                key={index}
                onHandleComplete={() => handleComplete(index)}
                onHandleDelete={() => handleDelete(index)}
              />
            )
        )}
      </TodoList>
      <div className="center">
        <CreateButton name="add" text="+" onHandleClick={handleClick} />
      </div>
    </React.Fragment>
  );
}

export default App;
