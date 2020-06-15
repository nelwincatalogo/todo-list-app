import React, { Component } from "react";

class Tasks extends Component {
  state = {
    completed: this.props.todo.completed,
  };

  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={this.state.completed}
          id={this.props.todo._id}
          onChange={(e) => {
            this.setState({ completed: e.target.checked });
            return this.props.onChecked(e.target.checked, this.props.todo);
          }}
        />
        {this.state.completed ? (
          <label className="form-check-label" htmlFor={this.props.todo._id}>
            <del>{this.props.todo.description}</del>
          </label>
        ) : (
          <label className="form-check-label" htmlFor={this.props.todo._id}>
            {this.props.todo.description}
          </label>
        )}
      </div>
    );
  }
}

export default Tasks;
