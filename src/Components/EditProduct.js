import React from "react";
class EditProduct extends React.Component {
  render() {
    return <h3>The selected ID is {this.props.match.params.model}</h3>;
  }
}
export default EditProduct;
