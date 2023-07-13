"use client";
import "./style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { contractStore } from "@/store/contractStore";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useNetwork, usePublicClient } from "wagmi";
import Image from "next/image";
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
    image?: string;
    class?: 0 | 1 | 2; // 0 = warrior, 1 = assasin, 2 = mage
  };
  const { chain } = useNetwork();
  const publicClient = usePublicClient();

  const contract = contractStore((state) => state.diamond);
  const timeout: { current: NodeJS.Timeout | null } = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [elementId, setElementId] = useState("");
  const [classSelect, setclassSelect] = useState(
    <Image src={class0} alt="chest" className="w-full"/>
  );
  const [className, setclassName] = useState(0);
  const [genderClass, setGenderClass] = useState(true);
  const [classGender, setClassGender] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
  });

  const characterSelect = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const target = e.target as HTMLImageElement;
    var elementAdd = document.getElementById(elementId);
    elementAdd?.classList.add("gray-img");

    var elementRemove = document.getElementById(target.alt);
    elementRemove?.classList.remove("gray-img");

    if (target.id == "person1") {
      setGenderClass(false);
      setclassName(0);
      setclassSelect(<Image src={class1} alt="chest" className="w-full"/>);
    } else if (target.id == "person2") {
      setGenderClass(true);
      setclassName(2);
      setclassSelect(<Image src={class2} alt="chest" className="w-full"/>);
    } else if (target.id == "person3") {
      setGenderClass(true);
      setclassName(1);
      setclassSelect(<Image src={class3} alt="chest" className="w-full"/>);
    } else if (target.id == "person4") {
      setGenderClass(false);
      setclassName(1);
      setclassSelect(<Image src={class4} alt="chest" className="w-full"/>);
    } else if (target.id == "person5") {
      setGenderClass(true);
      setclassName(0);
      setclassSelect(<Image src={class5} alt="chest" className="w-full"/>);
    } else {
      setGenderClass(false);
      setclassName(2);
      setclassSelect(<Image src={class6} alt="chest" className="w-full"/>);
    }

    setClassGender(target.alt)
    setElementId(target.id);
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);
    reset();

    const selectClass = className as 0 | 1 | 2
    const name = await contract.read.nameAvailable([data.name]);

    const player: Player = {};
    try {
      player.name = data.name.trim();
      player.gender = genderClass;
      player.image =
        "https://ipfs.io/ipfs/QmUbWxUd8sX4MZojKERUPmPu9YtAYfYroBS4Te1HJEKucy";
      player.class = selectClass;
      const mint = await contract.write.mint([
        player.name,
        player.image,
        player.gender,
        player.class,
      ]);
      setIsLoading(false);
      toast.promise(publicClient.waitForTransactionReceipt({ hash: mint }), {
        pending: "Tx pending: " + mint,
        success: {
          render() {
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
      <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="top-0 left-0 w-3/5 pb-6">
            <h1 className="text-2xl font-bold">Select Class</h1>
            <p> In the Omni Kingdoms, the created characters function as a unique NFT and are 100% owned by the player, capable of being traded. They cannot be replicated, removed, or destroyed.</p>
          </div>
          <div className="w-1/3 top-0 left-0 m-auto">
            <Image
              src={person1}
              onClick={characterSelect}
              id="person1"
              className="gray-img hover:cursor-pointer w-full"
              alt="Paladin"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-2/3 m-auto">
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
                alt="Rogue"
              />
            </div>
            <div>
              <Image
                src={person5}
                onClick={characterSelect}
                id="person5"
                className="gray-img hover:cursor-pointer w-full"
                alt="Knight"
              />
            </div>
            <div>
              <Image
                src={person6}
                onClick={characterSelect}
                id="person6"
                className="gray-img hover:cursor-pointer w-full"
                alt="Witch"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="divLeft">
            <dl className="mt-16 grid grid-cols-1">
              {classSelect}
              <div className="textDiv pb-8 text-4xl font-bold">
                {classGender}
              </div>
            </dl>
          </div>
          
          <form
            className="flex flex-col mb-4 gap-2 items-end text-left"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
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
              disabled={isLoading}
              className="w-64 px-3 py-2 rounded bg-button text-white"
            >
              {" "}
              Create Character
            </button>
          </form>

          {isLoading && (
            <div>
              <span className="relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-indigo-500 after:border-x-transparent"></span>
            </div>
          )}
        </div>

      </div>

      
    </>
  );
}