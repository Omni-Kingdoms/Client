
import coin from "@/assets/img/components/Quest/coin.png"
import diamond from "@/assets/img/components/Quest/diamond.png"

import Image from "next/image";

export default function Quest() {
  return(
    <div className="bg-quest mt-36 h-971">
      <div className="right-0 absolute mt-10 mr-10">
        <Image
          src={coin}
          className="icons-map my-5"
          alt="mapa"
        />
        <Image
          src={diamond}
          className="icons-map"
          alt="mapa"
        />
      </div>
    </div>
      
  )
    
}
