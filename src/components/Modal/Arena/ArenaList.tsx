"use client";
import Image from "next/image";
import { Tooltip } from "antd";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import { useIsMounted } from "usehooks-ts";
import { contractStore } from "@/store/contractStore";
import { usePublicClient } from "wagmi";
import { useEffect, useState, useCallback } from "react";
import { BasicArenaStruct as Arena } from "@/types/DIAMOND1HARDHAT";
import { playerStore } from "@/store/playerStore";
// import { abi } from "../../../../Scroll/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";
import { encodeFunctionData } from "viem";

//Image
import clock from "@/assets/img/components/Play/cooldown-clock.png";
import sword from "@/assets/img/components/Dungeon/sword.png";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import coin from "@/assets/img/components/PlayerCard/icons/coin.png";

type Props = {
  id: Number | BigInt;
  disableLoading: () => void;
};

const abi = [
  {
    inputs: [],
    name: "chain",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestOmniBlock",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "sourceChain",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "parentHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "number",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "sourceTxHash",
                type: "bytes32",
              },
              {
                internalType: "string",
                name: "sourceChain",
                type: "string",
              },
              {
                internalType: "string",
                name: "destChain",
                type: "string",
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "paid",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "gasLimit",
                type: "uint64",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct OmniCodec.Tx[]",
            name: "txs",
            type: "tuple[]",
          },
        ],
        internalType: "struct OmniCodec.Block",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isXChainTx",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendOmniTx",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_chain",
        type: "string",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendXChainTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "supportedChains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "txSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "txSourceChain",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_blockNumber",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_storageProof",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_storageKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_storageValue",
        type: "bytes",
      },
    ],
    name: "verifyOmniState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "CalldataMustHaveValidPayload",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataOverOrUnderFlow",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampMustNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampsMustBeEqual",
    type: "error",
  },
  {
    inputs: [],
    name: "EachSignerMustProvideTheSameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCalldataPointersArr",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectUnsignedMetadataSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCalldataPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "RedstonePayloadMustHaveAtLeastOneDataPackage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [],
    name: "extractTimestampsAndAssertAllAreEqual",
    outputs: [
      {
        internalType: "uint256",
        name: "extractedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "CalldataMustHaveValidPayload",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataOverOrUnderFlow",
    type: "error",
  },
  {
    inputs: [],
    name: "EachSignerMustProvideTheSameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCalldataPointersArr",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectUnsignedMetadataSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCalldataPointer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataMustHaveValidPayload",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataOverOrUnderFlow",
    type: "error",
  },
  {
    inputs: [],
    name: "CanNotPickMedianOfEmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampMustNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampsMustBeEqual",
    type: "error",
  },
  {
    inputs: [],
    name: "EachSignerMustProvideTheSameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCalldataPointersArr",
    type: "error",
  },
  {
    inputs: [],
    name: "GetDataServiceIdNotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectUnsignedMetadataSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCalldataPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "RedstonePayloadMustHaveAtLeastOneDataPackage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampFromTooLongFuture",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampIsTooOld",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "aggregateValues",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extractTimestampsAndAssertAllAreEqual",
    outputs: [
      {
        internalType: "uint256",
        name: "extractedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "getAuthorisedSignerIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataServiceId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUniqueSignersThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampMilliseconds",
        type: "uint256",
      },
    ],
    name: "validateTimestamp",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CalldataMustHaveValidPayload",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataOverOrUnderFlow",
    type: "error",
  },
  {
    inputs: [],
    name: "CanNotPickMedianOfEmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampMustNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampsMustBeEqual",
    type: "error",
  },
  {
    inputs: [],
    name: "EachSignerMustProvideTheSameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCalldataPointersArr",
    type: "error",
  },
  {
    inputs: [],
    name: "GetDataServiceIdNotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectUnsignedMetadataSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCalldataPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "RedstonePayloadMustHaveAtLeastOneDataPackage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampFromTooLongFuture",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampIsTooOld",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "aggregateValues",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extractTimestampsAndAssertAllAreEqual",
    outputs: [
      {
        internalType: "uint256",
        name: "extractedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "getAuthorisedSignerIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataServiceId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUniqueSignersThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampMilliseconds",
        type: "uint256",
      },
    ],
    name: "validateTimestamp",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampFromTooLongFuture",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampIsTooOld",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataMustHaveValidPayload",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataOverOrUnderFlow",
    type: "error",
  },
  {
    inputs: [],
    name: "CanNotPickMedianOfEmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampMustNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampsMustBeEqual",
    type: "error",
  },
  {
    inputs: [],
    name: "EachSignerMustProvideTheSameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCalldataPointersArr",
    type: "error",
  },
  {
    inputs: [],
    name: "GetDataServiceIdNotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectUnsignedMetadataSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCalldataPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "RedstonePayloadMustHaveAtLeastOneDataPackage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampFromTooLongFuture",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampIsTooOld",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "aggregateValues",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extractTimestampsAndAssertAllAreEqual",
    outputs: [
      {
        internalType: "uint256",
        name: "extractedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signerAddress",
        type: "address",
      },
    ],
    name: "getAuthorisedSignerIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataServiceId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUniqueSignersThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampMilliseconds",
        type: "uint256",
      },
    ],
    name: "validateTimestamp",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CanNotPickMedianOfEmptyArray",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotAddFunctionToDiamondThatAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "_selectors",
        type: "bytes4[]",
      },
    ],
    name: "CannotAddSelectorsToZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotRemoveFunctionThatDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotRemoveImmutableFunction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotReplaceFunctionThatDoesNotExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "_selectors",
        type: "bytes4[]",
      },
    ],
    name: "CannotReplaceFunctionsFromFacetWithZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotReplaceImmutableFunction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "FunctionNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_action",
        type: "uint8",
      },
    ],
    name: "IncorrectFacetCutAction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "NoBytecodeAtAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facetAddress",
        type: "address",
      },
    ],
    name: "NoSelectorsProvidedForFacetForCut",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facetAddress",
        type: "address",
      },
    ],
    name: "RemoveFacetAddressMustBeZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "BasicArenaLoss",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "BasicArenaWin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "basicArenaId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hostId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "open",
            type: "bool",
          },
          {
            internalType: "address payable",
            name: "hostAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BasicArena",
        name: "_basicArena",
        type: "tuple",
      },
    ],
    name: "CreateBasicArena",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "EnterBasicArena",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "LeaveBasicArena",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldown",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "creatBasicArena",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "enterBasicArena",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "fightBaiscArena",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "getBasicArena",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "basicArenaId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hostId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "open",
            type: "bool",
          },
          {
            internalType: "address payable",
            name: "hostAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
        ],
        internalType: "struct BasicArena",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "getBasicArenaCooldowns",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasicArenaCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getTotalLosses",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getTotalWins",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_basicArenaId",
        type: "uint256",
      },
    ],
    name: "leaveBasicArena",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_portal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_diamond",
        type: "address",
      },
    ],
    name: "BridgeCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "class",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "health",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "magic",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxMana",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agility",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "defense",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseChain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isMale",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct BridgeFormat",
        name: "_format",
        type: "tuple",
      },
    ],
    name: "BridgePlayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "class",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "health",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "magic",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxMana",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agility",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "defense",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseChain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isMale",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct BridgeFormat",
        name: "_format",
        type: "tuple",
      },
    ],
    name: "ReMintPlayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "ReceiveGold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "SendGold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "class",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "health",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "magic",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxMana",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agility",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "defense",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseChain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isMale",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct BridgeFormat",
        name: "_format",
        type: "tuple",
      },
    ],
    name: "UnFreezePlayer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_chain",
        type: "string",
      },
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "bridgeGold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_chainCountId",
        type: "uint256",
      },
    ],
    name: "bridgePlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_chain",
        type: "string",
      },
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "bridgePlayerTest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_portal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_diamond",
        type: "address",
      },
    ],
    name: "createBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freeGold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "getChainData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "portal",
            type: "address",
          },
          {
            internalType: "address",
            name: "diamond",
            type: "address",
          },
        ],
        internalType: "struct ChainData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainCountId",
        type: "uint256",
      },
    ],
    name: "getChainDataByCountId",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "portal",
            type: "address",
          },
          {
            internalType: "address",
            name: "diamond",
            type: "address",
          },
        ],
        internalType: "struct ChainData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getFormat",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "class",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "health",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "magic",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxMana",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agility",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "defense",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseChain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isMale",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        internalType: "struct BridgeFormat",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "class",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "health",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "magic",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxMana",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agility",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "defense",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseChain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isMale",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        internalType: "struct BridgeFormat",
        name: "_format",
        type: "tuple",
      },
    ],
    name: "reMintPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct BridgegeCoinFormat",
        name: "_format",
        type: "tuple",
      },
    ],
    name: "receiveGold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "sanityCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_advancedCraftId",
        type: "uint256",
      },
    ],
    name: "AdvancedCraftEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_craftId",
        type: "uint256",
      },
    ],
    name: "BasicCraftEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicEquipmentSchemaId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "basicEquipmentSchemaId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BasicEquipmentSchema",
        name: "_basicEQuipmentSchema",
        type: "tuple",
      },
    ],
    name: "BasicEquipmentSchemaCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicEquipmentSchemaId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "basicEquipmentSchemaId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BasicEquipmentSchema",
        name: "_basicEQuipmentSchema",
        type: "tuple",
      },
    ],
    name: "BasicEquipmentSchemaUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "advancedCraftId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureSchemaId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "oldName",
            type: "string",
          },
          {
            internalType: "string",
            name: "newName",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct AdvancedCraft",
        name: "_advancedCraft",
        type: "tuple",
      },
    ],
    name: "CreateAdvancedCraft",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "oldName",
            type: "string",
          },
          {
            internalType: "string",
            name: "newName",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BasicCraft",
        name: "_basicCraft",
        type: "tuple",
      },
    ],
    name: "CreateBasicCraft",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_equipmentSchemaId",
        type: "uint256",
      },
    ],
    name: "PurchaseBasicEquipment",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_advancedCraftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
    ],
    name: "advancedCraft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_craftId",
        type: "uint256",
      },
    ],
    name: "basicCraft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treasureSchemaId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_slot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stat",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_oldName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createAdvancedCraft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_equipmenSchematId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createBasicCraft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_slot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stat",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createBasicEquipment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_advancedCraftId",
        type: "uint256",
      },
    ],
    name: "getAdvancedCraft",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "advancedCraftId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureSchemaId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "oldName",
            type: "string",
          },
          {
            internalType: "string",
            name: "newName",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct AdvancedCraft",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdvancedCraftCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_basicCraftId",
        type: "uint256",
      },
    ],
    name: "getBasicCraft",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "oldName",
            type: "string",
          },
          {
            internalType: "string",
            name: "newName",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct BasicCraft",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasicCraftCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasicEquipmentCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_basicEquipmentSchemaId",
        type: "uint256",
      },
    ],
    name: "getBasicEquipmentSchema",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "basicEquipmentSchemaId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct BasicEquipmentSchema",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
    ],
    name: "getEquipment",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pointer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rank",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "owner",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isEquiped",
            type: "bool",
          },
        ],
        internalType: "struct Equipment",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getPlayerToEquipment",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_equipmentSchemaId",
        type: "uint256",
      },
    ],
    name: "purchaseBasicEquipment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_basicEquipmentSchemaId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_slot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stat",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "updateBasicEquipmentScehma",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotAddFunctionToDiamondThatAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "_selectors",
        type: "bytes4[]",
      },
    ],
    name: "CannotAddSelectorsToZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotRemoveFunctionThatDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotRemoveImmutableFunction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotReplaceFunctionThatDoesNotExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "_selectors",
        type: "bytes4[]",
      },
    ],
    name: "CannotReplaceFunctionsFromFacetWithZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "CannotReplaceImmutableFunction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_action",
        type: "uint8",
      },
    ],
    name: "IncorrectFacetCutAction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "NoBytecodeAtAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facetAddress",
        type: "address",
      },
    ],
    name: "NoSelectorsProvidedForFacetForCut",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
    ],
    name: "NotContractOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facetAddress",
        type: "address",
      },
    ],
    name: "RemoveFacetAddressMustBeZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamond.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamond.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamond.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamond.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facetAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "facetAddresses_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "_facetFunctionSelectors",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondLoupe.Facet[]",
        name: "facets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
    ],
    name: "ItemEquiped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
    ],
    name: "ItemUnequiped",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
    ],
    name: "equip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_equipmentId",
        type: "uint256",
      },
    ],
    name: "unequip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "CreateEquipmentListing",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "CreatePlayerListing",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "DelistPlayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "PurchaseEquipmentLisitng",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "PurchasePlayerListing",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createPlayerListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "deListPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPlayerListings",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getPlayerListing",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "playerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pointer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addressPointer",
            type: "uint256",
          },
        ],
        internalType: "struct PlayerListing",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getPlayerListingsByAddress",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "purchasePlayer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "transferPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "AddMonsterAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "basicMonsterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xpReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "damage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cooldown",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BasicMonster",
        name: "_basicMonster",
        type: "tuple",
      },
    ],
    name: "CreateBasicMonster",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "basicMonsterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xpReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "damage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct MagicMonster",
        name: "_magicMonster",
        type: "tuple",
      },
    ],
    name: "CreateMagicMonster",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "DragonQuest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
    ],
    name: "EditBasicMonster",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "FightBasicMonster",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "FightMagicMonster",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "addMonsterAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_xpReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_damage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldown",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createBasicMonster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_xpReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_damage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldown",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createMagicMonster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_basicMonsterId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_xpReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_damage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldown",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "editBasicMonster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
    ],
    name: "fightBasicMonster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
    ],
    name: "fightMagicMonster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
    ],
    name: "getBasicMonster",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "basicMonsterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xpReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "damage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cooldown",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct BasicMonster",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
    ],
    name: "getBasicMonsterCooldown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasicMonsterCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
    ],
    name: "getMagicMonster",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "basicMonsterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xpReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "damage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct MagicMonster",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_monsterId",
        type: "uint256",
      },
    ],
    name: "getMagicMonsterCooldown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMagicMonsterCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
    ],
    name: "NotContractOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerDropId",
        type: "uint256",
      },
    ],
    name: "ClaimPlayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
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
        internalType: "uint256",
        name: "_class",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "NameChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
    ],
    name: "changeNameFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerDropId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isMale",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_class",
        type: "uint256",
      },
    ],
    name: "claimPlayerDrop",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerDropId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isMale",
        type: "bool",
      },
    ],
    name: "claimPlayerDropPaladin",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerDropId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "claimedStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createPlayerDrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerDropId",
        type: "uint256",
      },
    ],
    name: "getPlayerDrop",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct PlayerDrop",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerDropId",
        type: "uint256",
      },
    ],
    name: "getPlayerDropMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_playerDropId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "verifyPlayerDropWhitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_stat",
        type: "uint256",
      },
    ],
    name: "LevelUp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
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
        internalType: "uint256",
        name: "_class",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "NameChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
    ],
    name: "changeName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlocktime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getPlayer",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "health",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentHealth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "magic",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mana",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxMana",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agility",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "luck",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "wisdom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "haki",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "perception",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "defense",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "bool",
            name: "male",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "head",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "body",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "leftHand",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rightHand",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "pants",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "feet",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "neck",
                type: "uint256",
              },
            ],
            internalType: "struct PlayerSlotLib.Slot",
            name: "slot",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "playerClass",
            type: "uint256",
          },
        ],
        internalType: "struct PlayerSlotLib.Player",
        name: "player",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getPlayers",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stat",
        type: "uint256",
      },
    ],
    name: "levelUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isMale",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_class",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "nameAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "ownerOfPlayer",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "playerCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_playerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "BeginQuesting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_playerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "EndQuesting",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "endQuestGem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "endQuestGold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getCooldown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getGemBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getGemStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getGoldBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getGoldStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "startQuestGem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "startQuestGold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
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
        name: "newSigner",
        type: "address",
      },
    ],
    name: "TrustedSignerChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "LevelUpPatch",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "emitLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "levelUpScript",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicPotionSchemaId",
        type: "uint256",
      },
    ],
    name: "ConsumeBasicPotion",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicPotionSchemaId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "basicHealthPotionSchemaId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isHealth",
            type: "bool",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BasicPotionSchema",
        name: "potionSchema",
        type: "tuple",
      },
    ],
    name: "CreateBasicPotion",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_basicPotionSchemaId",
        type: "uint256",
      },
    ],
    name: "PurchaseBasicPotion",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_basicPotionSchemaId",
        type: "uint256",
      },
    ],
    name: "consumeBasicHealthPotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isHealth",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createBasicPotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_basicPotionSchemaId",
        type: "uint256",
      },
    ],
    name: "getBaiscPotionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_basicPotionSchemaId",
        type: "uint256",
      },
    ],
    name: "getBasicPotion",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "basicHealthPotionSchemaId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isHealth",
            type: "bool",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct BasicPotionSchema",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasicPotionSchemaCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_basicPotionSchemaId",
        type: "uint256",
      },
    ],
    name: "purchaseBasicPotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_playerAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "BeginTrainingBasicHealth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_playerAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "BeginTrainingMana",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_playerAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "EndTrainingBasicHealth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_playerAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "EndTrainingMana",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "endTrainingBasicHealth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "endTrainingMana",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getHealthStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "getManaStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "startTrainingBasicHealth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "startTrainingMana",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_treasureDropId",
        type: "uint256",
      },
    ],
    name: "ClaimTreasure",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treasureDropId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "claimTreasureDropGravityOrb",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treasureDropId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
    ],
    name: "claimTreasureDropKyberShard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treasureDropId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "claimedStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createTreasureDrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treasureDropId",
        type: "uint256",
      },
    ],
    name: "getTreasureDropMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_treasureDropId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "verifyTreasureDropWhitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "basicTreasureId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rank",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct TreasureSchema",
        name: "_treasureSchemaId",
        type: "tuple",
      },
    ],
    name: "MintTreasure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "basicTreasureId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rank",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct TreasureSchema",
        name: "_treasureSchemaId",
        type: "tuple",
      },
    ],
    name: "TreasureSchemaCreation",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rank",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createTreasureSchema",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_treasureId",
        type: "uint256",
      },
    ],
    name: "getTreasurePlayer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treasureSchemaId",
        type: "uint256",
      },
    ],
    name: "getTreasureSchema",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "basicTreasureId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rank",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct TreasureSchema",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasureSchemaCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_playerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_treasureSchemaId",
        type: "uint256",
      },
    ],
    name: "mintTreasure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamond.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamond.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamond.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamond.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamond.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamond.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facetAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "facetAddresses_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "facetFunctionSelectors_",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondLoupe.Facet[]",
        name: "facets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "routeAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "routeRecipient",
        type: "string",
      },
      {
        internalType: "string",
        name: "destChainId",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "requestMetadata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "requestPacket",
        type: "bytes",
      },
    ],
    name: "iSend",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "feePayerAddress",
        type: "string",
      },
    ],
    name: "setDappMetadata",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamond.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamond.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
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
        name: "previousOwner",
        type: "address",
      },
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
        name: "newSigner",
        type: "address",
      },
    ],
    name: "TrustedSignerChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "IncorrectCheckpoint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "cumulativePower",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "powerThreshold",
        type: "uint64",
      },
    ],
    name: "InsufficientPower",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newNonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidValsetNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "MalformedCurrentValidatorSet",
    type: "error",
  },
  {
    inputs: [],
    name: "MalformedNewValidatorSet",
    type: "error",
  },
  {
    inputs: [],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_addressesLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_calldataLength",
        type: "uint256",
      },
    ],
    name: "AddressAndCalldataLengthDoNotMatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "NoBytecodeAtAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default function ArenaList({ id, disableLoading }: Props) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const playergold = playerStore((state) => state.gold);

  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const [gold, setCoin] = useState(0);
  const cyberWallet = contractStore((state) => state.cyberWallet);
  const contractAddress = contractStore((state) => state.contractAddress);

  const [arena, setArena] = useState<Arena | null>(null);
  const [playerName, setPlayerName] = useState(null);
  const isMounted = useIsMounted();
  const publicClient = usePublicClient();

  const handleArena = useCallback(async () => {
    const arena = await contract.read.getBasicArena([id]);
    if (!arena.open) {
      const name = await contract.read.getPlayer([arena.hostId]);
      setPlayerName(name.name);
    }
    const blockTimestamp = await contract.read.getBasicArenaCooldowns([
      players[currentPlayerIndex!],
      id,
    ]);
    console.log(blockTimestamp);
    const startTime = Number(blockTimestamp);
    const currentTimeStamp = await contract.read.getBlocktime();
    const curTime = Number(currentTimeStamp);
    const time = curTime - startTime;
    console.log(time);
    console.log(arena.cooldown);
    const CD = Number(arena.cooldown) + 10 - Number(currentPlayer?.agility);
    const COIN = Number(arena.cost);
    console.log(CD);
    setCooldown(CD);
    setCoin(COIN);
    if (time < CD) {
      setCountdown(CD - time);
      setTimer(true);
      console.log(countdown);
    }
    setArena(arena);
    disableLoading();
  }, [contract, id, timer]);

  useEffect(() => {
    handleArena();
  }, [handleArena]);

  async function enterBasicArena() {
    try {
      let enter;
      if (cyberWallet) {
        const txdata = encodeFunctionData({
          abi,
          functionName: "enterBasicArena",
          args: [players[currentPlayerIndex!], id],
        });

        enter = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        enter = await contract.write.enterBasicArena([
          players[currentPlayerIndex!],
          id,
        ]);
      }
      const loading = toast.loading("Tx pending: " + enter);
      const result = await publicClient.waitForTransactionReceipt({
        hash: enter,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + enter,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setTimer(true);
      } else {
        toast.update(loading, {
          render: "Failed: " + enter,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
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
    }
  }

  async function fightBasicArena() {
    try {
      let fight;
      if (cyberWallet) {
        const txdata = encodeFunctionData({
          abi,
          functionName: "fightBaiscArena",
          args: [players[currentPlayerIndex!], id],
        });

        fight = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        fight = await contract.write.fightBaiscArena([
          players[currentPlayerIndex!],
          id,
        ]);
      }
      const loading = toast.loading("Tx pending: " + fight);
      const result = await publicClient.waitForTransactionReceipt({
        hash: fight,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + fight,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setTimer(true);
      } else {
        toast.update(loading, {
          render: "Failed: " + fight,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
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
    }
  }

  async function leaveBasicArena() {
    try {
      let fight;
      if (cyberWallet) {
        const txdata = encodeFunctionData({
          abi,
          functionName: "leaveBasicArena",
          args: [players[currentPlayerIndex!], id],
        });

        fight = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        const fight = await contract.write.leaveBasicArena([
          players[currentPlayerIndex!],
          id,
        ]);
      }
      const loading = toast.loading("Tx pending: " + fight);
      const result = await publicClient.waitForTransactionReceipt({
        hash: fight,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + fight,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setTimer(true);
      } else {
        toast.update(loading, {
          render: "Failed: " + fight,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
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
    }
  }

  if (!isMounted()) {
    return <></>;
  }

  const isPlayerNotIdle = currentPlayer?.status != 0;

  const isPlayerAbletoFight = playergold >= Number(arena?.cost);

  return arena && arena?.name ? (
    <div className="my-12 flex flex-col h-fit items-center stats rounded card w-52">
      <div className="-mt-[5.6rem] ">
        <div className="">
          <Image
            src={arena?.url!}
            width={100}
            height={100}
            alt="chest"
            className=" w-36 -mt-10  rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center px-4 text-lg ">
        <p className="name">{arena?.name!}</p>
      </div>
      {arena.open ? (
        <div>
          <div className="flex justify-center px-4 text-lg "></div>
          <div className=" flex gap-4 mx-10 name justify-evenly items-center mb-4">
            {timer ? (
              <Countdown
                date={Date.now() + 1000 * countdown} // 1sec * seconds
                onComplete={() => {
                  setTimer(false);
                }}
                renderer={(props) => (
                  <button
                    className="w-28 px-3 py-2 rounded bg-button text-white"
                    disabled
                  >
                    {String(props.minutes).padStart(2, "0")}:
                    {String(props.seconds).padStart(2, "0")}
                  </button>
                )}
              />
            ) : (
              <div className="flex flex-col items-center gap-2 mb-2">
                <button
                  className="w-fit px-3 py-2 rounded bg-button text-white"
                  onClick={enterBasicArena}
                  disabled={isPlayerNotIdle || !isPlayerAbletoFight}
                >
                  {isPlayerNotIdle ? "Player not idle" : "Enter Arena"}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {Number(arena.hostId) == Number(players[currentPlayerIndex!]) ? (
            <div>
              <div className="flex justify-center px-4 text-lg ">
                <p className="name">Leave Arena</p>
              </div>
              <div className=" flex gap-4 mx-10 name justify-evenly items-center mb-4">
                {timer ? (
                  <Countdown
                    date={Date.now() + 1000 * countdown} // 1sec * seconds
                    onComplete={() => {
                      setTimer(false);
                    }}
                    renderer={(props) => (
                      <button
                        className="w-28 px-3 py-2 rounded bg-button text-white"
                        disabled
                      >
                        {String(props.minutes).padStart(2, "0")}:
                        {String(props.seconds).padStart(2, "0")}
                      </button>
                    )}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <button
                      className="w-fit px-3 py-2 rounded bg-button text-white"
                      onClick={leaveBasicArena}
                    >
                      {isPlayerNotIdle ? "Leave Arena" : "Fight Arena"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center px-4 text-lg ">
                <p className="name">Fight {playerName}</p>
              </div>
              <div className=" flex gap-4 mx-10 name justify-evenly items-center mb-4">
                {timer ? (
                  <Countdown
                    date={Date.now() + 1000 * countdown} // 1sec * seconds
                    onComplete={() => {
                      setTimer(false);
                    }}
                    renderer={(props) => (
                      <button
                        className="w-28 px-3 py-2 rounded bg-button text-white"
                        disabled
                      >
                        {String(props.minutes).padStart(2, "0")}:
                        {String(props.seconds).padStart(2, "0")}
                      </button>
                    )}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <button
                      className="w-fit px-3 py-2 rounded bg-button text-white"
                      onClick={fightBasicArena}
                      disabled={isPlayerNotIdle || !isPlayerAbletoFight}
                    >
                      {isPlayerNotIdle ? "Player not idle" : "Fight Arena"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col  justify-between items-center name mb-4">
        <div className="flex justify-center items-center mb-1">
          {" "}
          {/* <Tooltip title="Life">
              <div className="flex">
                <Image
                  src={lifeIcon}
                  id="molde"
                  className="w-8 mx-1"
                  alt="levelIcon"
                />
                <p className="mt-2">{Number(dungeon?.hp!)}</p>
              </div>
            </Tooltip> */}
          {/* <Tooltip title="Damage">
              <div className="flex">
                <Image
                  src={sword}
                  id="molde"
                  className="w-8 mx-1"
                  alt="levelIcon"
                />
                <p className="mt-2">{Number(dungeon?.damage!)}</p>
              </div>
            </Tooltip> */}
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className="flex justify-center items-center mb-2">
            <Tooltip title="Cooldown">
              <div className="flex">
                <Image
                  src={clock}
                  id="molde"
                  className="w-8 h-8 mx-1"
                  alt="level"
                />
                <p className="mt-2">{cooldown}</p>
              </div>
            </Tooltip>
            <Tooltip title="gold">
              <div className="flex">
                <Image
                  src={coin}
                  id="molde"
                  className="w-8 h-8 mx-1"
                  alt="level"
                />
                <p className="mt-2">{gold}</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
