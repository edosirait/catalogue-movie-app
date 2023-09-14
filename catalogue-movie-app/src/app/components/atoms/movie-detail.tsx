import React, { FC } from "react";

export type MovieDetailModel = {
  label: string;
  value: string;
};

const MovieDetail: FC<MovieDetailModel> = ({ label, value }) => {
  return (
    <div className="text-yellow-400 text-xl">
      <span>
        <strong>{`${label}: `}</strong>
      </span>
      <span>{value}</span>
    </div>
  );
};

export default MovieDetail;
