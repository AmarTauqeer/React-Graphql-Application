import React, { Component } from "react";
import * as compose from "lodash.flowright";
import { graphql } from "react-apollo";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      description: "",
      authorId: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        description: this.state.description,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };
  displayAuthors() {
    var authorData = this.props.getAuthorsQuery;
    if (authorData.loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      return authorData.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <form id="form-book" onSubmit={this.submitForm.bind(this)}>
          <div className="field">
            <label>Book Name</label>
            <input
              type="text"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Genre</label>
            <input
              type="text"
              onChange={(e) => this.setState({ genre: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Author</label>
            <select
              onChange={(e) => this.setState({ authorId: e.target.value })}
            >
              <option>Select Author</option>
              {this.displayAuthors()}
            </select>
          </div>
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
