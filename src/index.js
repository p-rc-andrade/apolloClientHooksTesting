import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import "./styles/index.css";
import App from "./App";

const clientDogs = new ApolloClient({
  uri: "https://32ypr38l61.sse.codesandbox.io",
});

const clientTodos = new ApolloClient({
  uri: "https://plp0mopxq.sse.codesandbox.io/"
});

ReactDOM.render(
  <App clientDogs={clientDogs} clientTodos={clientTodos} />, 
  document.getElementById("root"));
