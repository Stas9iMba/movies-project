import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

function Main() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=8ddc5ad2&s=matrix`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);

  const searchMovies = (str, filterType = "all") => {
    fetch(`http://www.omdbapi.com/?apikey=8ddc5ad2&s=${str}${filterType !== 'all' ? `&type=${filterType}` : ''}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };

  return (
    <main className="grow container mx-auto py-8">
      <Search searchMovies={searchMovies} />
      <div className="py-8">
        {movies?.length ? <Movies movies={movies} /> : <Preloader />}
      </div>
    </main>
  );
}

export default Main;
