import { createStore } from 'redux';
import MovieReducer from "./movie-reducer";

export type RootState = {
  pageTitle: string;
};

const initialState: RootState = {
  pageTitle: "Movie Catalogue"
};

const MovieStore = createStore(MovieReducer, initialState);

export default MovieStore;
