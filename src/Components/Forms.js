import React from "react";
class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "sandstom",
      author: "James Rollins",
      genere: "Mystery thriller",
      formErrors: {
        ttitleErr: "",
        authorErr: "",
        genereErr: ""
      },
      fieldValidity: {
        title: false,
        author: false,
        genere: false
      },
      formValid: false,
      successMessage: ""
    };
  }
  validateTitle = e => {
    const title = e.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({ title: e.target.value });
    console.log(title.length);
    if (title.length <= 4) {
      formErrors.ttitleErr = "Title must be at least 4 chars";
      fieldValidity.title = false;
    } else {
      formErrors.ttitleErr = "";
      fieldValidity.title = true;
    }
    this.setState({ fieldValidity: fieldValidity });
    this.setState({ formValid: fieldValidity.title && fieldValidity.author });
  };
  validateAuthor = e => {
    const author = e.target.value;
    this.setState({ author: author });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (author.length <= 3) {
      formErrors.authorErr = "Title must be at least 3 chars";
      fieldValidity.author = false;
    } else {
      formErrors.authorErr = "";
      fieldValidity.author = true;
    }
    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.title && fieldValidity.author });
  };
  validateSalary = e => {
    let genere = e.target.value;
    this.setState({ genere: genere });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (genere === "Select") {
      formErrors.genereErr = "Please Select Genere";
      fieldValidity.genere = false;
    } else {
      formErrors.genereErr = "";
      fieldValidity.genere = true;
    }
    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.title && fieldValidity.author });
  };
  update = e => {
    e.preventDefault();
    if (this.state.formValid) {
      var formJSON = {
        ttitle: this.state.title,
        author: this.state.author,
        genere: this.state.genere
      };
      console.log(JSON.stringify(formJSON));
      this.setState({ successMessage: JSON.stringify(formJSON) });
    }
  };
  render() {
    return (
      <div style={{ width: 500, margin: "0px auto" }}>
        <h3 className="text-center">Add a Book</h3>
        <form>
          <div className="form-group">
            <label>Title:</label>
            <input
              className="form-control"
              onChange={this.validateTitle}
              value={this.state.title}
            />
          </div>
          <span className="text-danger">{this.state.formErrors.ttitleErr}</span>
          <div className="form-group">
            <label>Author:</label>
            <input
              className="form-control"
              onChange={this.validateAuthor}
              value={this.state.author}
            />
          </div>
          <span className="text-danger">{this.state.formErrors.authorErr}</span>
          <div className="form-group">
            <label>Genere:</label>
            <select
              onChange={this.validateSalary}
              className="form-control"
              value={this.state.genere}
            >
              <option value="Select">Select</option>
              <option value="Mystery thriller">Mystery thriller</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-fiction">Non-fiction</option>
            </select>
          </div>
          <span className="text-danger">{this.state.formErrors.genereErr}</span>
          <br />
          <button
            type="button"
            onClick={this.update}
            className="btn btn-success"
          >
            Add Book
          </button>
          <br />
          <span className="text-success">{this.state.successMessage}</span>
        </form>
      </div>
    );
  }
}
export default Forms;
