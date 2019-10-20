import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_TODOS, UPDATE_TODO } from "../queries";

const TodoList = () => {
    const {loading: queryLoading, error: queryError, data} = useQuery(GET_TODOS);
    const [
      updateTodo,
      { loading: mutationLoading, error: mutationError },
    ] = useMutation(UPDATE_TODO);

    // if (queryLoading || mutationLoading) return <p>Loading...</p>;
    if (queryLoading) return <p>Loading...</p>;
    // if (queryError || mutationE rror) return <p>Error :(</p>;
    if (queryError) return <p>Error :(</p>;

    return (
      data.todos.map(({id, type}) => {
        return (
          <div key={id} style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <p><strong>{"Current value:"}</strong>{` ${type} `}</p>
            {
              mutationLoading ? <p>Loading...</p> : 
              mutationError ? <p>Error:(</p> : 
              <form
                onSubmit={e => {
                  // console.log(e.target)
                    e.preventDefault();
                    // console.log(e.target.querySelector('input'));
                    updateTodo({ variables: { id, type: e.target[0].value } });
                    e.target[0].value  = '';
                  }
              }>
                <input key={`updateTask:${id}`} id={`updateTask:${id}`} />
                <button type="submit">Update Todo</button>
              </form>
            }
            
            
          </div>
        );
      })
    )
}

export default TodoList;