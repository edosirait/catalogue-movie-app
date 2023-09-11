import React, { FC } from "react";
import { Provider } from "react-redux";
import MovieListPage from "./pages/movie-list-page";
import SmartMovieHeader from "./smart-components/smart-movie-header";
import MovieStore from "./store/movie-store";
import "./index.css";
const App: FC<{}> = () => {
  return (
    <Provider store={MovieStore}>
      <div className="h-full flex flex-col gap-4 bg-slate-600	">
        <SmartMovieHeader />
        <MovieListPage />
      </div>
    </Provider>
  );
};

export default App;
