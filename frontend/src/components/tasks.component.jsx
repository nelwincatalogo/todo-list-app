import React, { Component } from "react";

class Tasks extends Component {
  state = {};
  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={this.props.todo._id}
        />
        <label className="form-check-label" for={this.props.todo._id}>
          {this.props.todo.description}
        </label>
      </div>
    );
  }
}

export default Tasks;
