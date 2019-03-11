import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import EditProduct from "./Components/EditProduct";
import Card from "./Components/Card";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/card" />} />
          <Route path="/card" component={Card} />
          <Route path="/edit/:model" component={EditProduct} />
        </Switch>
      </div>
    );
  }
}

export default App;
