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
          //   addTodo({
          //     variables: {
          //       type: input.value
          //     }
          //   });
          console.log(e.target.test.value);
          //   input.value = "";
        }}
      >
        <input id="test" />
        <ActionBtn type="submit">Add Todo</ActionBtn>
      </form>
    </div>
  );
};

export default AddTodo;
