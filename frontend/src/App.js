import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/add.component";
import Tasks from "./components/tasks.component";
import Clear from "./components/clear.component";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1 className="text-primary text-center m-4">TO-DO List</h1>

        <Add />

        <div className="row justify-content-center">
          <div className="col-8">
            <Tasks />
            <Clear />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
