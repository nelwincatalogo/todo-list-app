import React, { Component } from "react";

class Add extends Component {
  state = {
    description: "",
    isError: false,
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          {this.state.isError ? (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Please enter some text on the new task.
              <button
                className="close"
                type="button"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => this.setState({ isError: false })}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ) : (
            ""
          )}

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="New Task"
              aria-describedby="button-add"
              onChange={(e) => this.setState({ description: e.target.value })}
              value={this.state.description}
            />
            <div className="input-group-append">
              <button
                onClick={() => {
                  if (this.state.description.trim().length === 0) {
                    this.setState({ isError: true });
                    return;
                  }

                  this.setState({ description: "" });
                  return this.props.onAdd(this.state.description.trim());
                }}
                className="btn btn-primary"
                type="button"
                id="button-add"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
