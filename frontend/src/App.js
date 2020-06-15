import React, { Component } from "react";
import API from "./utils/network/API";

import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/add.component";
import Tasks from "./components/tasks.component";
import Clear from "./components/clear.component";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = () => {
    API.get("/retrieve")
      .then((res) => {
        const todos = res.data;
        console.log(todos);
        this.setState({ todos });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  handleAddClick = (description) => {
    const data = {
      description,
      completed: false,
    };

    API.post("/create", data)
      .then((res) => {
        console.log("Handle Add Click :", res.data);
        this.fetchTodos();
      })
      .catch((err) => {
        console.error("Handle Add Click : ", err.message);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-primary text-center m-4">TO-DO List</h1>

        <Add onAdd={this.handleAddClick} />

        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="my-4">Tasks</h2>

            {this.state.todos.length > 0 ? (
              this.state.todos.map((todo) => (
                <Tasks key={todo._id} todo={todo} />
              ))
            ) : (
              <p className="">No Todos...</p>
            )}
            <Clear />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
