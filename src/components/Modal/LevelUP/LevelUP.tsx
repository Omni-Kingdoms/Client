"use client";
import "../index.css";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Tooltip } from "antd";
import Image from "next/image";
import { playerStore } from "@/store/playerStore";
import { toast } from "react-toastify";
import { usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";

//Image
import fechar from "@/assets/img/components/modal/X.png";
import ray from "@/assets/img/components/PlayerCard/icons/ray.png";
import sword from "@/assets/img/components/PlayerCard/icons/sword.png";
import shield from "@/assets/img/components/PlayerCard/icons/shield.png";
import magic from "@/assets/img/components/PlayerCard/icons/magic.png";
import LifeCoin from "@/assets/img/components/Training/life-coin.png";
import manaCoin from "@/assets/img/components/Training/mana-coin.png";
import frame1 from "@/assets/img/components/LevelUP/Frame.png";
import frame2 from "@/assets/img/components/LevelUP/Frame (1).png";

export default function LevelUP({
  showModalLevelUP,
}: {
  showModalLevelUP: () => void;
}) {
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);

  const [showUP, setshowUP] = useState("");
  const [statUP, setStatUP] = useState<null | Number>();

  const ref = useRef(null);
  const handleClickOutside = () => {
    showModalLevelUP();
  };

  useOnClickOutside(ref, handleClickOutside);

  async function handleLevelUp() {
    try {
      const levelUp = await contract.write.levelUp([
        players[currentPlayerIndex!],
        statUP,
      ]);
      const loading = toast.loading("Tx pending: " + levelUp);
      const result = await publicClient.waitForTransactionReceipt({
        hash: levelUp,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + levelUp,
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        showModalLevelUP();
        setCurrentPlayer(player);
      } else {
        toast.update(loading, {
          render: "Failed: " + levelUp,
          type: "error",
          isLoading: false,
          closeOnClick: true,
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

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
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
        <div
          ref={ref}
          className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6"
        >
          <button
            onClick={() => showModalLevelUP()}
            type="button"
            className="x-img"
          >
            <Image src={fechar} id="close" className="w-5" alt="close" />
          </button>
          <div className="w-full flex-wrap flex h-full justify-center items-start">
            <div className="my-12 flex flex-col h-fit items-center">
              <div className="">
                <div className="flex">
                  <Image
                    src={frame1}
                    id="frame1"
                    className="w-14 mx-2"
                    alt="frame1"
                  />
                  <h3 className="text-title">Level Up!</h3>
                  <Image
                    src={frame2}
                    id="frame2"
                    className="w-14 mx-2"
                    alt="frame2"
                  />
                </div>
                <p className="mt-3 text-describle">
                  Select a status to improve
                  <br />
                </p>
              </div>
              <div className="flex text-min stats mt-5">
                <Tooltip title="Life">
                  <button
                    onClick={() => {
                      setshowUP("Health");
                      setStatUP(1);
                    }}
                  >
                    <Image
                      src={LifeCoin}
                      id="Life"
                      className="w-12 mx-2"
                      alt="Life"
                    />
                  </button>
                </Tooltip>
                <Tooltip title="Mana">
                  <button
                    onClick={() => {
                      setshowUP("Mana");
                      setStatUP(6);
                    }}
                  >
                    <Image
                      src={manaCoin}
                      id="Mana"
                      className="w-12 mx-2"
                      alt="Mana"
                    />
                  </button>
                </Tooltip>
                <Tooltip title="Agility">
                  <button
                    onClick={() => {
                      setshowUP("Agility");
                      setStatUP(2);
                    }}
                  >
                    <Image
                      src={ray}
                      id="Agility"
                      className="w-12 mx-2"
                      alt="Agility"
                    />
                  </button>
                </Tooltip>
                <Tooltip title="Strength">
                  <button
                    onClick={() => {
                      setshowUP("Strength");
                      setStatUP(0);
                    }}
                  >
                    <Image
                      src={sword}
                      id="Strength"
                      className="w-12 mx-2"
                      alt="Strength"
                    />
                  </button>
                </Tooltip>
                <Tooltip title="Magic">
                  <button
                    onClick={() => {
                      setshowUP("Magic");
                      setStatUP(3);
                    }}
                  >
                    <Image
                      src={magic}
                      id="Magic"
                      className="w-12 mx-2"
                      alt="Magic"
                    />
                  </button>
                </Tooltip>
                <Tooltip title="Defense">
                  <button
                    onClick={() => {
                      setshowUP("Defense");
                      setStatUP(4);
                    }}
                  >
                    <Image
                      src={shield}
                      id="Defense"
                      className="w-12 mx-2"
                      alt="Defense"
                    />
                  </button>
                </Tooltip>
              </div>
              {showUP && (
                <>
                  <h5 className="mt-6 text-h5">Selected</h5>
                  <p className="mt-3 text-describle">{showUP} + 1</p>
                </>
              )}
              <button
                className="mt-8 w-fit px-3 py-2 rounded bg-button text-white"
                disabled={statUP == null}
                onClick={handleLevelUp}
              >
                Level Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
