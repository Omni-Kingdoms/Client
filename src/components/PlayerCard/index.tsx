import "./style.css";
import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";

import PlayerCharacterInfo from "./PlayerCharacterInfo";
import LevelUP from '../Modal/LevelUP/LevelUP';
import { useState } from 'react';

export const Player = () => {
  const [showLevelUPModal, setShowLevelUPModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center gap-4 min-w-[300px]">
        <PlayerCharacterInfo />
        <div className="translate-y-[10%]">
          <PlayerBars openLevelUpModal={() => setShowLevelUPModal(true)} />
          <PlayerStatus />
        </div>
      </div>
      { showLevelUPModal && (<LevelUP showModalLevelUP={() => setShowLevelUPModal(false)} />) }
    </>
  );
};
