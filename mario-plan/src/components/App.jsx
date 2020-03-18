import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Dashboard from "./dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <NavBar />
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
