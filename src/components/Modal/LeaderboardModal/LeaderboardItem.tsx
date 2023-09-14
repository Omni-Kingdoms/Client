import { LeaderboardUserStruct } from '@/types/DIAMOND1HARDHAT'

type LeaderboardItemProps = {
  user: LeaderboardUserStruct,
}

export default function LeaderboardItem({ user }: LeaderboardItemProps) {
  return (
    <div
      className="col-span-full custom-list-item grid w-[100%] place-items-center p-3 rounded gap-4 max-[520px]:p-2"
      style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}
    >
      <div className="user-name">
        <p className="text-sm">{user.name}</p>
      </div>
      <div className="user-level">
      <p className="text-sm">{user.level}</p>
      </div>
      <div className="user-wins">
      <p className="text-sm">{user.totalWins}</p>
      </div>
      <div className="user-losses">
      <p className="text-sm">{user.totalLosses}</p>
      </div>
    </div>
  )
}