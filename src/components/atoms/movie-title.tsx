import React from "react";
import { FC } from "react";
import "../../index.css";

export type MovieTitleModel = {
  title: string;
  year: string;
};

const MovieTitle: FC<MovieTitleModel> = ({ title, year }) => {
  return <h3 className="text-yellow-400 text-2xl">{`${title} (${year})`}</h3>;
};

export default MovieTitle;
