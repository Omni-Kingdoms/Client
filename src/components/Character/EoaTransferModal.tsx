import Image from "next/image";
import paperback1 from "@/assets/img/components/Equipment/paperback1.png";
import closeIcon from "@/assets/img/components/modal/X.png";
import { contractStore } from "@/store/contractStore";
import { abi } from "../../utils/DiamondABI.json";

import "./index.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useWriteContract } from "wagmi";

export default function EoaTransferModal({
  close,
  playerId,
}: {
  close: () => void;
  playerId: bigint;
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const contract = contractStore((state) => state.diamond);
  const [player, setPlayer] = useState<any>({});
  const contractAddress = contractStore((state) => state.contractAddress);

  useEffect(() => {
    const handlePlayers = async () => {
      console.log(playerId);
      const player = await contract.read.getPlayer([playerId]);
      setPlayer(player);
    };
    handlePlayers();
  }, [contract, playerId]);

  const smartAccountAddress = contractStore(
    (state) => state.smartAccountAddress
  );
  const setSmartAccountAddress = contractStore(
    (state) => state.setSmartAccountAddress
  );

  const { writeContract } = useWriteContract();

  const equipmentListRef = useRef(null);

  useOnClickOutside(equipmentListRef, close);

  useEffect(() => {
    const handleResize = async () => {
      setIsSmallScreen(window.innerWidth <= 1340);
      const read = await contract.read.getPlayerDrop([1]);
      console.log(read);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`fixed z-50 inset-0 overflow-y-auto  `}>
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center ">
        <div
          ref={equipmentListRef}
          className="bg-equip relative flex flex-col "
        >
          <Image
            src={paperback1}
            width={1800}
            alt="Equipment1 background"
            className="invisible min-w-[420px] w-[100vw] max-w-[800px]"
          />
          <div className="content absolute inset-0 p-16 sm:p-20 ">
            <button
              type="button"
              className="close-icon absolute right-[5rem] top-[4rem] z-50 min-[1200px]"
              onClick={close}
            >
              <Image src={closeIcon} alt="close icon" />
            </button>
            <div className="h-[100%] w-[100%] base-bg relative  flex  md:flex-row-reverse gap-4 ">
              <div className=" flex flex-col justify-evenly items-center w-full  ">
                <div className="">
                  <h1 className="title-select2">{player?.name},</h1>

                  <p className="mt-2 w-96 text-select2 ">
                    {" "}
                    {`Congratulations!

Your adventures have pleased the King & Queen. You are now invited to the new OmniKingdoms realm, where more dangers await. As a token of appreciation, we grant you GASLESS Adventures! The realm will cover your expenses as you interact throughout the kingdom.

`}
                    <br />
                    <br />
                    {`

To enhance your experience, we need to upgrade and transfer your character to a new smart wallet. This is still your own, but necessary for the enhanced experience. Our squire is ready to assist—simply tap the button, and he will handle the rest.

Welcome back, true adventurer!`}
                  </p>
                </div>
                <div className="w-64 py-2 mb-1 rounded bg-button text-white items-center">
                  <button
                    onClick={() => {
                      writeContract({
                        abi,
                        address: contractAddress as any,
                        functionName: "transferPlayer",
                        args: [smartAccountAddress, playerId],
                      });
                      close();
                    }}
                    className="w-64  rounded text-center "
                  >
                    Transfer Character
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
