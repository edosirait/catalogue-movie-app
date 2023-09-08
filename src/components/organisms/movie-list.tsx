import React, { FC, useState, useMemo } from "react";
import { listMovieRecord } from "../../core";

import SmartMovieList from "../../smart-components/smart-movie-list";
import FilmDetailPreview from "../molecules/film-detail-preview";

type MovieDataModel = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

type MovieTypeModel = {
  movieListData: MovieDataModel[];
};

const MovieList: FC<MovieTypeModel> = ({ movieListData }) => {
  const [selectedMovieId, setSelectedMovieId] = useState<string>(
    movieListData[0].id
  );

  const movieMap = useMemo(
    () => listMovieRecord(movieListData, "id"),
    [movieListData]
  );
  const selectedMovie = movieMap[selectedMovieId] || movieListData[0];
  const { title, poster, year, director, casts, genre } = selectedMovie;

  return (
    <div className="flex flex-row h-full w-full pt-6 pb-10 gap-4">
      <div className="flex flex-col items-center text-center w-1/2 mx-4 bg-grey-700">
        <FilmDetailPreview
          genre={genre}
          casts={casts}
          director={director}
          startYear={year}
          posterUrl={poster}
          movieTitle={title}
        />
      </div>

      <div className="flex flex-col items-center text-start w-1/2 mx-4 bg-yellow-400">
        <SmartMovieList
          movieListData={movieListData}
          onClickFilm={setSelectedMovieId}
          clickedId={selectedMovieId}
          moviePlay={movieMap}
        />
      </div>
    </div>
  );
};

export default MovieList;
