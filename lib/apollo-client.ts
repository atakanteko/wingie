import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

const client = new ApolloClient({
  ssrMode: true,
  uri: 'http://localhost:4000',
  cache: new InMemoryCache().restore({}),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
});

export default client;
