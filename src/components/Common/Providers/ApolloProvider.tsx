"use client";

import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

import { useNetwork } from "wagmi";

import {
  MANTLE_MAINNET_ID,
  SCROLL_TESTNET_ID,
  MANTLE_TESTNET_ID,
  OPBNB_TESTNET_ID,
  TAIKO_TESTNET_ID,
} from "@/networkconstants";
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const { chain } = useNetwork();
  const uri =
    chain?.id === SCROLL_TESTNET_ID
      ? "https://api.studio.thegraph.com/query/18216/omnikingdoms-scrollsepolia/version/latest/graphql"
      : "http://43.153.91.121:8000/subgraphs/name/OmniKingdoms/okp/graphql";
  function makeClient() {
    const httpLink = new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: uri,
    });

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              httpLink,
            ])
          : httpLink,
    });
  }

  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
