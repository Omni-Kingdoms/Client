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
        contract.read.getTotalLosses([players[currentPlayerIndex]])
      ]);

      setUserWins(Number(wins));
      setUserLosses(Number(losses));
    } catch (err) {
      console.log(err);
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

  const userStrength = getUserAttributeFromEquipment(0);
  const userMagic = getUserAttributeFromEquipment(3);
  const userDefense = getUserAttributeFromEquipment(4);
  const userDexterity = getUserAttributeFromEquipment(2);
  const userHealth = getUserAttributeFromEquipment(1);
  const userMana = getUserAttributeFromEquipment(5);

  return (
    <div className="flex min-[1200px]:flex-col min-[1200px]:w-[26%] relative">
      <div className="content flex-1 relative -mt-12 flex items-center justify-center gap-4 max-[520px]:gap-0 min-[1200px]:flex-col">
        {
          isLoading ? <div className="flex-1 flex items-center justify-center"><Loading /></div> : (
            <>
              <PlayerCharacterInfo equip />
              <div className="stat-table flex justify-center">
                <table className="text-center text-[#643A28] mt-1">
                  <thead>
                    <tr>
                      <th className="text-xs px-[8px] max-[520px]:px-[6px]"></th>
                      <th className="text-xs px-[8px] max-[520px]:px-[6px]" scope="col">Stats</th>
                      <th className="text-xs px-[8px] max-[520px]:px-[6px]" scope="col">Equipment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-xs" scope="row">STG</th>
                      <td className="text-md px-[25px] max-[520px]:px-[15px]">{Number(currentPlayer?.strength)}</td>
                      <td className="text-md">{userStrength}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">MAG</th>
                      <td className="text-md px-[25px] max-[520px]:px-[15px]">{Number(currentPlayer?.magic)}</td>
                      <td className="text-md">{userMagic}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">DEX</th>
                      <td className="text-md px-[25px] max-[520px]:px-[15px]">{Number(currentPlayer?.agility)}</td>
                      <td className="text-md">{userDexterity}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">DEF</th>
                      <td className="text-md px-[25px] max-[520px]:px-[15px]">{Number(currentPlayer?.defense)}</td>
                      <td className="text-md">{userDefense}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">LIF</th>
                      <td className="text-md px-[25px] max-[520px]:px-[15px]">{Number(currentPlayer?.health)}</td>
                      <td className="text-md">{userHealth}</td>
                    </tr>
                    <tr>
                      <th className="text-xs" scope="row">MAN</th>
                      <td className="text-md px-[25px] max-[520px]:px-[15px]">{Number(currentPlayer?.maxMana)}</td>
                      <td className="text-md">{userMana}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex -mr-5 max-[1200px]:flex-col">
                <div className="stat-counter flex relative items-center -mr-6">
                  <Image src={winImage} width={70} alt="win quantifier" />
                  <p className="text-xl translate-x-[-70%] text-[#7BAA74]">{String(userWins || 0).padStart(2, '0')}</p>
                </div>
                <div className="stat-counter flex items-center">
                  <Image src={lossImage} width={70} alt="loss quantifier" />
                  <p className="text-xl translate-x-[-40%] text-[#8C3A20]">{String(userLosses || 0).padStart(2, '0')}</p>
                </div>
              </div>
            </>
          )
        }
      </div>
      <div className={`
        actions flex justify-end gap-5 -mr-2
        -mt-2 translate-x-[10%] translate-y-[20%]
        max-[1200px]:items-end max-[1200px]:absolute
        bottom-[-6%] right-[4%] max-[480px]:bottom-[-15%]
      `}>
        <button type="button" onClick={close} disabled={!isOpen} className={`max-[1200px]:rotate-90 ${!isOpen ? 'gray-icon' : ''}`}>
          <Image src={arrowLeft} alt="Arrow left" width={30} height={30} />
        </button>
        <button type="button" onClick={open} disabled={isOpen} className={`max-[1200px]:rotate-90 ${isOpen ? 'gray-icon' : ''}`}>
          <Image src={arrowRight} alt="Arrow right" width={30} height={30} />
        </button>
      </div>
    </div>
  )
}
export default PlayerStats