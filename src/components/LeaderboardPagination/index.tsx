import React, { useMemo } from "react";
import { Select } from "@/components/Select";
import "./style.css";
import { useLazyQuery } from "@apollo/client";
import { S_SEARCH_PLAYERS } from "@/lib/Queries";

interface PaginationProp {
  type?: string;
  total: number;
  pageSize: number;
  setPageSize: any;
  selectedPage: number;
  setSelectedPage?: any;
  setRowstoRender: any;
}

const paginationLimit = 7;
const pageOptions = [
  { label: "5 / page", value: 5 },
  { label: "10 / page", value: 10 },
  { label: "20 / page", value: 20 },
  { label: "50 / page", value: 50 },
];

export const LeaderboardPagination = ({
  type,
  total,
  pageSize,
  setPageSize,
  selectedPage,
  setSelectedPage,
  setRowstoRender,
}: PaginationProp) => {
  const [searchPlayers, { data }] = useLazyQuery(S_SEARCH_PLAYERS);

  const SubPagination = useMemo(() => {
    console.log("selectedPage: ", selectedPage);
    console.log("total: ", total);
    console.log("pageSize: ", pageSize);
    const items = [];
    const availableIndex = Math.ceil(total / pageSize);
    let startIndex = selectedPage - 3 > 0 ? selectedPage - 3 : 0;
    let endIndex;
    if (startIndex + paginationLimit > availableIndex) {
      endIndex = availableIndex;
      startIndex =
        endIndex - paginationLimit > 0 ? endIndex - paginationLimit : 0;
    } else {
      endIndex = startIndex + paginationLimit;
    }

    for (let i = startIndex; i < endIndex; i++) {
      items.push(
        <li
          className={i === selectedPage ? "omni-selected-item" : ""}
          key={i}
          onClick={() => setSelectedPage(i)}
        >
          <button>
            <span>{i + 1}</span>
          </button>
        </li>
      );
    }
    return <>{items}</>;
  }, [selectedPage, total, pageSize]);

  async function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(selectedPage);
    searchPlayers({
      variables: {
        search: e.target.value,
        pagesize: Number(pageSize),
        skip: selectedPage,
      },
      onCompleted: () => {
        console.log(data.S_players);
        setRowstoRender(data.S_players);
      },
    });
    if (data.S_players.length) {
      setRowstoRender(data.S_players);
    }
  }

  return (
    <div className="omni-pagination flex justify-between">
      <input
        onChange={handleForm}
        id="name"
        className="omni-select"
        type="text"
        placeholder="name"
        autoComplete="off"
      />
      <Select
        options={pageOptions}
        defaultOption={pageSize}
        onChange={setPageSize}
      />
      <li>
        <button>
          <span>Total: {total}</span>
        </button>
      </li>

      <ul>
        <li onClick={() => setSelectedPage(0)}>
          <button>
            <span>First</span>
          </button>
        </li>
        {SubPagination}
      </ul>
    </div>
  );
};
