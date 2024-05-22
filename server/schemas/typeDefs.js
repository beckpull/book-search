const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  bookCount: Int!
  savedBooks: [Book]
}

type Book {
  bookId: ID!
  authors: [String]
  description: String!
  image: String
  link: String
  title: String!
}

type Auth {
  token: ID!
  user: User
}

input BookInput {
  bookId: ID!
  title: String!
  authors: [String]
  description: String!
  image: String
  link: String
}

type Query {
  me: User
  searchBooks(query: String!): [Book]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  deleteBook(bookId: ID!): User
}
`;

module.exports = typeDefs;
