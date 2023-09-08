import React from "react";
import { FC } from "react";
import ListTitle, { ListTitleModel } from "../atoms/list-title";

type ListFilmModel = {
  dataList: Omit<ListTitleModel, "onClick">[];
  selectedId: string;
  onClickItem: Function;
};

const ListFilm: FC<ListFilmModel> = ({ dataList, selectedId, onClickItem }) => {
  return (
    <ul className="flex flex-col bg-yellow-400 p-4 pb-4 gap-4 w-full h-full">
      {dataList.map(({ id, title }) => {
        return (
          <ListTitle
            key={id}
            id={id}
            title={title}
            selected={id === selectedId}
            onClick={onClickItem}
          />
        );
      })}
    </ul>
  );
};

export default ListFilm;
