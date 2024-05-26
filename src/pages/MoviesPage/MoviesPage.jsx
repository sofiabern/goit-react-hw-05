import { useState, useEffect } from "react";

import { getDataSearch } from "../../movies-api";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getResults() {
      const data = await getDataSearch(query);
      const results = await data.results;
      setMovies(results);
      console.log(results);
    }
    getResults();
  }, [query]);

  const handleSearch = async (value) => {
    setQuery(value);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
}

export default MoviesPage;
