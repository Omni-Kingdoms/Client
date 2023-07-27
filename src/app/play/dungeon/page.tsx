import "./index.css"
import dragon from "@/assets/img/components/Play/boss.png";
import Dungoen from "@/components/Modal/Dungeon/Dungeon";

import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Dungeon({ searchParams }: Props) {

  const showModalDungeon = searchParams?.dungeon;

  return(
    <div className="div-father">
      <div className="bg-quest h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Link href={"dungeon/?dungeon=true"}>
          <Image
            src={dragon}
            className="icons-map hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
      </div>
      {showModalDungeon && <Dungoen />}
    </div>
  )
    
}
