import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import config from './config';

const link = new HttpLink({ uri: config.graphql.url });
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

export default client;
