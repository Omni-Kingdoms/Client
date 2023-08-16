"use client";
import "../index.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { playerStore } from "@/store/playerStore";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { paginate } from "@/utils/helper";

//Image
import Mage1 from "@/assets/img/personas/playerCard/Mage-1.png";
import Mage0 from "@/assets/img/personas/playerCard/Mage-0.png";
import Assassin1 from "@/assets/img/personas/playerCard/Assassin-1.png";
import Assassin0 from "@/assets/img/personas/playerCard/Assassin-0.png";
import Knight1 from "@/assets/img/personas/playerCard/Knight-1.png";
import Knight0 from "@/assets/img/personas/playerCard/Knight-0.png";
import ray from "@/assets/img/components/PlayerCard/icons/ray.png";
import sword from "@/assets/img/components/PlayerCard/icons/sword.png";
import shield from "@/assets/img/components/PlayerCard/icons/shield.png";
import magic from "@/assets/img/components/PlayerCard/icons/magic.png";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png";
import dragon from "@/assets/img/components/Dungeon/dragon.png";
import level from "@/assets/img/components/PlayerCard/xp.png";
import fechar from "@/assets/img/components/modal/X.png";
import xp from "@/assets/img/components/PlayerCard/icons/XP.png";
import mana from "@/assets/img/components/PlayerCard/icons/Mana.png";
import Dungeon from "@/app/play/dungeon/page";
import ArenaList from "@/components/Modal/Arena/ArenaList";
import { contractStore } from "@/store/contractStore";

type ArenaProps = {
  close: () => void;
};

export default function Dungeons({ close }: ArenaProps) {
  const ref = useRef(null);
  const handleClickOutside = () => {
    close();
  };

  useOnClickOutside(ref, handleClickOutside);

  const players = playerStore((state) => state.players);
  const contract = contractStore((state) => state.diamond);
  const [arCount, setArCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const ar = async () => {
      const ar = await contract.read.getBasicArenaCount();
      console.log('kyleeeeeee')
      console.log(Number(ar))
      setArCount(Number(ar));
    };
    ar();
  }, [contract]);

  const fights = Array.from({ length: arCount }, (_, i) => i + 1);
  const paginatedPosts = paginate(fights, currentPage, pageSize);

  async function createArena() {
    const monster = await contract.write.creatBasicArena([
      5,
      50,
      "Serpent",
      "https://ipfs.io/ipfs/QmeEBQ7Gx3W9U8fnC8kk7yit7tEtNLhPgzPJvcLbbQPBHk",
    ]);
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 backdrop-blur-sm bg-transparent bg-opacity-40"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="bg-boss inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6">
          <button onClick={close} type="button" className="x-img">
            <Image src={fechar} id="close" className="w-5 ml-24" alt="close" />
          </button>
          <div ref={ref} className="flex flex-wrap my-16 gap-8">
            <button onClick={createArena}>Create Arena</button>
            {paginatedPosts.map((listing, index) => {
              return <ArenaList key={Number(listing)} id={listing} disableLoading={() => setIsLoading(false)} />;
            })}
            {
              isLoading && (
                <div className="flex-1 flex justify-center items-center">
                  <div className="min-[1023px]:relative min-[1023px]">
                    <span className="relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-[#643A30] after:border-x-transparent"></span>
                  </div>
                </div>
              )
            }
          </div>
          <Pagination
            items={players.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
