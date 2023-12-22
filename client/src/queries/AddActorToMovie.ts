import { gql } from '@apollo/client';

const ADD_ACTOR_TO_MOVIE = gql`

mutation($actorId: ID!, $movieId: ID!){
    addActorToMovie(actorId: $actorId, movieId: $movieId) {
      _id
      title
      year
      actors {
        _id
        name
        age
      }
    }
  }
`
;

export default ADD_ACTOR_TO_MOVIE;