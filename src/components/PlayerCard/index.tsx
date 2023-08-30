import "./style.css";
import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";

import PlayerCharacterInfo from "./PlayerCharacterInfo";

export const Player = () => {
  return (
    <div className="flex items-center gap-4">
      <PlayerCharacterInfo />
      <div className="translate-y-[10%]">
        <PlayerBars />
        <PlayerStatus />
      </div>
    </div>
  );
};
