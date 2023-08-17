import Slot from './Slot';

type CurrentEquipmentInfoProps = {
  isEquipped: boolean
}

export default function CurrentEquipmentInfo({ isEquipped }: CurrentEquipmentInfoProps) {
  return (
    <div className="flex flex-col pb-14 flex-1">
      <div className="flex-1 flex flex-col text-center gap-4 items-center">
        <Slot bg={1} className="w-20" />
        <h3 className="title text-2xl w-[100%]">Helm Dourado do Gladiador</h3>
        <p className="title">+2 STG - +1 DEX</p>
      </div>
      <div className="">
        {
          isEquipped
            ? <button className="button-alternative-2 w-[100%] py-2 rounded font-semibold tracking-wider" type="button">Unequip</button>
            : <button className="button-alternative-1 w-[100%] py-2 rounded font-semibold tracking-wider" type="button">Equip</button>
        }
      </div>
    </div>
  )
}