import "./style.css";
import * as z from "zod";
import Image from "next/image";
import { Tooltip } from "antd";
import { Info } from "lucide-react";
import { toast } from "react-toastify";
import { useAccount, usePublicClient, useWriteContract } from "wagmi";
import { zodResolver } from "@hookform/resolvers/zod";
import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";
// import WhitelistMintModal from "./WhitelistMintModal";
import {
  generateMerkleRoot,
  generateProof,
} from "@/utils/VaronveMarkleTree/VaronveMerkle";
import { abi } from "../../utils/DiamondABI.json";

import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState, useEffect } from "react";

import {
  BASE_TESTNET_ID,
  MANTLE_MAINNET_ID,
  BASE_MAINNET_ID,
} from "@/networkconstants";

//Image
import person1 from "@/assets/img/personas/person1.png";
import person2 from "@/assets/img/personas/person2.png";
import person3 from "@/assets/img/personas/person3.png";
import person4 from "@/assets/img/personas/person4.png";
import person5 from "@/assets/img/personas/person5.png";
import person6 from "@/assets/img/personas/person6.png";
import class1 from "@/assets/img/personas/class/class1.png";
import class2 from "@/assets/img/personas/class/class2.png";
import class3 from "@/assets/img/personas/class/class3.png";
import class4 from "@/assets/img/personas/class/class4.png";
import class5 from "@/assets/img/personas/class/class5.png";
import class6 from "@/assets/img/personas/class/class6.png";
import {
  createWalletClient,
  custom,
  encodeFunctionData,
  parseEther,
} from "viem";
import { baseGoerli } from "viem/chains";
export default function Character({ proof }: { proof: any }) {
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

  type Player = {
    name?: string;
    gender?: boolean;
    class?: 0 | 1 | 2; // 0 = warrior, 1 = assasin, 2 = mage
  };
  const publicClient = usePublicClient();
  const { address, chain } = useAccount();
  const contractAddress = contractStore((state) => state.contractAddress);
  const bastion = contractStore((state) => state.bastion);
  const smartAccountAddress = contractStore(
    (state) => state.smartAccountAddress
  );
  const setSmartAccountAddress = contractStore(
    (state) => state.setSmartAccountAddress
  );

  const setPlayers = playerStore((state) => state.setPlayers);

  const contract = contractStore((state) => state.diamond);
  const [isLoading, setIsLoading] = useState(false);
  const [elementId, setElementId] = useState("person1");
  const [classSelect, setclassSelect] = useState(
    <Image src={class1} alt="chest" className="w-select" />
  );
  const [className, setclassName] = useState(0);
  const [genderClass, setGenderClass] = useState(false);
  const [classGender, setClassGender] = useState("Warrior");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [minted, setMinted] = useState(0);
  const [isClassSelected, setIsClassSelected] = useState(true);

  const { writeContract } = useWriteContract();

  console.log(proof);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    const handleResize = async () => {
      setIsSmallScreen(window.innerWidth <= 1340);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const characterSelect = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setIsClassSelected(true);
    const target = e.target as HTMLImageElement;
    var elementAdd = document.getElementById(elementId);
    elementAdd?.classList.add("gray-img");

    var elementRemove = document.getElementById(target.id);
    elementRemove?.classList.remove("gray-img");

    if (target.id == "person1") {
      setGenderClass(false);
      setclassName(0);
      setclassSelect(<Image src={class1} alt="chest" className="w-select" />);
    } else if (target.id == "person2") {
      setGenderClass(true);
      setclassName(2);
      setclassSelect(<Image src={class2} alt="chest" className="w-select" />);
    } else if (target.id == "person3") {
      setGenderClass(true);
      setclassName(1);
      setclassSelect(<Image src={class3} alt="chest" className="w-select" />);
    } else if (target.id == "person4") {
      setGenderClass(false);
      setclassName(1);
      setclassSelect(<Image src={class4} alt="chest" className="w-select" />);
    } else if (target.id == "person5") {
      setGenderClass(true);
      setclassName(0);
      setclassSelect(<Image src={class5} alt="chest" className="w-select" />);
    } else {
      setGenderClass(false);
      setclassName(2);
      setclassSelect(<Image src={class6} alt="chest" className="w-select" />);
    }

    setClassGender(target.alt);
    setElementId(target.id);
    const element = document.getElementById("forma");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);
    reset();
    console.log(data);
    console.log(contract);
    const selectClass = className as 0 | 1 | 2;
    const name = await contract.read.nameAvailable([data.name]);
    const player: Player = {};
    try {
      player.name = data.name.trim();
      player.gender = genderClass;
      player.class = selectClass;

      let mint;

      console.log(smartAccountAddress);
      const walletClient = createWalletClient({
        account: address!,
        chain,
        transport: custom((window as any).ethereum),
      });
      // uint256 _playerDropId, bytes32[] calldata _proof, string memory _name, bool _isMale, uint256 _class
      mint = await walletClient.writeContract({
        address: contractAddress as any,
        abi,
        functionName: "claimPlayerDrop",
        args: [2, proof, player.name, player.gender, player.class],
      });

      console.log(mint);
      const loading = toast.loading(<a target="_blank">{mint}</a>);
      setIsLoading(false);
      const result = await publicClient.waitForTransactionReceipt({
        hash: mint,
      });
      if (result.status === "success") {
        toast.update(loading, {
          render: <a target="_blank">{mint}</a>,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setMinted(minted + 1);
        let players;

        players = await contract.read.getPlayers([address]);
        console.log(players);
        setPlayers((await players) as any);
      } else {
        toast.update(loading, {
          render: <a>{mint}</a>,
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
    }
  };

  //   const generateRoot = async () => {
  //     const root = await generateMerkleRoot();
  //     console.log(root);
  //     const read = await contract.read.getPlayerDrop([2]);
  //     console.log(read);
  //     const walletClient = createWalletClient({
  //       account: address!,
  //       chain,
  //       transport: custom((window as any).ethereum),
  //     });

  //     const createPlayerDrop = await walletClient.writeContract({
  //       address: contractAddress as any,
  //       abi,
  //       functionName: "createPlayerDrop",
  //       args: [root, "Varonve", parseEther("0")],
  //     });
  //   };

  return (
    <>
      <div>
        {/* <button onClick={generateRoot}> GERENATE ROOT</button> */}
        <div className="absolute top-10 mt-36 left-31 pb-6 max-[540px]:flex">
          <h1 className="title-select">Select Class</h1>
          {isSmallScreen ? (
            <Tooltip
              title="In the OmniKingdoms, the created characters function as a unique
              NFT and are 100% owned by the player, capable of being traded.
              They cannot be replicated, removed, or destroyed."
            >
              <Info height="15px" />
            </Tooltip>
          ) : (
            <p className="mt-2 w-72 text-select">
              {" "}
              In the OmniKingdoms, the created characters function as a unique
              NFT and are 100% owned by the player, capable of being traded.
              They cannot be replicated, removed, or destroyed.
            </p>
          )}
        </div>

        <div id="divId">
          <div className="divLeft">
            <dl className="mt-100">
              {classSelect}
              <div className="text-center min-[1025px]:ml-44 min-[2030px]:-ml-80 min-[1025px]:-mt-40 pb-12 text-4xl font-bold">
                {classGender}
              </div>
            </dl>

            <form
              className="flex flex-col min-[1025px]:ml-44 min-[2030px]:-ml-80 mb-4 gap-2 items-center "
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
                  disabled={isLoading || !isClassSelected}
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

        <div className="absolute max-[1025px]:mt-52 top-10 w-53 mt-36 sm:grid sm:grid-cols-1">
          <div className="w-1/3 top-0 left-0 m-auto">
            <Image
              src={person1}
              onClick={characterSelect}
              id="person1"
              className="hover:cursor-pointer w-full"
              alt="Warrior"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-2/3 m-auto my-dinamic">
            <div>
              <Image
                src={person2}
                onClick={characterSelect}
                id="person2"
                className="gray-img hover:cursor-pointer w-full"
                alt="Mage"
              />
            </div>
            <div>
              <Image
                src={person3}
                onClick={characterSelect}
                id="person3"
                className="gray-img hover:cursor-pointer w-full"
                alt="Assassin"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image
                src={person4}
                onClick={characterSelect}
                id="person4"
                className="gray-img hover:cursor-pointer w-full"
                alt="Assassin"
              />
            </div>
            <div>
              <Image
                src={person5}
                onClick={characterSelect}
                id="person5"
                className="gray-img hover:cursor-pointer w-full"
                alt="Warrior"
              />
            </div>
            <div>
              <Image
                src={person6}
                onClick={characterSelect}
                id="person6"
                className="gray-img hover:cursor-pointer w-full"
                alt="Mage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
