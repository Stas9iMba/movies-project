import React from "react";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = import.meta.env.VITE_APP_KEY;

function Main() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search), setLoading(false));
  }, []);

  const searchMovies = (str, filterType = "all") => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        filterType !== "all" ? `&type=${filterType}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.Search), setLoading(false));
  };

  return (
    <main className="grow container mx-auto py-8">
      <Search searchMovies={searchMovies} />
      <div className="py-8">
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </div>
    </main>
  );
}

export default Main;
