import mapa from "@/assets/img/components/Play/Map.png";
import training from "@/assets/img/components/Play/training.png"
import boss from "@/assets/img/components/Play/boss.png"
import craft from "@/assets/img/components/Play/craft.png"
import quest from "@/assets/img/components/Play/quest.png"
import leaderboard from "@/assets/img/components/Play/leaderboard.png"
import Link from "next/link";

import Image from "next/image";

export default function Play() {
  return(
    <div className="bg-map mt-36 h-971">
      <div className="right-0 absolute mt-10 mr-10">
        <Link href={"play/training"}>
          <Image
            src={training}
            className="hover:cursor-pointer icons-map"
            alt="mapa"
          />
        </Link>
        <Link href={"play/quest"}>
          <Image
            src={quest}
            className="hover:cursor-pointer icons-map my-5"
            alt="mapa"
          />
        </Link>
        <Link href={"play/craft"}>
          <Image
            src={craft}
            className="hover:cursor-pointer icons-map"
            alt="mapa"
          />
        </Link>
        <Link href={"play/leaderboard"}>
          <Image
            src={leaderboard}
            className="hover:cursor-pointer icons-map my-5"
            alt="mapa"
          />
        </Link>
        <Link href={"play/boss"}>
          <Image
            src={boss}
            className="hover:cursor-pointer icons-map"
            alt="mapa"
          />
        </Link>
        
      </div>
    </div>
      
  )
    
}
