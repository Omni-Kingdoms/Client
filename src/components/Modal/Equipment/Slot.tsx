import Image from 'next/image';
import slotBackground1 from '../../../assets/img/components/Equipment/itemMask1.png';
import slotBackground2 from '../../../assets/img/components/Equipment/itemMask2.png';

type SlotProps = {
  className?: string,
  bg: 1 | 2
}

function Slot({ className, bg }: SlotProps) {
  return (
    <div className={`slot-bg inline-block slot-bg-${bg}${className ? ` ${className}` : ''}`}>
      <Image
        src={bg === 1 ? slotBackground1 : slotBackground2}
        alt="Slot background"
        className="invisible w-[100%]"
      />
    </div>
  )
}

export default Slot