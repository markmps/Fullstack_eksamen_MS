import { gql } from '@apollo/client';

const CREATE_ACTOR = gql`

mutation($name: String!, $age: Int!){
    addActor(name: $name, age: $age) {
      _id
      age
      name
    }
  }
`
;

export default CREATE_ACTOR;