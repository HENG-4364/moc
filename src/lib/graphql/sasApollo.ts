import { ApolloClient, from, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from "../../utils/get-cookie";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { settings } from "../settings";

const API_URL = settings.sasApi;

const authLink = setContext(async (_, { headers }) => {
  const token = await getCookie();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const uploadLink: any = createUploadLink({
  uri: API_URL,
  headers: {
    "apollo-require-preflight": "true",
  },
  fetchOptions: { cache: "no-store" },
});

export const sasClient = new ApolloClient({
  link: from([authLink, uploadLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
  ssrMode: true,
});
