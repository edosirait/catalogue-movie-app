import React, { FC } from "react";
import { useSelector } from "react-redux";
import SimpleHeader from "../components/atoms/simple-header";
import { RootState } from "../store/movie-store";

const SmartMovieHeader: FC<{}> = () => {
  const pageTitle = useSelector((state: RootState) => state.pageTitle);
  return (
    <>
      <SimpleHeader headerTitle={pageTitle} />
    </>
  );
};

export default SmartMovieHeader;
