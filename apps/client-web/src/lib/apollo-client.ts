import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URI = `${process.env.NEXT_PUBLIC_API_HOSTNAME}/graphql`;

const createApolloClient = () => {
  return new ApolloClient({
    uri: GRAPHQL_URI,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
