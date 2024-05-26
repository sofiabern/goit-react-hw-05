import MovieItem from "../MovieItem/MovieItem";

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
