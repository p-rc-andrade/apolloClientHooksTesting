import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_TODO } from "../queries";
import { ActionBtn } from "../styles/App";

const AddTodo = () => {
  let input;
  const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
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
        <input id="task" />
        <ActionBtn type="submit">Add Todo</ActionBtn>
      </form>
    </div>
  );
};

export default AddTodo;
