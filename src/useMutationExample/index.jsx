import React from "react";
import { ApolloProvider } from "react-apollo";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = ({client}) => {
  return (
    <ApolloProvider client={client}>
      <h2>
        Todo list{" "}
        <span role="img" aria-label="todo">
          📖
        </span>
      </h2>
      <TodoList />
      <AddTodo />
    </ApolloProvider>
  );
};

export default Todo;
