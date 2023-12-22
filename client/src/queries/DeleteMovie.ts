import { gql } from '@apollo/client';

const DELETE_MOVIE = gql`

mutation($id: ID!){
    deleteMovie(id: $id)
  }
`
;

export default DELETE_MOVIE;