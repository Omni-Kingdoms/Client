"use client";
import React, { useCallback, useState, memo, useEffect } from "react";
import { Pagination } from "@/components/Pagination";
import { TableProp } from "@/types/table.type";
import "./style.css";

type TableRowProps = {
  index: number;
  rowData: any;
  column: any;
};
// eslint-disable-next-line react/display-name
const TableRow = memo(({ index, rowData, column }: TableRowProps) => (
  <tr key={index}>
    {column?.map((col: any, key: number) => (
      <td className={`text-${col.align}`} key={key}>
        {rowData[col.dataIndex]}
      </td>
    ))}
  </tr>
));

export const Table = ({
  type,
  column,
  total,
  leaderboard,
  searchbar,
  className = "",
}: TableProp) => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [rowsToRender, setRowsToRender] = useState<any>();

  useEffect(() => {
    async function handleLeaderBoard(pageSize: number, selectedPage: number) {
      const ld = await leaderboard(Number(pageSize), selectedPage);

      setRowsToRender(ld.data.players);
    }
    handleLeaderBoard(pageSize, selectedPage);
  }, [leaderboard, pageSize, selectedPage]);

  const THeadContent = () => {
    const theadRow: any[] = [];
    column?.map((item, index) =>
      theadRow.push(
        <th key={index} style={{ width: item?.width }}>
          <a className="table-sort-link" href="#">
            <span>{item?.title}</span>
          </a>
        </th>
      )
    );
    return <tr>{theadRow}</tr>;
  };
  // eslint-disable-next-line react/display-name
  const TBodyContent = memo(() => {
    return (
      <>
        {console.log(rowsToRender)}
        {console.log(total)}
        {rowsToRender &&
          rowsToRender.map((rowData: any, index: number) => (
            <TableRow
              key={index}
              index={index}
              rowData={rowData}
              column={column}
            />
          ))}
      </>
    );
  });

  const handlePageChange = useCallback(
    (page: any) => setSelectedPage(page),
    []
  );

  return (
    <div className="omni-table-container">
      <div className="mb-3">
        <Pagination
          total={total}
          pageSize={pageSize}
          setPageSize={setPageSize}
          selectedPage={selectedPage}
          setSelectedPage={handlePageChange}
          setRowstoRender={setRowsToRender}
          searchbar={searchbar}
        />
      </div>
      <table
        className={["omni-table", `omni-table-${type}`, className].join(" ")}
      >
        <thead>
          <THeadContent />
        </thead>
        <tbody>
          <TBodyContent />
        </tbody>
      </table>
    </div>
  );
};
