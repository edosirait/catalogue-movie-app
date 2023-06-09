import { FC } from "react";
import MovieDetail from "../atoms/movie-detail";
import MoviePoster from "../atoms/movie-poster";
import MovieTitle from "../atoms/movie-title";

export type DetailPreviewModel = {
  movieTitle: string;
  posterUrl: string;
  startYear: string;
  director: string;
  casts: string;
  genre: string;
};

const FilmDetailPreview: FC<DetailPreviewModel> = ({
  movieTitle,
  posterUrl,
  startYear,
  director,
  casts,
  genre
}) => {
  return (
     <div className="flex flex-col justify-center items-center w-100 p-2 gap-2">
      <MoviePoster movieTitle={movieTitle} imgUrl={posterUrl} />
      <div className="flex flex-col bg-slate-900 p-4 rounded-2xl">
        <MovieTitle title={movieTitle} year={startYear} />
        <MovieDetail label={"Director"} value={director} />
        <MovieDetail label={"Casts"} value={casts} />
        <MovieDetail label={"Genre"} value={genre} />
      </div>
      
    </div>
  );
};

export default FilmDetailPreview;
