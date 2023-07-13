"use client"
import "./style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { contractStore } from "@/store/contractStore";
import { useState, useRef } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import { useNetwork } from "wagmi";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";


import person1 from "@/assets/img/personas/person1.png";
import person2 from "@/assets/img/personas/person2.png";
import person3 from "@/assets/img/personas/person3.png";
import person4 from "@/assets/img/personas/person4.png";
import person5 from "@/assets/img/personas/person5.png";
import person6 from "@/assets/img/personas/person6.png";
import class0 from "@/assets/img/personas/class/class0.png";
import class3 from "@/assets/img/personas/class/class3.png";
import class5 from "@/assets/img/personas/class/class5.png";




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
        const valid = await diamond?.nameAvailable(name);
        return !valid;
      }, "name already taken"),
  });
  type FormInput = z.infer<typeof FormSchema>;

  type Player = {
    name?: string;
    gender?: string;
    image?: string;
  };
  const { chain } = useNetwork();
  const diamond = contractStore((state) => state.diamond);
  const timeout: { current: NodeJS.Timeout | null } = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [elementId, setElementId] = useState("");
  const [classSelect, setclassSelect] = useState(<Image src={class0} alt="chest" />);
  const [imageClass, setImageClass] = useState([]);
  const [genderClass, setGenderClass] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
  });

  const characterSelect = (e) => {
    var elementAdd = document.getElementById(elementId);
    elementAdd?.classList.add("gray-img");

    var elementRemove = document.getElementById(e.target.id);
    elementRemove?.classList.remove("gray-img");

    if(e.target.id == "person1"){
      setclassSelect(<Image src={class3} alt="chest" />);
    }
    else if(e.target.id == "person2"){
      setclassSelect(<Image src={class3} alt="chest" />);
    }
    else if(e.target.id == "person3"){
      setclassSelect(<Image src={class3} alt="chest" />);
    }
    else if(e.target.id == "person4"){
      setclassSelect(<Image src={class3} alt="chest" />);
    }
    else if(e.target.id == "person5"){
      setclassSelect(<Image src={class5} alt="chest" />);
    }
    else{
      setclassSelect(<Image src={class3} alt="chest" />);
    }

    setGenderClass(e.target.alt);
    setElementId(e.target.id);
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);
    reset();
    const name = await diamond?.nameAvailable(data.name);
    console.log(name);
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    // Get signer

    const player: Player = {};
    try {
      player.name = data.name.trim();
      player.gender = genderClass

      // if (data.gender === "Male") {
      //   player.gender = true;
      //   player.image =
      //     "https://infura-ipfs.io/ipfs/QmVQPguk3yttbq9inEyFNrADpZpHUTxAmgBv44i1zyLor7";
      // } else {
      //   player.gender = false;
      //   player.image =
      //     "https://infura-ipfs.io/ipfs/QmbcRntJWvu6XJM89YZcPMgvEPQmyv1yJtmaFihYrbrkJC";
      // }
      const mint = await diamond?.mint(
        player.name,
        player.image as any,
        player.gender
      );
      setIsLoading(false);
      toast.promise(mint!.wait(), {
        pending: "Tx pending: " + mint?.hash,
        success: {
          render() {
            return "Success: " + mint?.hash;
          },
        },
        error: "Tx failed",
      });
    } catch (error: any) {
      reset();

      if (error.data) {
        toast.error(error.data.message as string, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(error.reason as string, {
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
      setIsLoading(false);
    }
  };
  if (chain?.id !== 80001) {
    return (
      <>
      
      
        <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="w-1/3 top-0 left-0 m-auto">
              <Image src={person1} onClick={characterSelect} id="person1" className="gray-img hover:cursor-pointer w-full" alt="Paladin"/>
            </div>
            <div className="grid grid-cols-2 gap-4 w-2/3 m-auto">
              <div>
                <Image src={person2} onClick={characterSelect} id="person2" className="gray-img hover:cursor-pointer w-full" alt="Mage"/>
              </div>
              <div>
                <Image src={person3} onClick={characterSelect} id="person3" className="gray-img hover:cursor-pointer w-full" alt="Assassin"/>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Image src={person4} onClick={characterSelect} id="person4" className="gray-img hover:cursor-pointer w-full" alt="Rogue"/>
              </div>
              <div>
                <Image src={person5} onClick={characterSelect} id="person5" className="gray-img hover:cursor-pointer w-full" alt="Knight"/>
              </div>
              <div>
                <Image src={person6} onClick={characterSelect} id="Iperson6" className="gray-img hover:cursor-pointer w-full" alt="Witch"/>
              </div>
            </div>
          </div>
          
          <div className="">
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8">
              {classSelect}
            </dl>
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
                <span className="text-xs text-red-500">{errors.name.message}</span>
              )}{" "}
              <button disabled={isLoading} className="w-64 px-3 py-2 rounded bg-button text-white">
                {" "}
                Create Character
              </button>
            </form>
          </div>
          
        </div>

        {isLoading && (
            <div>
              <span className="relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-indigo-500 after:border-x-transparent"></span>
            </div>
          )}
        <ToastContainer theme="dark" />
      </>
    );
  }
}
