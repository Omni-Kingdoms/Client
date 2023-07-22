import mapa from "@/assets/img/components/Play/Map.png";
import training from "@/assets/img/components/Play/training.png"
import boss from "@/assets/img/components/Play/boss.png"
import craft from "@/assets/img/components/Play/craft.png"
import quest from "@/assets/img/components/Play/quest.png"
import leaderboard from "@/assets/img/components/Play/leaderboard.png"

import Image from "next/image";

export default function Play() {
  return(
    <div>
      <div className="text-center">
        <Image
          src={mapa}
          className="map m-auto relative top-32"
          alt="mapa"
        />
      </div>
      <div className="top-44 right-4 absolute ">
        <Image
          src={training}
          className="icons-map"
          alt="mapa"
        />
        <Image
          src={quest}
          className="icons-map my-5"
          alt="mapa"
        />
        <Image
          src={craft}
          className="icons-map"
          alt="mapa"
        />
        <Image
          src={leaderboard}
          className="icons-map my-5"
          alt="mapa"
        />
        <Image
          src={boss}
          className="icons-map"
          alt="mapa"
        />
      </div>
    </div>
    
  )
    
}
