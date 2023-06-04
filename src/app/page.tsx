"use client";
import { contractStore } from "@/store/contractStore";
import { useEffectOnce } from "usehooks-ts";
import { useContractRead } from "wagmi";
import { abi } from "../../OmniKingdoms/deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";

export default function Home() {
  return <main></main>;
}
