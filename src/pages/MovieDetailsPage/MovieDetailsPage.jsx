import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getDataDetails } from "../../movies-api";

import MovieDetails from "../../components/MovieDetails/MovieDetails";

function MovieDetailsPage() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getResults() {
      try {
        setIsLoading(true);
        setIsError(false);

        const results = await getDataDetails(movieId);

        setSelectedMovie(results);
    
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getResults();
  }, [movieId]);

//   const { original_title, vote_average, overview, genres, poster_path } = selectedMovie;
  const isSelectedMovieLoaded = selectedMovie.genres;

  return(
    <>
    <button>Go back</button>
    {isSelectedMovieLoaded && <MovieDetails movie={selectedMovie}/>}
    <p>Additional information</p>
    <Link to="cast">Cast</Link>

    </>
  )
}

export default MovieDetailsPage;
