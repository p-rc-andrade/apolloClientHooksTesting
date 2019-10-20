import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <>
      <h2>
        Todo list{" "}
        <span role="img" aria-label="todo">
          📖
        </span>
      </h2>
      <TodoList />
      <AddTodo />
    </>
  );
};

export default Todo;
