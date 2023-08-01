"use client";
import { useAccount, useNetwork, useDisconnect, usePublicClient } from "wagmi";
import { MANTLE_ID } from "@/networkconstants";
import { abi } from "../../../../Deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";

import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";

import { useIsMounted, useUpdateEffect, useEffectOnce } from "usehooks-ts";

import { getContract, createWalletClient, custom } from "viem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ConsoleSqlOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";

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
  };

  const HandleContractStore = async () => {
    let contractAddress;

    if (chain?.id === MANTLE_ID) {
      setLoading(false);
      contractAddress = process.env.NEXT_PUBLIC_MANTLE_ADDRESS as `0x${string}`;
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
    setLoading(true);
  };

  const validateAuthentication = () => {
    const isWrongNetworkChain = chain?.id !== MANTLE_ID;
    if (isWrongNetworkChain || !address) {
      resetAuthState();
    }
    setCurrentPlayerIndex(0);
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

  if (loading) {
    return (
      <>
        {children}
        <ToastContainer theme="dark" />
      </>
    );
  }

  return <></>;
}
