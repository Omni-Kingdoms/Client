"use client";
import Image from 'next/image';

import map from '@/assets/img/components/Craft/map.png';
import switchNetworkIcon from '@/assets/img/components/Utility/switch-network.png';
import changeNameIcon from '@/assets/img/components/Utility/change-name.png';
import { Tooltip } from 'antd';

export default function Utility() {
  return (
    <div className="div-father">
      <div className="bg-dungeon">
        <Image src={map} alt="Mapa" className="invisible" />
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Tooltip title="Change name">
          <button>
            <Image
              src={changeNameIcon}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="change name icon"
            />
          </button>
        </Tooltip>
        <Tooltip title="Switch network">
          <button>
            <Image
              src={switchNetworkIcon}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}
