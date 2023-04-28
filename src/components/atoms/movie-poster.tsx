import { FC } from "react";

export type MoviePosterModel = {
  movieTitle: string;
  imgUrl: string;
};

const MoviePoster: FC<MoviePosterModel> = ({ movieTitle, imgUrl }) => {
return <img className="w-auto h-auto max-w-md max-h-md rounded-2xl" src={imgUrl} alt={movieTitle} />;
};

export default MoviePoster;
