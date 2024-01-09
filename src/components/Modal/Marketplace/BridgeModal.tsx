"use client";
import Image from "next/image";
import "./index.css";
import { toast } from "react-toastify";

import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import { parseEther } from "viem";
import fechar from "@/assets/img/components/modal/X.png";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { abi } from "../../../utils/BaseDiamondABI.json";
import { encodeFunctionData } from "viem";
import { useOnClickOutside } from "usehooks-ts";

export default function BridgeModal({
  close,
}: {
  showModalSell?: () => void;
  handlePlayers?: () => void;
  close: () => void;
}) {
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const [isLoading, setIsLoading] = useState(false);
  const [bridgeIN, setBridgeIN] = useState(true);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const bastion = contractStore((state) => state.bastion);
  const contractAddress = contractStore((state) => state.contractAddress);

  const smartAccountAddress = contractStore(
    (state) => state.smartAccountAddress
  );

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

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data.price);
    setIsLoading(true);
    reset();

    try {
      let sell: any;
      if (bridgeIN) {
        if (bastion) {
          sell = await contract.write.claimGoldfromERC20([
            "0x6B7d1c9d519DFc3A5D8D1B7c15d4E5bbe8DdE1cF",
            data.price,
            smartAccountAddress,
          ]);
        } else {
          sell = await contract.write.claimGoldfromERC20([
            "0x6B7d1c9d519DFc3A5D8D1B7c15d4E5bbe8DdE1cF",
            data.price,
          ]);
        }
      }
      if (!bridgeIN) {
        if (bastion) {
          sell = await bastion
            .writeContract({
              account: address,
              address: contractAddress,
              abi,
              functionName: "mintGoldERC20",
              args: [
                "0x6B7d1c9d519DFc3A5D8D1B7c15d4E5bbe8DdE1cF",
                data.price,
                address,
              ],
            })
            .catch((err: Error) => console.log({ err }));
        } else {
          sell = await contract.write.mintGoldERC20([
            "0x6B7d1c9d519DFc3A5D8D1B7c15d4E5bbe8DdE1cF",
            data.price,
          ]);
        }
      }

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
              <h3 className="text-title mt-10">Bridge:</h3>
              <div className="flex gap-2 -mt-10">
                <button
                  className={`
              px-3 py-2 rounded  text-white ${
                bridgeIN ? "bg-[#3b1809]" : "bg-button"
              } 
              `}
                  onClick={() => setBridgeIN(true)}
                >
                  OMKG to Gold
                </button>
                <button
                  className={`
              px-3 py-2 rounded  text-white ${
                bridgeIN ? "bg-button" : "bg-[#3b1809] "
              } 
              `}
                  onClick={() => setBridgeIN(false)}
                >
                  Gold to OMKG
                </button>
              </div>
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
                    placeholder={bridgeIN ? "OMKG" : "Gold"}
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
