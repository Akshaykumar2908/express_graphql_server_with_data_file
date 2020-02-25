const { buildSchema } = require('graphql');
const {query} = require('./query');

module.exports = {
  buildSchema: buildSchema(query)
}