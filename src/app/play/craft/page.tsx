"use client";
import Image from "next/image";
import map from "@/assets/img/components/Craft/map.png";


export default function Craft() {
  return(
    <div className="div-father">
      <div className="bg-dungeon h-971">
        <Image src={map} alt="Mapa" />
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
      </div>
    </div>
  )

}