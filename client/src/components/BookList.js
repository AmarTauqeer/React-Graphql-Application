import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";
export class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }
  displayBooks() {
    var bookData = this.props.data;
    if (bookData.loading) {
      return <div>Loading....</div>;
    } else {
      return bookData.books.map((book) => {
        return (
          <li
            key={book.id}
            onClick={(e) => {
              this.setState({ selected: book.id });
            }}
          >
            {book.name}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Book List</h2>
        <ul id="book-list">{this.displayBooks()}</ul>

        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);