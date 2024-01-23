import { useState } from "react";
import { Tooltip } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";

import ConsumableBag from "../PlayerCard/ConsumableBag";
import switchNetworkIcon from "@/assets/img/components/Utility/switch-network.png";

import MaterialList from "../Modal/MaterialList/MaterialList";
import NotifierIcon from "../Notifier/NotifierIcon";
import Equipment from "../Modal/Equipment/Equipment";
import bag from "@/assets/img/components/Play/bag.png";
import back from "@/assets/img/components/Play/back.png";
import items from "@/assets/img/components/Play/itens.png";
import equip from "@/assets/img/components/Play/equip.png";
import Link from "next/link";
import BridgeModal from "../Modal/Marketplace/BridgeModal";

export default function ModalIcons() {
  const route = usePathname();

  const [isEquipmentOpen, setIsEquipmentOpen] = useState<boolean>(false);
  const [isConsumableBagOpen, setIsConsumableBagOpen] =
    useState<boolean>(false);
  const [isMaterialListOpen, setIsMaterialListOpen] = useState<boolean>(false);
  const [isBridgeOpen, setisBridgeOpen] = useState<boolean>(false);

  function toggleConsumableBagOpen() {
    setIsConsumableBagOpen((prevState) => !prevState);
  }

  function toggleBridgeOpen() {
    setisBridgeOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="modal-icons">
        <div className="flex flex-col items-start gap-6 relative max-[460px]:flex-row max-[460px]:justify-center">
          {route != "/play" && (
            <div className="relative">
              <button className="flex items-center gap-4">
                <Link href={"/play"}>
                  <Image
                    src={back}
                    className="button-icon hover:cursor-pointer"
                    alt="mapa"
                  />
                </Link>
                <p className="back-text max-[600px]:hidden">Back</p>
              </button>
            </div>
          )}
          {isBridgeOpen && <BridgeModal close={() => setisBridgeOpen(false)} />}

          <div className="relative">
            {/* <Tooltip title="Items">
              <button type="button" onClick={() => setIsMaterialListOpen(true)}>
                <Image
                  src={items}
                  className="button-icon cursor-pointer"
                  alt="items"
                />
              </button>
            </Tooltip> */}
            {/* <NotifierIcon className="translate-x-[40%] translate-y-[-40%]" /> */}
          </div>
          <div className="relative">
            <Tooltip title="Equipment">
              <button type="button" onClick={() => setIsEquipmentOpen(true)}>
                <Image
                  src={equip}
                  className="button-icon cursor-pointer"
                  alt="equip"
                />
              </button>
            </Tooltip>
            {/* <NotifierIcon
              text="There may be some new features available shining in your screen, make sure to check them out!"
              className="translate-x-[40%] translate-y-[-40%]"
            /> */}
          </div>
          <div className="relative z-50">
            <Tooltip title="Bag">
              <button onClick={toggleConsumableBagOpen}>
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
          </div>
          <Tooltip title="Bridge">
            {/* <button onClick={toggleBridgeOpen}> */}
            <Image
              src={switchNetworkIcon}
              className="icons-map2 hover:cursor-pointer min-[400px]:m-5"
              alt="mapa"
            />
            {/* </button> */}
          </Tooltip>
        </div>
      </div>
      {isEquipmentOpen && <Equipment close={() => setIsEquipmentOpen(false)} />}
      {isMaterialListOpen && (
        <MaterialList close={() => setIsMaterialListOpen(false)} />
      )}
    </>
  );
}
