import getClassBackground from '@/components/utils/getClassBackground';
import { playerStore } from '@/store/playerStore'
import Slot from './Slot';

export default function ItemSlots() {
  const player = playerStore((state) => state.currentPlayer);

  console.log(player);

  if (!player) return null;

  const classBackground = getClassBackground(Number(player.playerClass), player.male);

  return (
    <div className={`h-[100%] w-[100%] base-bg ${classBackground} relative`}>
      <Slot bg={2} className="w-[18%] absolute top-[6%] left-[15%]" />
      <Slot bg={1} className="w-[18%] absolute top-[36%] left-[2%]" />
      <Slot bg={2} className="w-[12%] absolute top-[72%] left-[14%]" />
      <Slot bg={2} className="w-[18%] absolute top-[5%] right-[10%]" />
      <Slot bg={1} className="w-[10%] absolute top-[38%] right-[18%]" />
      <Slot bg={1} className="w-[10%] absolute top-[50%] right-[6%]" />
      <Slot bg={2} className="w-[12%] absolute top-[75%] right-[10%]" />
    </div>
  )
}