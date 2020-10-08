const express = require("express");
const app = express();
const schema = require("./schema/schema");
const cors = require("cors");

app.use(cors());
// mongoose connection setup
var mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/hitech?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error(err));

const { graphqlHTTP } = require("express-graphql");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
