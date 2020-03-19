import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Dashboard from "./dashboard/Dashboard";
import ProjectDetail from "./projects/ProjectDetail";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import CreateProject from "./projects/CreateProject";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetail} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
