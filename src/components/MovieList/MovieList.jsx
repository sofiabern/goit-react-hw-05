import MovieItem from "../MovieItem/MovieItem";

function MovieList({ movies, location }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} location={location}/>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
