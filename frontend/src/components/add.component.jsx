import React, { Component } from "react";

class Add extends Component {
  state = {
    description: "",
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8">
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
                  this.setState({ description: "" });
                  return this.props.onAdd(this.state.description);
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
