import { gql } from '@apollo/client';

const UPDATE_MOVIE = gql`

mutation UpdateMovie($id: ID!, $title: String!, $year: Int!){
    updateMovie(id: $id, title: $title, year: $year) {
      title
      year
    }
  }
`
;

export default UPDATE_MOVIE;