import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient: getClientScroll } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://api.studio.thegraph.com/query/18216/omnikingdoms-scrollsepolia/version/latest/graphql",
    }),
  });
});
export const { getClient: getClientTaiko } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "http://43.153.91.121:8000/subgraphs/name/OmniKingdoms/okp/graphql",
    }),
  });
});
