import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Instructions from "./components/instructions";

class App extends Component {
  render() {
    return (
      <div>
        <Instructions />

        <BrowserRouter>
          <div>
            <ul>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>

            <Switch>
              <Route path="/courses" component={Courses} />
              <Route path="/users" component={Users} />
              <Redirect  from="/all-courses" to="/courses" />
              <Route render={() => <h1>Not found</h1>} />
              
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
