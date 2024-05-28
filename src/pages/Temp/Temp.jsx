import { useState, useEffect } from "react";


import { getDataTrending } from "../../movies-api";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

import css from "./Temp.module.css"

function Temp() {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    async function getResults() {
      try {
        // setIsLoading(true);
        setIsError(false);

        const data = await getDataTrending();
        const results = data.results;

        setMovies(results);
      } catch (error) {
        setIsError(true);
      } 
      // finally {
      //   setIsLoading(false);
      // }
    }

    getResults();
  }, []);


  return (
    <div className={css.wrapper}>
    <h1 className={css.title}>Trending today</h1>
    <MovieList movies = {movies}/>
    {/* {isLoading && <Loader />} */}
    </div>
  )
}

export default Temp;
