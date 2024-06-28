import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache().restore({}),
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL
  })
});

export default client;
