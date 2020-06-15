import React, { Component } from "react";

class Tasks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2 className="my-4">Tasks</h2>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" for="defaultCheck1">
            Pay Bills
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default Tasks;
