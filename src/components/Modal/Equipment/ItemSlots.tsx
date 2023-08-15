import getClassBackground from '@/components/utils/getClassBackground';
import { playerStore } from '@/store/playerStore'

export default function ItemSlots() {
  const player = playerStore((state) => state.currentPlayer);

  console.log(player);

  if (!player) return null;

  const classBackground = getClassBackground(Number(player.playerClass), player.male);

  return (
    <div className={`h-[100%] w-[100%] persona-bg ${classBackground}`}>

    </div>
  )
}