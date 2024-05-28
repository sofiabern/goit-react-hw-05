import { useState, useEffect } from "react";
import {useLocation, useSearchParams } from "react-router-dom";

import { getDataSearch } from "../../movies-api";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getResults() {
      const data = await getDataSearch(query);
      const results = await data.results;
      setMovies(results);
    }
    getResults();
  }, [query]);

  const handleSearch = async (value) => {
    setSearchParams({ query: value });
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} location={location} />
    </>
  );
}

export default MoviesPage;
