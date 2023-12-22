import { gql } from '@apollo/client';

const ADD_MOVIE_TO_ACTOR = gql`

mutation($movieId: ID!, $actorId: ID!){
    addMovieToActor(movieId: $movieId, actorId: $actorId) {
      _id
      age
      name
      movies {
        _id
      }
    }
  }
`
;

export default ADD_MOVIE_TO_ACTOR;