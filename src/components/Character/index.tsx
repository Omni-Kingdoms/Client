"use client";
import "./style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { contractStore } from "@/store/contractStore";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNetwork, usePublicClient } from "wagmi";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "react-toastify/dist/ReactToastify.css";

import person1 from "@/assets/img/personas/person1.png";
import person2 from "@/assets/img/personas/person2.png";
import person3 from "@/assets/img/personas/person3.png";
import person4 from "@/assets/img/personas/person4.png";
import person5 from "@/assets/img/personas/person5.png";
import person6 from "@/assets/img/personas/person6.png";
import class0 from "@/assets/img/personas/class/class0.png";
import class1 from "@/assets/img/personas/class/class1.png";
import class2 from "@/assets/img/personas/class/class2.png";
import class3 from "@/assets/img/personas/class/class3.png";
import class4 from "@/assets/img/personas/class/class4.png";
import class5 from "@/assets/img/personas/class/class5.png";
import class6 from "@/assets/img/personas/class/class6.png";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Tooltip } from "antd";
import { Info } from "lucide-react";
import { playerStore } from "@/store/playerStore";
import { redirect } from "next/navigation";

export default function Character() {
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
  const { chain } = useNetwork();
  const publicClient = usePublicClient();

  const contract = contractStore((state) => state.diamond);
  const timeout: { current: NodeJS.Timeout | null } = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [elementId, setElementId] = useState("person1");
  const [classSelect, setclassSelect] = useState(
    <Image src={class1} alt="chest" className="w-full" />
  );
  const [className, setclassName] = useState(0);
  const [genderClass, setGenderClass] = useState(true);
  const [classGender, setClassGender] = useState("Knight");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [minted, setMinted] = useState(0);
  const [isClassSelected, setIsClassSelected] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };
    const setMintsLeft = async () => {
      const Mints = await contract.read.playerCount();
      setMinted(Number(Mints));
    };
    setMintsLeft();
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
      setclassSelect(<Image src={class1} alt="chest" className="w-full" />);
    } else if (target.id == "person2") {
      setGenderClass(true);
      setclassName(2);
      setclassSelect(<Image src={class2} alt="chest" className="w-full" />);
    } else if (target.id == "person3") {
      setGenderClass(true);
      setclassName(1);
      setclassSelect(<Image src={class3} alt="chest" className="w-full" />);
    } else if (target.id == "person4") {
      setGenderClass(false);
      setclassName(1);
      setclassSelect(<Image src={class4} alt="chest" className="w-full" />);
    } else if (target.id == "person5") {
      setGenderClass(true);
      setclassName(0);
      setclassSelect(<Image src={class5} alt="chest" className="w-full" />);
    } else {
      setGenderClass(false);
      setclassName(2);
      setclassSelect(<Image src={class6} alt="chest" className="w-full" />);
    }

    setClassGender(target.alt);
    setElementId(target.id);
    scroll.scrollTo(350);
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);
    reset();

    const selectClass = className as 0 | 1 | 2;
    const name = await contract.read.nameAvailable([data.name]);

    const player: Player = {};
    try {
      player.name = data.name.trim();
      player.gender = genderClass;
      player.class = selectClass;
      const mint = await contract.write.mint([
        player.name,
        player.gender,
        player.class,
      ]);
      setIsLoading(false);
      toast.promise(publicClient.waitForTransactionReceipt({ hash: mint }), {
        pending: "Tx pending: " + mint,
        success: {
          render() {
            console.log(minted);
            setMinted(minted + 1);
            return "Success: " + mint;
          },
        },
        error: "Tx failed",
      });
    } catch (error: any) {
      reset();

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
    <>
      <div className="min-h-[86.1vh] mx-auto grid max-w-2xl items-center lg:gap-y-16 px-4 min-[320px]:py-10 lg:py-24 sm:grid-cols-1 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="relative sm:grid sm:grid-cols-1">
          <div className="top-0 left-0 w-3/5 pb-6 max-[540px]:flex">
            <h1 className="lg:text-2xl sm:text-4/5 font-bold">Select Class</h1>
            {isSmallScreen ? (
              <Tooltip
                title="In the OmniKingdoms, the created characters function as a unique
                NFT and are 100% owned by the player, capable of being traded.
                They cannot be replicated, removed, or destroyed."
              >
                <Info height="15px" />
              </Tooltip>
            ) : (
              <p>
                {" "}
                In the OmniKingdoms, the created characters function as a unique
                NFT and are 100% owned by the player, capable of being traded.
                They cannot be replicated, removed, or destroyed.
              </p>
            )}
          </div>
          <div className="w-1/3 top-0 left-0 m-auto">
            <Image
              src={person1}
              onClick={characterSelect}
              id="person1"
              className="hover:cursor-pointer w-full"
              alt="Warrior"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-2/3 m-auto -my-10 max-[620px]:-my-6">
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

        <div id="divId">
          <div className="divLeft">
            <dl className="mt-16 grid grid-cols-1">
              {classSelect}
              <div className="bottom-0 absolute sm:left-60 min-[320px]:left-28 min-[520px]:left-48 min-[400px]:left-32 pb-8 text-4xl font-bold">
                {classGender}
              </div>
            </dl>
          </div>
          <form
            className="flex flex-col mb-4 gap-2 lg:items-end sm:items-center min-[320px]:items-center "
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            {/* <p className="  text-white text-end text-xl font-bold">
              Minted: {minted - 1}/500
            </p>
            <p className="  text-white text-end text-xl font-extrabold 64 px-3 py-2 rounded bg-button">
              SOLD OUT
            </p> */}
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
            )}{" "}
            <button
              disabled={isLoading || !isClassSelected}
              className="w-64 px-3 py-2 rounded bg-button text-white"
            >
              {" "}
              Create Character
            </button>
            {isLoading && (
              <div className="min-[1023px]:relative min-[1023px]:right-28">
                <span className="relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-[#643A30] after:border-x-transparent"></span>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
