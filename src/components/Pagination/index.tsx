export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}: {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="-mt-24 mb-10 flex justify-center">
      <ul className="flex gap-4  ">
        {pages.map((page) => (
          <li key={page}>
            <button
              className="text-sm px-2 py-1 rounded bg-button text-white"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
