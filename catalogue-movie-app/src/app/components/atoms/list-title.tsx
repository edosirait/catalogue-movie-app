"use client";
import React, { FC } from "react";

export interface ListTitleModel {
  id: string;
  title: string;
  selected?: boolean;
  // onClick: (id: string) => void;
}

const ListTitle: FC<ListTitleModel> = ({ id, title, selected }) => {
  return (
    <button
      className={
        selected
          ? "text-left text-yellow-400 text-lg bg-slate-900 font-bold border-none cursor-pointer"
          : "text-left text-slate-900 font-bold text-lg font-normal"
      }
      onClick={() => {
        // alert("kocaks");
        // onClick(id);
        console.log("id", id);
      }}
    >
      {title}
    </button>
  );
};

export default ListTitle;
