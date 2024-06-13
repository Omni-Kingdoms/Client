"use client";
import Image from "next/image";
import "./index.css";
import { toast } from "react-toastify";
import abi from "./InterchainTokenServiceABI.json";
import {
  getContract,
  createWalletClient,
  custom,
  createPublicClient,
} from "viem";

import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import { parseEther } from "viem";
import fechar from "@/assets/img/components/modal/X.png";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useOnClickOutside } from "usehooks-ts";
import { gasEstimator } from "@/components/utils/Axelar";
import { EvmChain } from "@axelar-network/axelarjs-sdk";
import { ethers } from "ethers";

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
  const { address } = useAccount();
  const { chain } = useNetwork();

  const FormSchema = z.object({
    price: z.number(),
  });
  type FormInput = z.infer<typeof FormSchema>;

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
          <div className=" flex align-center justify-center">
            <div
              ref={bridgeRef}
              className="flex flex-col justify-center gap-16 items-center h-full   w-fit py-8 px-32"
            >
              <h3 className="text-title mt-10">Network Bridge:</h3>
              <p className="text-title">
                {chain!.id === 534352
                  ? "Bridge OMKG from Scroll to Base"
                  : "Bridge OMKG from Base to Scroll"}
              </p>
              <p className="text-cs">
                {chain!.id === 534352
                  ? "time estimate ~90 minutes"
                  : "time estimate ~30 minutes"}
              </p>
              <div className="flex gap-2 -mt-10"></div>
              <form
                className="flex flex-col mb-8 gap-2 lg:items-end sm:items-center min-[320px]:items-center "
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
