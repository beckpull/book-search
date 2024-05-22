import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
  me {
    _id
    bookCount
    username
    email
    password
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const SEARCH_BOOKS = gql`
  query searchBooks($query: String!) {
    searchBooks(query: $query) {
      id
      title
      authors
      description
      thumbnail
    }
  }
`;