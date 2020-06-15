import React, { Component } from "react";

class Add extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="New Task"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
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
