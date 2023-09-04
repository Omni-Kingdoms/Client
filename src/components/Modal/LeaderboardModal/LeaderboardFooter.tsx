import { Select } from '@/components/Select'

type LeaderboardFooterProps = {
  pageSize: number,
  setPageSize: (pageSize: number) => void,
}

const pageOptions = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
]

export default function LeaderboardFooter({ pageSize, setPageSize }: LeaderboardFooterProps) {
  return (
    <footer className="p-4 flex justify-between">
      <Select
        options={pageOptions}
        defaultOption={pageSize}
        onChange={setPageSize}
      />
    </footer>
  )
}