import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>React and Graphql Application</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
