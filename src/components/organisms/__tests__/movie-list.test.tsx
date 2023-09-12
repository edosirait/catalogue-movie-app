import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { it, describe, expect } from "vitest";
import MovieStore from "../../../store/movie-store";
import MovieList, { MovieDataModel } from "../movie-list";

const movieListData: MovieDataModel[] = [
  {
    title: "Kung Fu Panda",
    year: "2008",
    id: "tt0441773",
    poster:
      "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    director: "Mark Osborne",
    casts: "Jack Black, Jackie Chan",
    genre: "Action, Comedy",
  },
  {
    title: "Kung Fu Panda 2",
    year: "2011",
    id: "tt1302011",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    director: "Jennifer Yuh Nelson",
    casts: "Jack Black, Jackie Chan",
    genre: "Action, Comedy",
  },
  {
    title: "Kung Fu Panda 3",
    year: "2016",
    id: "tt2267968",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_SX300.jpg",
    director: "Alessandro Carloni",
    casts: "Jack Black, Jackie Chan",
    genre: "Action, Comedy",
  },
];

describe("MovieList", () => {
  it("Should render with movies", () => {
    render(
      <Provider store={MovieStore}>
        <MovieList movieListData={movieListData} />
      </Provider>
    );
    // Use queryAllByText to check if the text is present
    const titleElements = screen.queryAllByText("Kung Fu Panda");

    // Check if there is at least one element with the given text
    expect(titleElements.length).toBeGreaterThan(0);
  });

  it("Should display movie details when a movie is selected", () => {
    render(
      <Provider store={MovieStore}>
        <MovieList movieListData={movieListData} />
      </Provider>
    );

    // Click on the first movie
    const firstMovie = screen.getByText("Kung Fu Panda");
    fireEvent.click(firstMovie);

    // Assert that the movie details are displayed.
    const directorElement = screen.queryByText("Director:");
    const castsElement = screen.queryByText("Casts:");
    const genreElement = screen.queryByText("Genre:");

    expect(directorElement).not.toBeNull();
    expect(castsElement).not.toBeNull();
    expect(genreElement).not.toBeNull();
  });
});
