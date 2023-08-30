import "./style.css";
import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";

import PlayerCharacterInfo from "./PlayerCharacterInfo";

export const Player = () => {
  return (
    <div className="absolute top-0 left-10">
      <div className="flex">
        <PlayerCharacterInfo />
        <div>
          <PlayerBars />
          <PlayerStatus />
        </div>
      </div>
    </div>
  );
};
