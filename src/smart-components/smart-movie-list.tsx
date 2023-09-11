import React, { FC } from "react";
import { useDispatch } from "react-redux";
import ListFilm from "../components/molecules/list-film";
import { setPageTitle } from "../store/movie-action";

type MovieListDataModel = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

type MovieListModel = {
  movieListData: MovieListDataModel[];
  onClickFilm: Function;
  clickedId: string;
  moviePlay: Record<string, any>;
};

const SmartMovieList: FC<MovieListModel> = ({
  movieListData,
  onClickFilm,
  clickedId,
  moviePlay,
}) => {
  const dispatch = useDispatch();
  const onMovieSelected = (movieId: string) => {
    onClickFilm(movieId);
    dispatch(setPageTitle(moviePlay[movieId].title));
  };

  return (
    <>
      <ListFilm
        dataList={movieListData}
        onClickItem={onMovieSelected}
        selectedId={clickedId}
      />
    </>
  );
};

export default SmartMovieList;
