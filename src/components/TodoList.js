import React from "react";
import "../css/TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.todos?.length && props.onEmptyTodos()}
      {!props.searchedTodos?.length &&
        props.todos.length &&
        props.onEmptySearchResults(props.search)}
      <ul>
        {props.render &&
          props.searchedTodos.map(props.render || props.children)}
      </ul>
      {props.loading && props.onLoadingSkeleton()}
    </section>
  );
}

export { TodoList };
