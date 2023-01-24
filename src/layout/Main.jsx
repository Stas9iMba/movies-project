import React, { useState, useCallback, useEffect } from "react";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = import.meta.env.VITE_APP_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function asyncPart() {
      try {
        const result = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`
        );
        const data = await result.json();
        setMovies(data.Search);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    }

    asyncPart();
  }, []);

  const searchMovies = useCallback(async (string_, filterType = "all") => {
    setLoading(true);
    const result = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${string_}${
        filterType !== "all" ? `&type=${filterType}` : ""
      }`
    );
    const data = await result.json();
    setMovies(data.Search);
    setLoading(false);
  }, []);

  return (
    <main className="container mx-auto grow py-8">
      <Search searchMovies={searchMovies} />
      <div className="py-8">
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </div>
    </main>
  );
}

export default Main;
