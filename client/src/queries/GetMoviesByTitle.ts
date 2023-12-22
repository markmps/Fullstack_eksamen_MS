import { gql } from '@apollo/client';

const GET_MOVIES_BY_TITLE = gql`

  query ($title: String!) {
    moviesbytitle(title: $title) {
      _id
      title
      year
      actors {
        _id
        name
      }
    }
  }
`
;

export default GET_MOVIES_BY_TITLE;