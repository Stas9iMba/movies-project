import React from "react";

import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movies.map((obj) => (
        <Movie {...obj} key={obj.imdbID} />
      ))}
    </div>
  );
}

export default Movies;
