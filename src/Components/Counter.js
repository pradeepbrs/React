import React, { Component } from "react";
class HelloComp extends React.Component {
  constructor() {
    super();
    //this.counter = 0;
    this.state = {
      // state should be assigned an Object Literal with relevant attributes
      counter: 0,
      message: ""
    };
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
      message: "button clicked"
    });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.incrementCounter}
        >
          {" "}
          Click{" "}
        </button>
        <p>
          {this.state.counter} {this.state.message}
        </p>
      </div>
    );
  }
}

export default HelloComp;
