"use client";

import "./style.css";

interface OptionType {
  label: string;
  value: Number;
}

interface SelectProp {
  onChange?: any;
  options?: OptionType[] | undefined;
  defaultOption?: number;
}

export const Select = ({ options, defaultOption, onChange }: SelectProp) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="title text-xs">Rows per page:</p>
      <select
        className="omni-select"
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultOption}
      >
        {options?.map((item: any, index: number) => (
          <option key={index} value={item?.value}>
            {item?.label}
          </option>
        ))}
      </select>
    </div>
  );
};
