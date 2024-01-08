"use client";
import { useAccount, useNetwork, useDisconnect, usePublicClient } from "wagmi";
import { abi } from "../../../utils/DiamondABI.json";
import { abi as baseABI } from "../../../utils/BaseDiamondABI.json";

import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";

import { Bastion } from "bastion-wallet-web-sdk";

import { useIsMounted, useUpdateEffect, useEffectOnce } from "usehooks-ts";
import { isWrongNetworkChain } from "@/utils/chainvalidator";

import {
  getContract,
  createWalletClient,
  custom,
  encodeFunctionData,
  createPublicClient,
} from "viem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { ApolloWrapper } from "./ApolloProvider";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { ApolloLink, HttpLink } from "@apollo/client";
import { BASE_MAINNET_ID, SCROLL_TESTNET_ID } from "@/networkconstants";
import { base } from "viem/chains";

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
  const setBastion = contractStore((state) => state.setBastion);
  const setSmartAccountAddress = contractStore(
    (state) => state.setSmartAccountAddress
  );
  const setContractAddress = contractStore((state) => state.setContractAddress);

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
    if (isWrongNetworkChain(chain?.id)) {
      setLoading(false);
      contractAddress = isWrongNetworkChain(chain?.id) as `0x${string}`;
      console.log(contractAddress);
    }

    if (contractAddress) {
      const walletClient = createWalletClient({
        account: address,
        chain: base,
        transport: custom((window as any).ethereum),
      });

      const _publicClient = createPublicClient({
        chain: base,
        transport: custom((window as any).ethereum),
      });

      let bastionConnect;
      let diamondContract;
      let players;

      if (chain?.id === BASE_MAINNET_ID) {
        const bastion = new Bastion();
        bastionConnect = await bastion.viemConnect;
        const { smartAccountAddress, exists } = await bastionConnect.init(
          _publicClient as any,
          walletClient as any,
          {
            apiKey: process.env.NEXT_PUBLIC_BASTION as any,
            chainId: 8453,
          }
        );

        //   if(!exists && smartAccountAddress === "0x"){
        //     //smart account doesn't exist on chain
        //     const newSmartAccountAddress = await bastionConnect.createSmartAccountByDapp();
        //     console.log("Smart account created at:",newSmartAccountAddress);
        // }
        setSmartAccountAddress(smartAccountAddress);
        setBastion(bastionConnect);

        diamondContract = getContract({
          address: contractAddress,
          abi: baseABI,
          publicClient,
          walletClient: walletClient,
        });

        const addressbastion = await bastionConnect!.getAddress();
        console.log(addressbastion);
        players = await diamondContract.read.getPlayers([addressbastion]);
      } else {
        diamondContract = getContract({
          address: contractAddress,
          abi,
          publicClient,
          walletClient: walletClient,
        });

        players = await diamondContract.read.getPlayers([address]);
      }

      setContract(diamondContract);

      console.log(players);
      setPlayers((await players) as any);
      setContractAddress(contractAddress);
      setLoading(true);
    }
    setLoading(true);
  };

  const validateAuthentication = () => {
    const isWrongNetwork = isWrongNetworkChain(chain?.id);
    if (!isWrongNetwork || !address) {
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
  console.log(loading);
  if (loading) {
    return (
      <>
        <ApolloWrapper>
          {children}
          <ToastContainer theme="dark" closeOnClick />
        </ApolloWrapper>
      </>
    );
  }

  return <></>;
}
