import { http, createConfig } from "wagmi";
import { base, scroll } from "wagmi/chains";

export const config = createConfig({
  chains: [scroll, base],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [scroll.id]: http(),
    [base.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
