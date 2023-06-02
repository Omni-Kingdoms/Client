"use client";
import { useAccount, useNetwork, useDisconnect, usePublicClient } from "wagmi";
import { SCROLL_ID, MANTLE_ID } from "@/networkconstants";
import { abi } from "../../../../OmniKingdoms/deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";

import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";

import { useIsMounted, useUpdateEffect, useEffectOnce } from "usehooks-ts";

import { getContract } from "viem";

export default function ContractProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();
  const publicClient = usePublicClient();

  const isMounted = useIsMounted();

  const contract = contractStore((state) => state.diamond);
  const setContract = contractStore((state) => state.setDiamond);
  const contractAddress = contractStore((state) => state.contractAddress);
  const setContractAddress = contractStore((state) => state.setContractAddress);
  const setPlayers = playerStore((state) => state.setPlayers);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);

  const resetAuthState = () => {
    setContract(null);
    setPlayers([]);
    setCurrentPlayer(null);
  };
  const HandleContractStore = () => {
    let contractAddress;
    if (chain?.id === MANTLE_ID) {
      contractAddress = process.env.NEXT_PUBLIC_MANTLE_ADDRESS as `0x${string}`;
    }
    if (chain?.id === SCROLL_ID) {
      contractAddress = process.env.NEXT_PUBLIC_SCROLL_ADDRESS as `0x${string}`;
    }
    if (contractAddress) {
      const diamondContract = getContract({
        address: contractAddress,
        abi,
        publicClient,
      });
      setContract(diamondContract);
      setContractAddress(contractAddress);
    }
  };

  const validateAuthentication = () => {
    const isWrongNetworkChain =
      chain?.id !== SCROLL_ID && chain?.id !== MANTLE_ID;
    if (isWrongNetworkChain || !address) {
      resetAuthState();
    }
    if (!contract) {
      HandleContractStore();
    }
  };
  useEffectOnce(() => {
    HandleContractStore();
  });

  useUpdateEffect(() => {
    validateAuthentication();
  }, [address, chain, disconnect]);

  if (!isMounted()) {
    return <></>;
  }

  return <>{children}</>;
}
