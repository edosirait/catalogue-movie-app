import { FC } from "react";

export type ListTitleModel = {
  id: string;
  title: string;
  selected?: boolean;
  onClick: Function;
};

const ListTitle: FC<ListTitleModel> = ({
  id,
  title,
  selected,
  onClick
}) => {
  return (
    <button className={
        selected ? 
        "text-left text-yellow-400 text-lg bg-slate-900 font-bold border-none cursor-pointer" : 
        "text-left text-slate-900 font-bold text-lg font-normal"
    }
      onClick={() => {
        onClick(id);
    }}>
      {title}
    </button>
  );
};

export default ListTitle;
