import React from "react";
import { ApolloProvider } from "react-apollo";
import Dog from "./useQueryExample/Dog";
import Todo from "./useMutationExample/Todo";

import { DivContainer } from "./styles/App";

const App = ({ client }) => {
  return (
    <ApolloProvider client={client}>
      <DivContainer>
        {/* <Dog /> */}
        <Todo />
      </DivContainer>
    </ApolloProvider>
  );
};

export default App;
