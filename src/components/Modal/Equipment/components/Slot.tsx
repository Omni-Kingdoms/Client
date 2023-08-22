import Image from 'next/image';
import slotBackground1 from '../../../../assets/img/components/Equipment/itemMask1.png';
import slotBackground2 from '../../../../assets/img/components/Equipment/itemMask2.png';

type SlotProps = {
  className?: string,
  bg: 1 | 2,
  image?: string
}

function Slot({ className, bg, image }: SlotProps) {
  return (
    <div className={`slot-bg inline-block slot-bg-${bg}${className ? ` ${className}` : ''}`}>
      <div className="relative w-[100%] h-[100%]">
        <Image
          src={bg === 1 ? slotBackground1 : slotBackground2}
          alt="Slot background"
          className="invisible w-[100%]"
        />
        {
          image && (
            (
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80%]">
                <Image src={image} layout="fill" objectFit="contain" alt="Item image" className="rounded-full" />
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Slot