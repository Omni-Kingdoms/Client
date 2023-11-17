"use client";
import { useAccount, useNetwork, useDisconnect, usePublicClient } from "wagmi";
import { abi } from "../../../utils/DiamondABI.json";

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
import { BASE_TESTNET_ID, SCROLL_TESTNET_ID } from "@/networkconstants";
import { BastionConnect } from "bastion-wallet-web-sdk/dist/modules/bastionConnect";
import { baseGoerli } from "viem/chains";

export default function ContractProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address: wagmiAddress } = useAccount();
  const { chain: wagmiChain } = useNetwork();
  const { disconnect } = useDisconnect();
  const [loading, setLoading] = useState(false);

  const publicClient = usePublicClient();

  const isMounted = useIsMounted();

  const contract = contractStore((state) => state.diamond);
  const setContract = contractStore((state) => state.setDiamond);
  const setBastion = contractStore((state) => state.setBastion);
  const setContractAddress = contractStore((state) => state.setContractAddress);
  const cyberWallet = contractStore((state) => state.cyberWallet);
  let address: any;
  let chain: any;
  if (cyberWallet) {
    address = cyberWallet.cyberAccount.address;
    chain = cyberWallet;
  } else {
    address = wagmiAddress;
    chain = wagmiChain;
  }
  const setPlayers = playerStore((state) => state.setPlayers);
  const setCurrentPlayerIndex = playerStore(
    (state) => state.setCurrentPlayerIndex
  );

  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  console.log(cyberWallet);
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
      console.log(cyberWallet);
      const walletClient = createWalletClient({
        account: address,
        chain: baseGoerli,
        transport: custom((window as any).ethereum),
      });
      const _publicClient = createPublicClient({
        chain: baseGoerli,
        transport: custom((window as any).ethereum),
      });
      let bastionConnect;
      if (chain?.id === BASE_TESTNET_ID) {
        const bastion = new Bastion();
        bastionConnect = await bastion.viemConnect;
        console.log(process.env.NEXT_PUBLIC_BASTION);
        await bastionConnect.init(_publicClient as any, walletClient, {
          apiKey: process.env.NEXT_PUBLIC_BASTION as any,
          chainId: 84531,
        });
        console.log(bastionConnect);

        setBastion(bastionConnect);
      }
      const diamondContract = getContract({
        address: contractAddress,
        abi,
        publicClient,
        walletClient: walletClient,
      });
      setContract(diamondContract);
      console.log(diamondContract);
      const addressbastion = await bastionConnect!.getAddress();
      console.log(addressbastion);
      const players = await diamondContract.read.getPlayers([address]);
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
