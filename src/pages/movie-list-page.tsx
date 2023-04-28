import { FC } from "react";
import MovieList from "../components/organisms/movie-list";
import dataDummy from "../assets/dummy/data-list.json";

const MovieListPage: FC<{}> = () => {
  return (
    <>
      <MovieList movieListData={dataDummy} />
    </>
  );
};

export default MovieListPage;
