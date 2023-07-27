"use client";
import "./index.css";
import gold from "@/assets/img/components/Quest/coin.png";
import gem from "@/assets/img/components/Quest/diamond.png";
import GemQuest from "@/components/Modal/Quest/GemQuest";
import GoldQuest from "@/components/Modal/Quest/GoldQuest";

import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Quest({ searchParams }: Props) {
  const showModalGold = searchParams?.gold;
  const showModalGem = searchParams?.gem;

  return (
    <div className="div-father">
      <div className="bg-quest h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Link href={"quest/?gold=true"}>
          <Image
            src={gold}
            className="icons-map hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
        <Link href={"quest/?gem=true"}>
          <Image
            src={gem}
            className="icons-map hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
      </div>
      {showModalGold && <GoldQuest />}
      {showModalGem && <GemQuest />}
    </div>
  );
}
