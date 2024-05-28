import MovieItem from "../MovieItem/MovieItem";

import css from "./MovieList.module.css"

function MovieList({ movies, location }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <MovieItem movie={movie} location={location}/>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
