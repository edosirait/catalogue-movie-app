import React, { FC } from "react";

interface ListTitleModel {
  id: string;
  title: string;
  selected?: boolean;
  onClick: (id: string) => void;
}

const ListTitle: FC<ListTitleModel> = ({ id, title, selected, onClick }) => {
  return (
    <button
      className={
        selected
          ? "text-left text-yellow-400 text-lg bg-slate-900 font-bold border-none cursor-pointer"
          : "text-left text-slate-900 font-bold text-lg font-normal"
      }
      onClick={() => {
        onClick(id);
      }}
    >
      {title}
    </button>
  );
};

export default ListTitle;
