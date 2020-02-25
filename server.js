const express = require('express');
const express_graphql = require('express-graphql');
require('dotenv').config();

const {buildSchema} = require('./schema/schema');
const {root} = require('./schema/mutation');

const PORT = process.env.PORT;

const app = express();

app.use('/graphql', express_graphql({
  schema: buildSchema,
  rootValue: root,
  graphiql: true
}))

app.listen(PORT, () => console.log(`The Graphql Server is running on\nhttp://localhost:${PORT}`));