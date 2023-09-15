import React from "react";

const MovieDetailPage = (props: any) => {
  // Fetch data for the movie with the specified id or use it as needed
  // ...

  console.log(props);

  return (
    <div className="h-screen text-center">
      <h2>Movie Detail Page</h2>
      <p>Movie ID: {props.params.id}</p>
      {/* Display movie details here */}
    </div>
  );
};

export default MovieDetailPage;
