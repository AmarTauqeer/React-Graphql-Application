import { gql } from "apollo-boost";
// get books
const getBooksQuery = gql`
  {
    books {
      name
      genre
      description
      id
    }
  }
`;

// get authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

// get book by id
const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
// Mutation
const addBookMutation = gql`
  mutation(
    $name: String!
    $description: String!
    $genre: String!
    $authorId: ID!
  ) {
    addBook(
      name: $name
      description: $description
      genre: $genre
      authorId: $authorId
    ) {
      name
      id
    }
  }
`;

export { getBooksQuery, getBookQuery, getAuthorsQuery, addBookMutation };
