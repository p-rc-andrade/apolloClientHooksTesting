import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { GET_TODOS, ADD_TODO } from "../queries";
import { ActionBtn } from "../styles/App";

const AddTodo = () => {
  // let input;
  const [addTodo, { data, loading, error }] = useMutation(
    ADD_TODO,
    {
      update(cache, { data: { addTodo } }) {
        // Get current value in Cache
        const { todos } = cache.readQuery({ query: GET_TODOS });
        console.log(todos);
        // Concat new value
        cache.writeQuery({
          query: GET_TODOS,
          // data: { todos: todos.concat([addTodo])},
          data: { todos: [...todos, addTodo]},
        });
        // Get updated value in cache
        const { todos: updatedTodos }= cache.readQuery({ query: GET_TODOS });
        console.log(updatedTodos);
      }
    });

  return (
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({
            variables: {
              type: e.target.task.value
            }
          });
          console.log(e.target.task.value);
          e.target.task.value = "";
        }}
      >
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <p><strong>{"New value:"}</strong></p>
          <input id="task" />
        </div>

        <ActionBtn style={{float: "right"}} type="submit">Add Todo</ActionBtn>
      </form>
  );
};

export default AddTodo;
