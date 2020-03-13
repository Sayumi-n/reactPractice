import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./layout/NavBar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
