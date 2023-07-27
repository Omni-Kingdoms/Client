"use client";
import Link from "next/link";
import Image from "next/image";
import "./index.css";

export default function SellModal({ id }: { id: BigInt }) {
  console.log(id);
  const TimeBar = ({ maxTime = 100, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 69;
    return (
      <div>
        <div className="health-bar">
          <div className="time-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="time-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

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
        <div className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6">
          <Link href="/play/quest" type="button" className="x-img"></Link>
          <div className="flex mt-9 ml-28">
            <div className="mr-14">
              <h1 className="text-reward my-6">
                Reward is <br />1 Gold token
              </h1>
              <div className="flex w-5 mx-9">
                <p className="text-more ml-2 mt-1">+1</p>
              </div>
            </div>
            <div className="sm:text-left">
              <h3 className="text-title">Quest to earn Gold!</h3>
              <TimeBar time={10} maxTime={60} />
              <p className="time -mt-3">00:00:60</p>
              <div className="mt-3">
                <p className="text-describle">
                  Brace yourself for the ultimate <br />
                  challenge, a quest to slay the mighty <br />
                  dragon. Will you emerge as the <br />
                  legendary Dragon Slayer or be <br />
                  consumed by its fiery wrath?
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8 ml-44">
            <button className="w-32 mr-3 px-3 py-2 rounded bg-button text-button">
              {" "}
              Begin Quest
            </button>
            <button className="w-32 ml-3 px-3 py-2 rounded bg-button text-button">
              {" "}
              End Quest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
