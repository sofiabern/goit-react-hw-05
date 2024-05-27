import { useState, useEffect, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

import { getDataDetails } from "../../movies-api";

import MovieDetails from "../../components/MovieDetails/MovieDetails";

function MovieDetailsPage() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackUrl = useRef(location.state?.goBackPath || "/");


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

  const isSelectedMovieLoaded = selectedMovie.genres;

  return (
    <>
      <Link to={goBackUrl.current}>Go back</Link>
      {isSelectedMovieLoaded && <MovieDetails movie={selectedMovie} />}
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
