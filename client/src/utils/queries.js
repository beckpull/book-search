import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    user {
      _id
     username
     email
     bookCount
     savedBooks {
      authors
      description
      bookId
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