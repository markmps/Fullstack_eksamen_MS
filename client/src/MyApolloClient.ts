import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlUri = 'http://localhost:4000/graphql';

const client = new ApolloClient({
    uri: graphqlUri,
    cache: new InMemoryCache(),
  });


export default client;