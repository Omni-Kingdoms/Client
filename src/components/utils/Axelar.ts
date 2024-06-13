import {
  AxelarQueryAPI,
  Environment,
  EvmChain,
  GasToken,
} from "@axelar-network/axelarjs-sdk";

const api = new AxelarQueryAPI({ environment: Environment.MAINNET });

export async function gasEstimator(chainFrom: EvmChain, chainTo: EvmChain) {
  const gas = await api.estimateGasFee(chainFrom, chainTo, 700000, 1.1);

  return gas as string;
}
