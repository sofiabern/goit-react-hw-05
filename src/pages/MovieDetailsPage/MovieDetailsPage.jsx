import { useState, useEffect, useRef } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

import clsx from "clsx";

import css from "./MovieDetailsPage.module.css";

import { getDataDetails } from "../../movies-api";

import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function getLinkClass({ isActive }) {
  return clsx(css.link, isActive && css.active);
}

function MovieDetailsPage() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackUrl = useRef(location.state?.from ?? "/");
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
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={"Oops. Something went wrong. Try again."} />}
      <Link to={goBackUrl.current} className={css.button}>
        Go back
      </Link>
      {isSelectedMovieLoaded && <MovieDetails movie={selectedMovie} />}
      <p className={css["add-text"]}>Additional information</p>
      <div className={css.links}>
        <NavLink to="cast" className={getLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={getLinkClass}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
