"use client";
import { useAccount, useDisconnect, usePublicClient } from "wagmi";
import { abi } from "../../../utils/DiamondABI.json";
import { abi as baseABI } from "../../../utils/BaseDiamondABI.json";
import {
  ENTRYPOINT_ADDRESS_V06,
  ENTRYPOINT_ADDRESS_V07,
  createSmartAccountClient,
  walletClientToSmartAccountSigner,
  getUserOperationHash,
  UserOperation,
} from "permissionless";
import { signerToSimpleSmartAccount } from "permissionless/accounts";
import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";

import { Bastion } from "bastion-wallet-sdk";

import { useIsMounted, useUpdateEffect, useEffectOnce } from "usehooks-ts";
import { isWrongNetworkChain } from "@/utils/chainvalidator";
import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import {
  getContract,
  createWalletClient,
  custom,
  encodeFunctionData,
  createPublicClient,
  http,
  WalletClient,
  PublicClient,
  PublicClientConfig,
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
import { useWalletClient } from "wagmi";
import {
  ENTRYPOINT_ADDRESS_V06_TYPE,
  EntryPoint,
} from "permissionless/_types/types";
import EoaTransferModal from "@/components/Character/EoaTransferModal";

export default function ContractProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const [loading, setLoading] = useState(false);
  const [playersEOA, setPlayersEOA] = useState([]);

  const publicClient = usePublicClient();
  const { data: walletClientAA } = useWalletClient();
  const isMounted = useIsMounted();

  const contract = contractStore((state) => state.diamond);
  const setBundlerClient = contractStore((state) => state.setBundlerClient);
  const setContract = contractStore((state) => state.setDiamond);
  const setBastion = contractStore((state) => state.setBastion);
  const setSmartAccountAddress = contractStore(
    (state) => state.setSmartAccountAddress
  );
  const setContractAddress = contractStore((state) => state.setContractAddress);
  const setUserOp = contractStore((state) => state.setUserOp);

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
        account: address!,
        chain,
        transport: custom((window as any).ethereum),
      });

      const _publicClient = createPublicClient({
        chain,
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
        console.log(smartAccountAddress);

        setSmartAccountAddress(smartAccountAddress);
        setBastion(bastionConnect);

        diamondContract = getContract({
          address: contractAddress,
          abi: baseABI,
          client: {
            public: publicClient,
            wallet: walletClient,
          },
        });
        if (!exists && smartAccountAddress === "0x") {
          //smart account doesn't exist on chain
          // const newSmartAccountAddress = await bastionConnect.createSmartAccountByDapp();
          // console.log("Smart account created at:",newSmartAccountAddress);
          players = [];
        } else {
          console.log("exists");
          players = await diamondContract.read.getPlayers([
            smartAccountAddress,
          ]);
        }
      } else {
        if (!walletClientAA) {
          setLoading(true);
          return;
        }
        const signer = walletClientToSmartAccountSigner(walletClientAA);

        const simpleSmartAccountClient = await signerToSimpleSmartAccount(
          publicClient as any,
          {
            entryPoint: ENTRYPOINT_ADDRESS_V06,
            signer: signer,
          }
        );

        const paymasterClient = createPimlicoPaymasterClient({
          entryPoint: ENTRYPOINT_ADDRESS_V06,
          transport: http(
            `https://api.pimlico.io/v2/scroll/rpc?apikey=${process.env
              .NEXT_PUBLIC_PIMLICO!}`
          ),
        });
        const pimlicoBundlerClient = createPimlicoBundlerClient({
          transport: http(
            `https://api.pimlico.io/v2/scroll/rpc?apikey=${process.env
              .NEXT_PUBLIC_PIMLICO!}`
          ),
          entryPoint: ENTRYPOINT_ADDRESS_V06,
        });

        // setBundlerClient(pimlicoBundlerClient);

        await pimlicoBundlerClient.getUserOperationByHash;

        const smartAccountClient = createSmartAccountClient({
          account: simpleSmartAccountClient,
          chain,
          bundlerTransport: http(
            `https://api.pimlico.io/v2/scroll/rpc?apikey=${process.env
              .NEXT_PUBLIC_PIMLICO!}`
          ),
          entryPoint: ENTRYPOINT_ADDRESS_V06,
          middleware: {
            sponsorUserOperation: paymasterClient.sponsorUserOperation,
            gasPrice: async () =>
              (await pimlicoBundlerClient.getUserOperationGasPrice()).standard, // optional, if using a paymaster
          },
        });
        console.log(smartAccountClient);
        diamondContract = getContract({
          address: contractAddress,
          abi,
          client: {
            public: publicClient,
            wallet: smartAccountClient,
          },
        });
        setSmartAccountAddress(smartAccountClient.account.address);

        const playersAA: any = await diamondContract.read.getPlayers([
          smartAccountClient.account.address,
        ]);
        const playersEOA: any = await diamondContract.read.getPlayers([
          address,
        ]);

        console.log(playersAA);
        console.log(playersEOA);
        setPlayersEOA(playersEOA);
        players = playersEOA.concat(playersAA);
      }

      console.log(diamondContract);

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
  }, [address, chain, disconnect, walletClientAA, publicClient]);

  if (!isMounted()) {
    return <></>;
  }

  if (loading) {
    return (
      <>
        <ApolloWrapper>
          {children}
          {playersEOA[0] ? (
            <EoaTransferModal
              close={() => {
                setPlayersEOA([]);
              }}
              playerId={playersEOA[0]}
            />
          ) : (
            <></>
          )}
          <ToastContainer theme="dark" closeOnClick />
        </ApolloWrapper>
      </>
    );
  }

  return <></>;
}
