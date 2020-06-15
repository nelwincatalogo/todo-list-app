import React, { Component } from "react";

class Clear extends Component {
  render() {
    return (
      <div className="border-top border-secondary text-right mt-4">
        <button onClick={this.props.onClear} className="btn btn-secondary mt-4">
          Clear
        </button>
      </div>
    );
  }
}

export default Clear;
