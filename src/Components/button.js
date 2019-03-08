import React from "react";
import ReactDOM from "react-dom";

class btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.showData = this.showData.bind(this);
    this.hideData = this.hideData.bind(this);
  }
  showData(e) {
    this.setState({ data: "Hello React" });
  }

  hideData(e) {
    this.setState({ data: "" });
  }

  render() {
    return (
      <div>
        <button style={{ color: "green" }} onClick={this.showData}>
          Show Data
        </button>
        <br />
        <br />
        <span style={{ color: "blue" }}>{this.state.data}</span> <br />
        <br />
        <button style={{ color: "red" }} onClick={this.hideData}>
          Hide Data
        </button>
      </div>
    );
  }
}

export default btn;
