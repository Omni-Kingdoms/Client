"use client";
import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";
import { useAccount, useNetwork } from "wagmi";

import { useIsMounted } from "usehooks-ts";
import { useEffect } from "react";
import { Player } from "@/components/PlayerCard";
import ModalIcons from "@/components/ModalIcons/ModalIcons";
import { BASE_TESTNET_ID } from "@/networkconstants";

export default function PlayerProvider() {
  const isMounted = useIsMounted();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);
  const setGem = playerStore((state) => state.setGem);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const { address } = useAccount();
  const bastion = contractStore((state) => state.bastion);
  const { chain } = useNetwork();

  useEffect(() => {
    const handlePlayers = async () => {
      if (players[currentPlayerIndex!]) {
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);

        let gold;
        if (chain?.id === BASE_TESTNET_ID) {
          const addressbastion = await bastion.getAddress();
          console.log(addressbastion);

          gold = await contract.read.getGoldBalance([addressbastion]);
          console.log(gold);
        } else {
          gold = await contract.read.getGoldBalance([address]);
          console.log(gold);
        }
        const gem = 0; //await contract.read.getGemBalance([address]);
        setGold(Number(gold));
        setGem(Number(gem));
        setCurrentPlayer(player);
      }
    };
    handlePlayers();
  }, [currentPlayerIndex, players]);

  if (!isMounted()) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-[5rem] relative max-[900px]:flex-row max-[900px]:gap-[2rem] max-[460px]:flex-col max-[460px]:gap-[3rem]">
      {currentPlayer && <Player />}
      <ModalIcons />
    </div>
  );
}
