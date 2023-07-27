import "./index.css"
import life from "@/assets/img/components/Training/life-coin.png"
import mana from "@/assets/img/components/Training/mana-coin.png"


import LifeTraining from "@/components/Modal/Training/LifeTraining";
import ManaTraining from "@/components/Modal/Training/ManaTraining";

import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Training({ searchParams }: Props) {

  const showModalLife = searchParams?.life;
  const showModalMana = searchParams?.mana;

  return(
    <div className="div-father">
      <div className="bg-quest h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Link href={"training/?life=true"}>
          <Image
            src={life}
            className="icons-map hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
        <Link href={"training/?mana=true"}>
          <Image
            src={mana}
            className="icons-map hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
      </div>
      {showModalLife && <LifeTraining />}
      {showModalMana && <ManaTraining />}
    </div>
  )
    
}
