import { gql } from '@apollo/client';

const GET_MOVIES = gql`
query{
    movies {
      _id
      title
      year
      actors {
        _id
      }
      reviews {
        _id
      }
    }
  }
`;

export default GET_MOVIES;