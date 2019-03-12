import React from "react";
import ReactDOM from "react-dom";
import Forms from "./Components/Forms.js";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Forms />
  </BrowserRouter>,
  document.getElementById("root")
);
