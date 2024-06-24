"use client";
import Image from "next/image";
import "./index.css";
import { toast } from "react-toastify";
import {
  getContract,
  createWalletClient,
  custom,
  createPublicClient,
  formatUnits,
  formatEther,
} from "viem";

import { useAccount, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import { parseEther } from "viem";
import fechar from "@/assets/img/components/modal/X.png";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useOnClickOutside } from "usehooks-ts";
import { gasEstimator } from "@/components/utils/Axelar";
import { EvmChain } from "@axelar-network/axelarjs-sdk";
import { ethers } from "ethers";

const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenManagerDeployer_",
        type: "address",
      },
      {
        internalType: "address",
        name: "interchainTokenDeployer_",
        type: "address",
      },
      { internalType: "address", name: "gateway_", type: "address" },
      { internalType: "address", name: "gasService_", type: "address" },
      {
        internalType: "address",
        name: "interchainTokenFactory_",
        type: "address",
      },
      { internalType: "string", name: "chainName_", type: "string" },
      {
        internalType: "address",
        name: "tokenManagerImplementation_",
        type: "address",
      },
      { internalType: "address", name: "tokenHandler_", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "AlreadyExecuted", type: "error" },
  { inputs: [], name: "EmptyData", type: "error" },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ExecuteWithInterchainTokenFailed",
    type: "error",
  },
  { inputs: [], name: "ExecuteWithTokenNotSupported", type: "error" },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ExpressExecuteWithInterchainTokenFailed",
    type: "error",
  },
  { inputs: [], name: "ExpressExecutorAlreadySet", type: "error" },
  { inputs: [], name: "GatewayToken", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "GiveTokenFailed",
    type: "error",
  },
  { inputs: [], name: "InsufficientValue", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "error", type: "bytes" }],
    name: "InterchainTokenDeploymentFailed",
    type: "error",
  },
  { inputs: [], name: "InvalidAddress", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "bytesAddress", type: "bytes" }],
    name: "InvalidBytesLength",
    type: "error",
  },
  { inputs: [], name: "InvalidChainName", type: "error" },
  { inputs: [], name: "InvalidCodeHash", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "messageType", type: "uint256" }],
    name: "InvalidExpressMessageType",
    type: "error",
  },
  { inputs: [], name: "InvalidImplementation", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "messageType", type: "uint256" }],
    name: "InvalidMessageType",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint32", name: "version", type: "uint32" }],
    name: "InvalidMetadataVersion",
    type: "error",
  },
  { inputs: [], name: "InvalidOwner", type: "error" },
  { inputs: [], name: "InvalidOwnerAddress", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "fromAccount", type: "address" },
      { internalType: "address", name: "toAccount", type: "address" },
      { internalType: "uint256", name: "accountRoles", type: "uint256" },
    ],
    name: "InvalidProposedRoles",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "implementation", type: "address" },
    ],
    name: "InvalidTokenManagerImplementationType",
    type: "error",
  },
  { inputs: [], name: "LengthMismatch", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "accountRoles", type: "uint256" },
    ],
    name: "MissingAllRoles",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "accountRoles", type: "uint256" },
    ],
    name: "MissingAnyOfRoles",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint8", name: "role", type: "uint8" },
    ],
    name: "MissingRole",
    type: "error",
  },
  { inputs: [], name: "MulticallFailed", type: "error" },
  { inputs: [], name: "NotApprovedByGateway", type: "error" },
  { inputs: [], name: "NotOwner", type: "error" },
  { inputs: [], name: "NotPaused", type: "error" },
  { inputs: [], name: "NotProxy", type: "error" },
  { inputs: [], name: "NotRemoteService", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "caller", type: "address" },
      { internalType: "address", name: "token", type: "address" },
    ],
    name: "NotToken",
    type: "error",
  },
  { inputs: [], name: "Pause", type: "error" },
  { inputs: [], name: "SetupFailed", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "TakeTokenFailed",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "TokenHandlerFailed",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes", name: "error", type: "bytes" }],
    name: "TokenManagerDeploymentFailed",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "TokenManagerDoesNotExist",
    type: "error",
  },
  { inputs: [], name: "UntrustedChain", type: "error" },
  { inputs: [], name: "ZeroAddress", type: "error" },
  { inputs: [], name: "ZeroStringLength", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "payloadHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "expressExecutor",
        type: "address",
      },
    ],
    name: "ExpressExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "payloadHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "expressExecutor",
        type: "address",
      },
    ],
    name: "ExpressExecutedWithToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "payloadHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "expressExecutor",
        type: "address",
      },
    ],
    name: "ExpressExecutionFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "payloadHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "expressExecutor",
        type: "address",
      },
    ],
    name: "ExpressExecutionWithTokenFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "tokenId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "InterchainTokenDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "tokenId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "minter",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
    ],
    name: "InterchainTokenDeploymentStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "tokenId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "InterchainTokenIdClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "tokenId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sourceAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "destinationAddress",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "InterchainTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "tokenId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "sourceAddress",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "InterchainTransferReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accountRoles",
        type: "uint256",
      },
    ],
    name: "RolesAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fromAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toAccount",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accountRoles",
        type: "uint256",
      },
    ],
    name: "RolesProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accountRoles",
        type: "uint256",
      },
    ],
    name: "RolesRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "tokenId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum ITokenManagerType.TokenManagerType",
        name: "tokenManagerType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "TokenManagerDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "tokenId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      {
        indexed: true,
        internalType: "enum ITokenManagerType.TokenManagerType",
        name: "tokenManagerType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "TokenManagerDeploymentStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "chain",
        type: "string",
      },
    ],
    name: "TrustedAddressRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "chain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "address_",
        type: "string",
      },
    ],
    name: "TrustedAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "fromOperator", type: "address" },
    ],
    name: "acceptOperatorship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "tokenId", type: "bytes32" },
      {
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "destinationAddress",
        type: "bytes",
      },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
      { internalType: "uint256", name: "gasValue", type: "uint256" },
    ],
    name: "callContractWithInterchainToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "chainName",
    outputs: [{ internalType: "string", name: "chainName_", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainNameHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "sourceChain", type: "string" },
      { internalType: "string", name: "sourceAddress", type: "string" },
      { internalType: "bytes", name: "payload", type: "bytes" },
    ],
    name: "contractCallValue",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "bytes", name: "", type: "bytes" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "contractCallWithTokenValue",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      {
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "bytes", name: "minter", type: "bytes" },
      { internalType: "uint256", name: "gasValue", type: "uint256" },
    ],
    name: "deployInterchainToken",
    outputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      {
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      {
        internalType: "enum ITokenManagerType.TokenManagerType",
        name: "tokenManagerType",
        type: "uint8",
      },
      { internalType: "bytes", name: "params", type: "bytes" },
      { internalType: "uint256", name: "gasValue", type: "uint256" },
    ],
    name: "deployTokenManager",
    outputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "commandId", type: "bytes32" },
      { internalType: "string", name: "sourceChain", type: "string" },
      { internalType: "string", name: "sourceAddress", type: "string" },
      { internalType: "bytes", name: "payload", type: "bytes" },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "bytes", name: "", type: "bytes" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "executeWithToken",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "commandId", type: "bytes32" },
      { internalType: "string", name: "sourceChain", type: "string" },
      { internalType: "string", name: "sourceAddress", type: "string" },
      { internalType: "bytes", name: "payload", type: "bytes" },
    ],
    name: "expressExecute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "bytes", name: "", type: "bytes" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "expressExecuteWithToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "flowInAmount",
    outputs: [
      { internalType: "uint256", name: "flowInAmount_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "flowLimit",
    outputs: [{ internalType: "uint256", name: "flowLimit_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "flowOutAmount",
    outputs: [
      { internalType: "uint256", name: "flowOutAmount_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasService",
    outputs: [
      {
        internalType: "contract IAxelarGasService",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {
        internalType: "contract IAxelarGateway",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "commandId", type: "bytes32" },
      { internalType: "string", name: "sourceChain", type: "string" },
      { internalType: "string", name: "sourceAddress", type: "string" },
      { internalType: "bytes32", name: "payloadHash", type: "bytes32" },
    ],
    name: "getExpressExecutor",
    outputs: [
      {
        internalType: "address",
        name: "expressExecutor",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "commandId", type: "bytes32" },
      { internalType: "string", name: "sourceChain", type: "string" },
      { internalType: "string", name: "sourceAddress", type: "string" },
      { internalType: "bytes32", name: "payloadHash", type: "bytes32" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "getExpressExecutorWithToken",
    outputs: [
      {
        internalType: "address",
        name: "expressExecutor",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint8", name: "role", type: "uint8" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "interchainTokenAddress",
    outputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interchainTokenDeployer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interchainTokenFactory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
    ],
    name: "interchainTokenId",
    outputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "tokenId", type: "bytes32" },
      {
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "destinationAddress",
        type: "bytes",
      },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "metadata", type: "bytes" },
      { internalType: "uint256", name: "gasValue", type: "uint256" },
    ],
    name: "interchainTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "isOperator",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "chain", type: "string" },
      { internalType: "string", name: "address_", type: "string" },
    ],
    name: "isTrustedAddress",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "owner_", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "paused_", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [{ internalType: "address", name: "owner_", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "proposeOperatorship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "proposeOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "chain", type: "string" }],
    name: "removeTrustedAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "tokenIds", type: "bytes32[]" },
      { internalType: "uint256[]", name: "flowLimits", type: "uint256[]" },
    ],
    name: "setFlowLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "paused", type: "bool" }],
    name: "setPauseStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "chain", type: "string" },
      { internalType: "string", name: "address_", type: "string" },
    ],
    name: "setTrustedAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenHandler",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenManager",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "tokenManagerAddress",
    outputs: [
      {
        internalType: "address",
        name: "tokenManagerAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenManagerDeployer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "tokenManagerImplementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "transferOperatorship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "tokenId", type: "bytes32" },
      { internalType: "address", name: "sourceAddress", type: "address" },
      {
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "destinationAddress",
        type: "bytes",
      },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "metadata", type: "bytes" },
    ],
    name: "transmitInterchainTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "chain", type: "string" }],
    name: "trustedAddress",
    outputs: [
      { internalType: "string", name: "trustedAddress_", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "chain", type: "string" }],
    name: "trustedAddressHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "trustedAddressHash_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "newImplementationCodeHash",
        type: "bytes32",
      },
      { internalType: "bytes", name: "params", type: "bytes" },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "validTokenAddress",
    outputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "tokenId", type: "bytes32" }],
    name: "validTokenManagerAddress",
    outputs: [
      {
        internalType: "address",
        name: "tokenManagerAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default function AxelarModal({
  close,
}: {
  showModalSell?: () => void;
  handlePlayers?: () => void;
  close: () => void;
}) {
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const [isLoading, setIsLoading] = useState(false);
  const { address, chain } = useAccount();
  const [balance, setBalance] = useState(0);

  const FormSchema = z.object({
    price: z.number(),
  });
  type FormInput = z.infer<typeof FormSchema>;

  useEffect(() => {
    balanceOf();
  });

  async function balanceOf() {
    let contractAddress;
    if (chain!.id === 534352) {
      contractAddress = "0x6b7d1c9d519dfc3a5d8d1b7c15d4e5bbe8dde1cf";
    } else {
      contractAddress = "0xa9f52545c16efc3050f5ec65c7929fcbbd16a295";
    }
    const balanceof = await publicClient.readContract({
      address: contractAddress as `0x${string}`,
      abi: [
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "balance",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      functionName: "balanceOf",
      args: [address as `0x${string}`],
    });
    console.log(balanceof);
    setBalance(Number(balanceof));
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data, e) => {
    e?.preventDefault();
    console.log(data.price);
    console.log(parseEther(String(data.price)));
    setIsLoading(true);
    reset();

    try {
      const walletClient = createWalletClient({
        account: address,
        chain,
        transport: custom((window as any).ethereum),
      });

      let gasAmount;
      if (chain!.id === 534352) {
        gasAmount = await gasEstimator(EvmChain.SCROLL, EvmChain.BASE);
        const transfer = await walletClient.writeContract({
          address: "0xB5FB4BE02232B1bBA4dC8f81dc24C26980dE9e3C",
          abi,
          functionName: "interchainTransfer",
          account: address as `0x${string}`,
          args: [
            "0x4058bb4fc449a7add596e5fa965fe6d6f7c939d63296c74dea8c7df1a7e2a263",
            "base",
            address,
            parseEther(String(data.price)),
            "0x",
            gasAmount,
          ],
          value: BigInt(gasAmount),
        });
        console.log(transfer);
      } else {
        gasAmount = await gasEstimator(EvmChain.BASE, EvmChain.SCROLL);
        const transfer = await walletClient.writeContract({
          address: "0xB5FB4BE02232B1bBA4dC8f81dc24C26980dE9e3C",
          abi,
          functionName: "interchainTransfer",
          account: address as `0x${string}`,
          args: [
            "0x4058bb4fc449a7add596e5fa965fe6d6f7c939d63296c74dea8c7df1a7e2a263",
            "scroll",
            address,
            parseEther(String(data.price)),
            "0x",
            gasAmount,
          ],
          value: BigInt(gasAmount),
        });
        console.log(transfer);
      }
      console.log(BigInt(gasAmount));
      setIsLoading(false);
    } catch (error: any) {
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false);
    }
  };
  const bridgeRef = useRef(null);

  useOnClickOutside(bridgeRef, close);
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto flex justify-center">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 backdrop-blur-sm bg-transparent bg-opacity-40"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="bg-modal w-screen inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6 t  ">
          <div className=" flex justify-center">
            <div
              ref={bridgeRef}
              className="flex flex-col  gap-16 items-center h-full   w-fit py-8 px-32 "
            >
              <h3 className="text-title mt-10">Network Bridge:</h3>
              <p className="text-title ">
                {chain!.id === 534352
                  ? "Bridge OMKG from Scroll to Base"
                  : "Bridge OMKG from Base to Scroll"}
              </p>
              <p className="text-amber-700 ">
                {chain!.id === 534352
                  ? "time estimate ~90 minutes"
                  : "time estimate ~30 minutes"}
              </p>
              <form
                className="flex flex-col mb-8 gap-2 lg:items-end sm:items-center min-[320px]:items-center  "
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
              >
                {/* <p className="  text-white text-end text-xl font-bold">
              Minted: {minted - 1}/500
            </p>
            <p className="  text-white text-end text-xl font-extrabold 64 px-3 py-2 rounded bg-button">
              SOLD OUT
            </p> */}
                <div className=" flex items-center justify-center gap-2 ">
                  <input
                    className="px-3 py-2 rounded text-center text-white w-1/3"
                    placeholder="OMKG"
                    type="number"
                    {...register("price", {
                      required: true,
                      valueAsNumber: true,
                    })}
                  />

                  <button
                    disabled={isLoading}
                    className=" px-3 py-2 rounded bg-button text-white"
                  >
                    {" "}
                    Bridge
                  </button>
                </div>
                <div className=" flex  justify-center w-full text-amber-900 font-bold ">
                  <p>
                    Max: {parseFloat(formatEther(BigInt(balance))).toFixed(0)}{" "}
                  </p>
                </div>
                <span className="text-xs text-red-500 w-full">
                  {errors.price && errors.price.message}
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
