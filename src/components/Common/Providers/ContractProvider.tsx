"use client";
import { useAccount, useNetwork, useDisconnect, usePublicClient } from "wagmi";
import { MANTLE_MAINNET_ID } from "@/networkconstants";
import { abi } from "../../../../mantle-deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";

import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";

import { useIsMounted, useUpdateEffect, useEffectOnce } from "usehooks-ts";

import { getContract, createWalletClient, custom } from "viem";
import PlayerProvider from "./PlayerProvider";
import { ToastContainer } from "react-toastify";

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
  const setContractAddress = contractStore((state) => state.setContractAddress);
  const players = playerStore((state) => state.players);

  const setPlayers = playerStore((state) => state.setPlayers);
  const setCurrentPlayerIndex = playerStore(
    (state) => state.setCurrentPlayerIndex
  );
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const resetAuthState = () => {
    setContract(null);
    setPlayers([]);
    setCurrentPlayer(null);
    setCurrentPlayerIndex(null);
  };
  const HandleContractStore = async () => {
    let contractAddress;

    if (chain?.id === MANTLE_MAINNET_ID) {
      contractAddress = process.env
        .NEXT_PUBLIC_MANTLE_MAINNET_ADDRESS as `0x${string}`;
    }
    if (contractAddress) {
      const walletClient = createWalletClient({
        chain: chain,
        transport: custom((window as any).ethereum),
        account: address,
      });
      const diamondContract = getContract({
        address: contractAddress,
        abi,
        publicClient,
        walletClient,
      });
      setContract(diamondContract);
      setContractAddress(contractAddress);
      const players = await diamondContract.read.getPlayers([address]);
      setPlayers((await players) as any);
      setCurrentPlayerIndex(0);
    }
  };

  const validateAuthentication = () => {
    const isWrongNetworkChain = chain?.id !== MANTLE_MAINNET_ID;
    if (isWrongNetworkChain || !address) {
      resetAuthState();
    }

    HandleContractStore();
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

  return (
    <>
      {/* {players.length !== 0 && <PlayerProvider />} */}
      {children}
      <ToastContainer theme="dark" />
    </>
  );
}
