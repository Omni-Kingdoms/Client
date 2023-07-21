"use client";
import { useAccount, useNetwork, useDisconnect, usePublicClient } from "wagmi";
import { MANTLE_ID } from "@/networkconstants";
import { abi } from "../../../../mantle-deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";

import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";

import { useIsMounted, useUpdateEffect, useEffectOnce } from "usehooks-ts";

import { getContract, createWalletClient, custom } from "viem";
import PlayerProvider from "./PlayerProvider";
import { ToastContainer } from "react-toastify";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function ContractProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();
  const [loading, setLoading] = useState(false);

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
    setCurrentPlayerIndex(0);
    localStorage.removeItem("PlayerIndex");
  };

  const HandleContractStore = async () => {
    let contractAddress;
    if(!chain){
      setCurrentPlayerIndex(0);
      localStorage.removeItem("PlayerIndex")
      setLoading(true);
    }

    if (chain?.id === MANTLE_ID) {
      setLoading(false);
      contractAddress = process.env
        .NEXT_PUBLIC_MANTLE_ADDRESS as `0x${string}`;
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
      setLoading(true);
    }
  };

  const validateAuthentication = () => {
    const isWrongNetworkChain = chain?.id !== MANTLE_ID;
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
  
  // console.log(players.length)
  if(loading){
    return (
      <>
        {children}
        <ToastContainer theme="dark" />
      </>
    );
  }

  return <></>;
}
