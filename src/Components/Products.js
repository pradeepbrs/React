import React from "react";
import ReactDOM from "react-dom";

class Product extends React.Component {
  constructor() {
    super();
    this.state = { buttonClicked: false };
  }
  render() {
    var achievements = null;
    if (this.state.buttonClicked) {
      achievements = (
        <p className="card-text">
          <span>RAM: {this.props.prd.ram}</span>
          <br />
          <span>Camera: {this.props.prd.camera}</span>
          <br />
          <span>OS: {this.props.prd.os}</span>
          <br />
          <span>Processor: {this.props.prd.processor}</span>
        </p>
      );
    }
    return (
      <div className="card" style={{ width: 190 }}>
        <div className="card-body">
          <h5 className="card-title text-center">{this.props.prd.model}</h5>
          <p className="card-text">
            <span>Price: {this.props.prd.price}</span>
            <br />
          </p>
          {achievements}
          <button
            className="btn"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              this.setState({ buttonClicked: true });
            }}
          >
            Show Details
          </button>
          <br />
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ buttonClicked: false });
            }}
          >
            Hide Details
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
