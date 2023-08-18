import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import PlayerCharacterInfo from '@/components/PlayerCard/PlayerCharacterInfo'
import lossImage from '@/assets/img/components/Equipment/loss.png'
import winImage from '@/assets/img/components/Equipment/win.png'
import Image from 'next/image'

type PlayerStatsProps = {
  open: () => void,
  close: () => void,
  isOpen: boolean,
}

function PlayerStats({ open, close, isOpen }: PlayerStatsProps) {
  return (
    <div className="flex flex-col">
      <div className="content flex-1 relative -mt-8 flex flex-col ">
        <PlayerCharacterInfo small />
        <div className="stat-table flex-1"></div>
        <div className="flex -mr-5">
          <div className="stat-counter flex relative items-center -mr-6">
            <Image src={winImage} width={100} alt="win quantifier" />
            <p className="text-4xl translate-x-[-60%] text-[#7BAA74]">00</p>
          </div>
          <div className="stat-counter flex items-center">
            <Image src={lossImage} width={100} alt="loss quantifier" />
            <p className="text-4xl translate-x-[-30%] translate-y-[-10%] text-[#8C3A20]">00</p>
          </div>
        </div>
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