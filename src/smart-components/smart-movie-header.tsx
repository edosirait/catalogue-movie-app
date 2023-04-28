import { FC } from "react";
import { useSelector } from "react-redux";
import SimpleHeader from "../components/atoms/simple-header";
import { RootState } from "../state-management/movie-store";

const SmartMovieHeader: FC<{}> = () => {
  const pageTitle = useSelector((state: RootState) => state.pageTitle);
  return (
    <>
      <SimpleHeader headerTitle={pageTitle} />
    </>
  );
};

export default SmartMovieHeader;
