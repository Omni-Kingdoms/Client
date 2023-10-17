"use client";
import Image from "next/image";
import "./index.css";
import { toast } from "react-toastify";

import { useNetwork, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import { parseEther } from "viem";
import fechar from "@/assets/img/components/modal/X.png";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { abi } from "../../../../Deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";
import { encodeFunctionData } from "viem";

export default function TransferModal({
  id,
  showModalTransfer,
  handlePlayers,
}: {
  id: BigInt | Number;
  showModalTransfer: () => void;
  handlePlayers: () => void;
}) {
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const [isLoading, setIsLoading] = useState(false);
  const cyberWallet = contractStore((state) => state.cyberWallet);
  const contractAddress = contractStore((state) => state.contractAddress);

  console.log(handlePlayers);
  const FormSchema = z.object({
    address: z.string(),
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
    console.log(data.address);
    setIsLoading(true);
    reset();

    try {
      let transfer: any;
      if (cyberWallet) {
        const txdata = encodeFunctionData({
          abi,
          functionName: "transferPlayer",
          args: [data.address, id],
        });

        transfer = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        transfer = await contract.write.transferPlayer([data.address, id]);
      }

      setIsLoading(false);
      toast.promise(
        publicClient.waitForTransactionReceipt({ hash: transfer }),
        {
          pending: "Tx pending: " + transfer,
          success: {
            render() {
              showModalTransfer();
              setTimeout(() => {
                handlePlayers();
              }, 3000);
              return "Success: " + transfer;
            },
          },
          error: "Tx failed",
        }
      );
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
        <div className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6 ">
          <button
            onClick={() => showModalTransfer()}
            type="button"
            className="x-img"
          >
            <Image src={fechar} id="gold" className="w-5" alt="gold" />
          </button>
          <div className="flex flex-col  -mt-16 justify-center gap-16 items-center h-full tex-xl   ">
            <h3 className="text-title">Transfer Character to:</h3>
            <form
              className="flex flex-col mb-4 gap-2 lg:items-end sm:items-center min-[320px]:items-center "
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="w-full  flex items-center justify-between">
                <input
                  className=" px-3 py-2 w-full rounded text-center text-white"
                  placeholder="Address"
                  type="text"
                  {...register("address", {
                    required: true,
                  })}
                />
              </div>
              {errors.address && (
                <span className="text-xs text-red-500 w-full">
                  {errors.address.message}
                </span>
              )}{" "}
              <button
                disabled={isLoading}
                className="w-64 px-3 py-2 rounded bg-button text-white"
              >
                {" "}
                Transfer Character
              </button>
              {isLoading && (
                <div className="min-[1023px]:relative min-[1023px]:right-28">
                  <span className="relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-[#643A30] after:border-x-transparent"></span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
