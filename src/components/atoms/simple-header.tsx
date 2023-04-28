import { FC } from "react";
import "../../index.css";

type HeaderModel = {
  headerTitle: string;
};

const SimpleHeader: FC<HeaderModel> = ({ headerTitle }) => {
  return (
    <header className="bg-slate-900 flex flex-row items-center justify-center h-20">
      <h1 className="text-center text-yellow-400 text-3xl font-bold">
        {headerTitle}
       </h1>
    </header>
  );
};

export default SimpleHeader;
