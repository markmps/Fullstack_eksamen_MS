import { gql } from '@apollo/client';

const CREATE_MOVIE = gql`

  mutation CreateMovie($title: String!, $year: Int!) {
    createMovie(title: $title, year: $year) {
      _id
      title
      year
    }
  }
`;

export default CREATE_MOVIE;
