import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class First extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home |</Link>
          <Link to="/about">About |</Link>
          <Link to="/contact">Contact</Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
export default First;
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home...</h1>
      </div>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About...</h1>
      </div>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact...</h1>
      </div>
    );
  }
}
