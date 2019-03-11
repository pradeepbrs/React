import React, { Component } from "react";
//import './App.css';
import Product from "./Components/Products";
class App extends Component {
  constructor() {
    super();
    const prd1 = {
      model: "Google pixel 2",
      price: 62000,
      ram: "4GB",
      camera: "12.2pmp",
      os: "Andriod Pie",
      processor: "snapgradan 835 octa-core"
    };
    const prd2 = {
      model: "Apple Iphone X",
      price: 98000,
      ram: "3GB",
      camera: "12pmp",
      os: "ios v11.1.1",
      processor: "A11 Bionic hexa core"
    };
    this.prdArr = [prd1, prd2];
  }
  render() {
    return (
      <div>
        <h3 className="text-center text-primary">Product Details</h3>
        {this.prdArr.map(pr => (
          <Product key={pr.model} prd={pr} />
        ))}
      </div>
    );
  }
}
export default App;
