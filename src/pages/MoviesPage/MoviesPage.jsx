import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getDataSearch } from "../../movies-api";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isUniqueQuery, setIsUniqueQuery] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query.trim()) {
      return;
    }

    async function getResults() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getDataSearch(query);
        const results = await data.results;
        if (!results.length && query) setIsUniqueQuery(true);
        setMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getResults();
  }, [query]);

  const handleSearch = async (value) => {
    setSearchParams({ query: value });
    setIsUniqueQuery(false);
    setMovies([]);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage message={"Oops. Something went wrong. Try again."} />
      )}
      {isUniqueQuery && (
        <ErrorMessage message={"Your query is too unique. Try another one."} />
      )}
      <SearchBar  key={query} onSearch={handleSearch} value = {query}/>
      <MovieList movies={movies} />
    </>
  );
}

export default MoviesPage;
