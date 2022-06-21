import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ookwpq0j8f01ywfetd2cax/master",
  cache: new InMemoryCache(),
});
