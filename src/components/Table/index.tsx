"use client";
import React, { useCallback, useState, memo, useEffect } from "react";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import { S_leaderboardQuery } from "@/lib/Queries";
import { leaderboardQuery } from "@/lib/Queries/leaderboardQuery";
import { useNetwork } from "wagmi";

import "./style.css";
import { LeaderboardPagination } from "../LeaderboardPagination";

type TableRowProps = {
  index: number;
  rowData: any;
  column: any;
};

interface TableProp {
  type?: "default" | "primary";
  column?: Array<ColumnType>;
  dataSource?: any;
  className?: string;
  total: any;
}

interface ColumnType {
  key: string;
  title: string;
  dataIndex: string;
  width?: number;
  align?: "left" | "center" | "right";
  render?: React.ReactElement;
}
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

export const Table = ({ type, column, total, className = "" }: TableProp) => {
  const { chain } = useNetwork();

  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [rowsToRender, setRowsToRender] = useState<any>();
  const query = leaderboardQuery(chain?.id);
  console.log(query);
  console.log(S_leaderboardQuery);
  console.log("ttessee");
  const { data }: { data: any } = useQuery(S_leaderboardQuery, {
    variables: {
      pagesize: Number(pageSize),
      skip: pageSize * selectedPage,
    },
    onCompleted: () => {
      setRowsToRender(data.S_players);
    },
  });
  console.log(data);

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
        <LeaderboardPagination
          total={total}
          pageSize={pageSize}
          setPageSize={setPageSize}
          selectedPage={selectedPage}
          setSelectedPage={handlePageChange}
          setRowstoRender={setRowsToRender}
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
