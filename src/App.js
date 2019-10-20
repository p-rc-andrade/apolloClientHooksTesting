import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dog from "./useQueryExample/Dog";
import Todo from "./useMutationExample";

import { DivContainer } from "./styles/App";

const App = ({ clientTodos, clientDogs }) => {


  return (
    
      <Router>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/dogs">Dogs (useQuery example)</Link>
              </li>
              <li>
                <Link to="/todos">Todos (useMutation example)</Link>
              </li>
            </ul>
          </nav>
        <DivContainer>
          <Switch>
            <Route exact path={["/","/dogs"]}>
              <Dog client={clientDogs}/>
            </Route>
            <Route path="/todos">
              <Todo client={clientTodos}/>
            </Route>
          </Switch>
        </DivContainer>
      </Router>
  );
};

export default App;
