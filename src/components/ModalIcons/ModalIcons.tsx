import { useState } from 'react';
import { Tooltip } from 'antd';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import ConsumableBag from '../PlayerCard/ConsumableBag';
import MaterialList from '../Modal/MaterialList/MaterialList';
import NotifierIcon from '../Notifier/NotifierIcon';
import Equipment from '../Modal/Equipment/Equipment';
import bag from "@/assets/img/components/Play/bag.png";
import back from "@/assets/img/components/Play/back.png";
import items from "@/assets/img/components/Play/itens.png";
import equip from "@/assets/img/components/Play/equip.png";
import Link from 'next/link';

export default function ModalIcons() {
  const route = usePathname();

  const [isEquipmentOpen, setIsEquipmentOpen] = useState<boolean>(false);
  const [isConsumableBagOpen, setIsConsumableBagOpen] = useState<boolean>(false);
  const [isMaterialListOpen, setIsMaterialListOpen] = useState<boolean>(false);

  function toggleConsumableBagOpen() {
    setIsConsumableBagOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="modal-icons">
        <div className="flex flex-col items-start gap-6">
          {route != "/play" && (
            <button className="flex items-center gap-4">
              <Link href={"/play"}>
                <Image
                  src={back}
                  className="hover:cursor-pointer"
                  alt="mapa"
                />
              </Link>
              <p className="back-text">Back</p>
            </button>
          )}
          <div className="relative">
            <Tooltip title="Items">
              <button
                type="button"
                onClick={() => setIsMaterialListOpen(true)}
              >
                <Image
                  src={items}
                  className="button-icon cursor-pointer"
                  alt="items"
                />
              </button>
            </Tooltip>
            <NotifierIcon className="translate-x-[40%] translate-y-[-40%]" />
          </div>
          <div className="relative">
            <Tooltip title="Equipment">
              <button
                type="button"
                onClick={() => setIsEquipmentOpen(true)}
              >
                <Image
                  src={equip}
                  className="button-icon cursor-pointer"
                  alt="equip"
                />
              </button>
            </Tooltip>
            <NotifierIcon
              text="There may be some new features available shining in your screen, make sure to check them out!"
              className="translate-x-[40%] translate-y-[-40%]"
            />
          </div>
          <div className="relative">
            <Tooltip title="Bag">
              <button
                onClick={toggleConsumableBagOpen}
              >
                <Image
                  src={bag}
                  className="button-icon cursor-pointer rotate-6"
                  alt="bag"
                />
              </button>
            </Tooltip>
            {isConsumableBagOpen && (
              <ConsumableBag close={() => setIsConsumableBagOpen(false)} />
            )}
            {isMaterialListOpen && (
              <MaterialList close={() => setIsMaterialListOpen(false)} />
            )}
          </div>
        </div>
      </div>
      {isEquipmentOpen && <Equipment close={() => setIsEquipmentOpen(false)} />}
    </>
  )
}