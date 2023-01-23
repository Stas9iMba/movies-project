import React from "react";
import Movies from "../components/Movies";

function Main() {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=8ddc5ad2&s=matrix")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <main className="grow container mx-auto py-12">
      {movies.length ? <Movies movies={movies} /> : <h3>Loading...</h3>}
    </main>
  );
}

export default Main;
