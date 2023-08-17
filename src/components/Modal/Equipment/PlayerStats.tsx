import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import PlayerCharacterInfo from '@/components/PlayerCard/PlayerCharacterInfo'
import Image from 'next/image'

type PlayerStatsProps = {
  open: () => void,
  close: () => void,
  isOpen: boolean,
}

function PlayerStats({ open, close, isOpen }: PlayerStatsProps) {
  return (
    <div className="flex flex-col">
      <div className="content flex-1 relative pr-5 -mt-8">
        <PlayerCharacterInfo small />
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