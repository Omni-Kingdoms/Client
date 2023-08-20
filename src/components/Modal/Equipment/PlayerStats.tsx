import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import PlayerCharacterInfo from '@/components/PlayerCard/PlayerCharacterInfo'
import lossImage from '@/assets/img/components/Equipment/loss.png'
import winImage from '@/assets/img/components/Equipment/win.png'
import Image from 'next/image'
import { playerStore } from '@/store/playerStore'
import { useCallback, useEffect, useState } from 'react'
import { contractStore } from '@/store/contractStore'
import Loading from '@/app/play/loading'
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT'

type PlayerStatsProps = {
  open: () => void,
  close: () => void,
  isOpen: boolean,
  userEquipments: Equip[]
}

function PlayerStats({ open, close, isOpen, userEquipments }: PlayerStatsProps) {
  const contract = contractStore((state) => state.diamond);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const players = playerStore((state) => state.players);

  const [userWins, setUserWins] = useState<number>();
  const [userLosses, setUserLosses] = useState<number>();

  const [isLoading, setIsLoading] = useState(true);

  const getUserKDA = useCallback(async () => {
    try {
      const [wins, losses] = await Promise.all([
        contract.read.getTotalWins([players[currentPlayerIndex]]),
        contract.read.getTotalWins([players[currentPlayerIndex]])
      ]);

      setUserWins(Number(wins));
      setUserLosses(Number(losses));
    } finally {
      setIsLoading(false);
    }
  }, [contract.read, currentPlayerIndex, players]);

  function getUserAttributeFromEquipment(stat: number) {
// stat {
//     0: strength;
//     1: health;
//     2: agility;
//     3: magic;
//     4: defense;
//     5: maxMana;
//     6: luck;
// }

    const value = userEquipments
      .filter((equip) => equip.stat == stat)
      .reduce((prev, curr) => prev + Number(curr.value), 0)

    return value;
  }

  useEffect(() => {
    getUserKDA();
  }, [getUserKDA])

  console.log(userWins, userLosses);

  const userStrength = getUserAttributeFromEquipment(0);
  const userMagic = getUserAttributeFromEquipment(3);
  const userDexterity = getUserAttributeFromEquipment(2);
  const userHealth = getUserAttributeFromEquipment(1);

  return (
    <div className="flex flex-col w-[26%]">
      <div className="content flex-1 relative -mt-8 flex flex-col ">
        {
          isLoading ? <div className="flex-1 flex items-center justify-center"><Loading /></div> : (
            <>
              <PlayerCharacterInfo small />
              <div className="stat-table flex-1 flex justify-center">
                <table className="text-center text-[#643A28]">
                  <thead>
                    <tr>
                      <th className="text-xs px-[10px]"></th>
                      <th className="text-xs px-[10px]" scope="col">Stats</th>
                      <th className="text-xs px-[10px]" scope="col">Equipment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-xs" scope="row">STG</th>
                      <td className="text-2xl px-[25px]">{Number(currentPlayer?.strength)}</td>
                      <td className="text-2xl">{userStrength}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">MAG</th>
                      <td className="text-2xl px-[25px]">{Number(currentPlayer?.magic)}</td>
                      <td className="text-2xl">{userMagic}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">DEX</th>
                      <td className="text-2xl px-[25px]">{Number(currentPlayer?.agility)}</td>
                      <td className="text-2xl">{userDexterity}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">LIF</th>
                      <td className="text-2xl px-[25px]">{Number(currentPlayer?.health)}</td>
                      <td className="text-2xl">{userHealth}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex -mr-5">
                <div className="stat-counter flex relative items-center -mr-6">
                  <Image src={winImage} width={90} alt="win quantifier" />
                  <p className="text-4xl translate-x-[-46%] text-[#7BAA74]">{String(userWins || 0).padStart(2, '0')}</p>
                </div>
                <div className="stat-counter flex items-center">
                  <Image src={lossImage} width={90} alt="loss quantifier" />
                  <p className="text-4xl translate-x-[-26%] translate-y-[-10%] text-[#8C3A20]">{String(userLosses || 0).padStart(2, '0')}</p>
                </div>
              </div>
            </>
          )
        }
      </div>
      <div className="actions flex justify-end gap-5 -mr-2">
        <button type="button" onClick={close}>
          <Image src={arrowLeft} alt="Arrow left" width={40} height={40} />
        </button>
        <button type="button" onClick={open} disabled={isOpen} className={`${isOpen ? 'gray-icon' : ''}`}>
          <Image src={arrowRight} alt="Arrow right" width={40} height={40} />
        </button>
      </div>
    </div>
  )
}
export default PlayerStats