import React from "react";
import AddTodo from "./AddTodo";

const Todo = () => {
  return (
    <>
      <h2>
        Todo list{" "}
        <span role="img" aria-label="todo">
          📖
        </span>
      </h2>
      <AddTodo />
    </>
  );
};

export default Todo;
