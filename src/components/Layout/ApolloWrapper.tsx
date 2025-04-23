"use client";

import { client } from "@/lib/graphql/apollo";
import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

type ApolloWrapperProps = {
  dict?: any;
  dict_Pro?: any;
};

const ApolloWrapper = ({ children }: PropsWithChildren<ApolloWrapperProps>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
