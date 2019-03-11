import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonClicked: false,
      et: null
    };
  }
  edit = () => {
    this.setState({ et: true });
    console.log(this.state.et);
  };
  render() {
    var achievements = null;
    var redirect = null;
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
    if (this.state.et) {
      redirect = <Redirect to={"/edit/" + this.props.prd.model} push />;
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
            onClick={this.edit}
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
          {redirect}
        </div>
      </div>
    );
  }
}

export default Product;
