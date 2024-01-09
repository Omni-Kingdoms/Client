import Image from "next/image";
import paperback1 from "@/assets/img/components/Equipment/paperback1.png";
import closeIcon from "@/assets/img/components/modal/X.png";
import paladin from "@/assets/img/personas/class/paladin.png";
import femalepaladin from "@/assets/img/personas/class/femalepaladin.png";
import pirate from "@/assets/img/personas/class/pirate.png";
import femalepirate from "@/assets/img/personas/class/femalepirate.png";
import { contractStore } from "@/store/contractStore";
import { abi } from "../../utils/DiamondABI.json";

import { Tooltip } from "antd";
import { Info } from "lucide-react";

import "./index.css";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useOnClickOutside } from "usehooks-ts";
import { toast } from "react-toastify";
import { playerStore } from "@/store/playerStore";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { encodeFunctionData, parseEther } from "viem";
import { BASE_MAINNET_ID } from "@/networkconstants";

type EquipmentProps = {
  close: () => void;
  proof: String[];
};

export default function WhitelistMintModal({ close, proof }: EquipmentProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const contract = contractStore((state) => state.diamond);
  const [isLoading, setIsLoading] = useState(false);
  const [genderClass, setGenderClass] = useState(true);
  const setPlayers = playerStore((state) => state.setPlayers);
  const publicClient = usePublicClient();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const contractAddress = contractStore((state) => state.contractAddress);
  const bastion = contractStore((state) => state.bastion);
  const smartAccountAddress = contractStore(
    (state) => state.smartAccountAddress
  );
  const setSmartAccountAddress = contractStore(
    (state) => state.setSmartAccountAddress
  );

  type Player = {
    name?: string;
    gender?: boolean;
    class?: 3; // 0 = warrior, 1 = assasin, 2 = mage
  };

  const equipmentListRef = useRef(null);

  useOnClickOutside(equipmentListRef, close);
  const FormSchema = z.object({
    name: z
      .string()
      .min(3, { message: "The name must be 3 characters or more" })
      .max(10, { message: "The name must be 10 characters or less" })
      .regex(/^[a-zA-Z0-9_]+$/, "only letters, numbers and underscore")
      .refine(async (name) => {
        const valid = await contract.read.nameAvailable([name]);
        return !valid;
      }, "name already taken"),
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
    setIsLoading(true);
    reset();
    console.log(data);
    console.log(contract);
    const name = await contract.read.nameAvailable([data.name]);
    const player: Player = {};
    try {
      player.name = data.name.trim();
      player.gender = genderClass;
      player.class = 3;
      let smartAddress = smartAccountAddress;
      if (smartAccountAddress === "0x") {
        //smart account doesn't exist on chain
        const newSmartAccountAddress = await bastion.createSmartAccountByDapp();
        console.log("Smart account created at:", newSmartAccountAddress);
        setSmartAccountAddress(await newSmartAccountAddress);
        smartAddress = newSmartAccountAddress;
        console.log(smartAccountAddress);
        console.log(smartAddress);
      }
      let mint;
      if (bastion) {
        //uint256 _playerDropId, bytes32[] calldata _proof, string memory _name, bool _isMale, address _to
        mint = await contract.write.claimPlayerDropPirate([
          1,
          proof,
          player.name,
          player.gender,
          smartAddress,
        ]);
      } else {
        console.log(proof);
        mint = await contract.write.claimPlayerDropPaladin(
          [1, proof, player.name, player.gender],
          { value: parseEther("0.01") }
        );
      }
      console.log(mint);
      const loading = toast.loading(
        <a href={`https://scroll.l2scan.co/tx/${mint}`} target="_blank">
          {mint}
        </a>
      );
      setIsLoading(false);
      const result = await publicClient.waitForTransactionReceipt({
        hash: mint,
      });
      if (result.status === "success") {
        toast.update(loading, {
          render: (
            <a href={`https://scroll.l2scan.co/tx/${mint}`} target="_blank">
              {mint}
            </a>
          ),
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        let players;
        if (bastion) {
          players = await contract.read.getPlayers([smartAddress]);
        } else {
          players = await contract.read.getPlayers([address]);
        }
        console.log(players);
        setPlayers((await players) as any);
      } else {
        toast.update(loading, {
          render: (
            <a href={`https://scroll.l2scan.co/tx/${mint}`} target="_blank">
              {mint}
            </a>
          ),
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error: any) {
      reset();
      console.log(error);
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setIsLoading(false);
      close();
    }
  };

  useEffect(() => {
    const handleResize = async () => {
      setIsSmallScreen(window.innerWidth <= 1340);
      const read = await contract.read.getPlayerDrop([1]);
      console.log(read);
    };
    // const setMintsLeft = async () => {
    //   const Mints = await contract.read.playerCount();
    //   setMinted(Number(Mints));
    // };
    // setMintsLeft();
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`fixed z-50 inset-0 overflow-y-auto  `}>
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={equipmentListRef} className="bg-equip relative flex flex-col">
          <Image
            src={paperback1}
            width={1800}
            alt="Equipment1 background"
            className="invisible min-w-[420px] w-[100vw] max-w-[800px]"
          />
          <div className="content absolute inset-0 p-16 sm:p-20">
            <button
              type="button"
              className="close-icon absolute right-[5rem] top-[4rem] z-50 min-[1200px]"
              onClick={close}
            >
              <Image src={closeIcon} alt="close icon" />
            </button>
            <div
              className={`h-[100%] w-[100%] base-bg relative  flex flex-col md:flex-row-reverse gap-4`}
            >
              <div className=" flex flex-col justify-around items-center max-[540px]:flex ">
                <div className="">
                  <h1 className="title-select2">Veteran Players,</h1>

                  <p className="mt-2 w-72 text-select2">
                    {" "}
                    {`As a gesture of our gratitude for your pivotal role in our
                    game's success, we're excited to offer you an exclusive
                    opportunity to mint the Special class. This class
                    symbolize your loyalty and dedication, granting unique
                    in-game privileges and benefits. Thank you for being a
                    crucial part of our community.`}
                  </p>
                </div>
                <div className="">
                  <div id="">
                    <div className="">
                      <dl className="">
                        <div className="text-4xl font-bold text-center mb-3 text-[#643a28] title-select2">
                          {chain?.id === BASE_MAINNET_ID
                            ? "Base Pirate"
                            : "Scroll Paladin"}
                        </div>
                      </dl>{" "}
                      <p className=" text-center text-[#643a28]  text-xl font-bold">
                        {chain?.id === BASE_MAINNET_ID
                          ? "FREE"
                          : "Price: 0.01ETH ≅ 15USD"}
                      </p>
                      <div className="w-64 px-3 py-2 mb-1 rounded bg-button text-white">
                        <button
                          onClick={() => setGenderClass(!genderClass)}
                          className="w-64  rounded text-center "
                        >
                          {genderClass ? "male" : "female"}
                        </button>
                      </div>
                      <form
                        className="flex flex-col  mb-4 gap-2 items-center "
                        onSubmit={handleSubmit(onSubmit)}
                        autoComplete="off"
                        id="forma"
                      >
                        <>
                          <input
                            className="w-64 px-3 py-2 rounded text-center"
                            placeholder="Player Name"
                            type="text"
                            {...register("name", {
                              required: true,
                            })}
                          />

                          {errors.name && (
                            <span className="text-xs text-red-500">
                              {errors.name.message}
                            </span>
                          )}
                          <button
                            disabled={isLoading}
                            className="w-64 px-3 py-2 rounded bg-button text-white"
                          >
                            {" "}
                            Create Character
                          </button>
                        </>
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
              <div className="w-1/2  ml-10 relative">
                {chain?.id === BASE_MAINNET_ID ? (
                  <Image
                    src={genderClass ? pirate : femalepirate}
                    layout="fill"
                    objectFit="contain"
                    alt="Image"
                    className="mask-2 inset-0 "
                  />
                ) : (
                  <Image
                    src={genderClass ? paladin : femalepaladin}
                    layout="fill"
                    objectFit="contain"
                    alt="Image"
                    className="mask-2 inset-0 "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
