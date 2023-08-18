"use client";
import "../index.css";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Image from "next/image";

//Image
import manaCoin from "@/assets/img/components/Training/mana-coin.png"
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png"
import level from "@/assets/img/components/PlayerCard/xp.png"
import fechar from "@/assets/img/components/modal/X.png"
import { playerStore } from '@/store/playerStore';
import Loading from '@/app/play/loading';

export default function ManaTraining({
  showModalMana,
}: {
  showModalMana: () => void;
}) {
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const ref = useRef(null);
  const handleClickOutside = () => {
    showModalMana();
  };

  useOnClickOutside(ref, handleClickOutside);

  const [isTrainingLoading] = useState<boolean>(false);

  const TimeBar = ({ maxTime = 100, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 69;
    return (
      <div>
        <div className="bar-time">
          <div className="time-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="time-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  /* Missing start/end training method implementation */

  const isLifeFull = currentPlayer?.currentHealth === currentPlayer?.health;
  const isPlayerNotIdle = currentPlayer?.status != 0;

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
            onClick={() => showModalMana()}
            type="button"
            className="x-img"
          >
            <Image src={fechar} id="close" className="w-5" alt="close" />
          </button>
          <div className="flex mt-9 ml-28">
            <div className="mr-14">
              <Image src={manaCoin} id="manaCoin" className="" alt="manaCoin" />
              <h1 className="text-reward my-6">
                Reward is <br />1 Mana token
              </h1>
              <div className="flex w-5 mx-9">
                <Image
                  src={manaIcon}
                  id="manaIcon"
                  className="w-5"
                  alt="manaIcon"
                />
                <p className="text-more ml-2 mt-1">+1</p>
              </div>

            </div>
            <div className="sm:text-left">
              <h3 className="text-title">Quest to earn Mana!</h3>
              <TimeBar time={10} maxTime={60} />
              <Image
                src={level}
                id="molde"
                className="relative -top-4 left-1 h-4"
                alt="level"
              />
              <p className="time -mt-3">00:00:60</p>
              <div className="mt-3">
                <p className="text-describle">
                  Brace yourself for the ultimate <br/>
                  challenge, a quest to slay the mighty <br/>
                  dragon. Will you emerge as the <br/>
                  legendary Dragon Slayer or be <br/>
                  consumed by its fiery wrath?
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8 ml-44">
          {isLifeFull ? (
              <p className="text-describle -mt-4">Your life is full</p>
            ) : (
              isPlayerNotIdle && (
                <p className="text-describle -mt-4">You need to be idle</p>
              )
            )}
            <button
              className="w-32 mr-3 px-3 py-2 rounded bg-button text-button"
              disabled={isLifeFull || isPlayerNotIdle}
            >
              {
                isTrainingLoading ? <Loading color="#d1d5db" /> : 'End Train'
              }
            </button>
            <button className="w-32 ml-3 px-3 py-2 rounded bg-button text-button">
              {
                isTrainingLoading ? <Loading color="#d1d5db" /> : 'End Train'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
