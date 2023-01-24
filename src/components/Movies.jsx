import React from "react";

import Movie from "./Movie";

function Movies({ movies = [] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movies.length ? (
        movies.map((obj) => <Movie {...obj} key={obj.imdbID} />)
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}

export default Movies;
