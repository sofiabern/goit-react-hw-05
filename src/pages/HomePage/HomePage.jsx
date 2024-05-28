import { useState, useEffect } from "react";

import { getDataTrending } from "../../movies-api";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import css from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getResults() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getDataTrending();
        const results = data.results;

        setMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getResults();
  }, []);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={"Oops. Something went wrong. Try again."} />}
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
