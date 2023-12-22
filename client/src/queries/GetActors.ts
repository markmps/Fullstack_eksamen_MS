import { gql } from '@apollo/client';

const GET_ACTORS = gql`
query{
    actors {
      _id
      age
      name
      movies {
        _id
      }
    }
  }
`;

export default GET_ACTORS;