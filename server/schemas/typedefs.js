const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    fullName: String
    email: String!
    # response: Response
  }

  # Controllers (only for GETs)
  type Query {
    users(email, first): [User]
    classes: [Class]
    professors: [Professor]
  }´
  type Mutation {

  }
`;

module.exports = typeDefs;
