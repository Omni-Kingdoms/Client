import { useSuspenseQuery } from '@apollo/client';
import GridItemBox from '../GridModal/GridItemBox';
import { playerStore } from '@/store/playerStore';
import { A_Treasures } from '@/lib/Queries';
import { contractStore } from '@/store/contractStore';
import { MaterialStruct } from '@/types/DIAMOND1HARDHAT';
import { Tooltip } from 'antd';

export default function MaterialsGrid() {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const { data }: { data: { A_treasures: MaterialStruct[] } } = useSuspenseQuery(A_Treasures, {
    variables: { playerId: Number(players[currentPlayerIndex]) }
  });

  async function addTreasure() {
    await contract.write.mintTreasure([
      players[currentPlayerIndex],
      1
    ])
  }

  return (
    <div className="flex-1 grid grid-rows-4 grid-cols-6 gap-8 p-12 mb-4">
      {
        Array.from({ length: 24 }, (_, i) => i + 1).map((i) => (
          <GridItemBox item={data.A_treasures[i - 1]} key={i} />
        ))
      }
    </div>
  )
}