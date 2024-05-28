import css from "./MovieDetails.module.css";

import notFoundImage from '../../images/notfound.jpg';

function MovieDetails({ movie }) {
  const percentageScore = Math.round(movie.vote_average * 10);
  return (
    <div className={css.wrapper}>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : notFoundImage}
        alt={`"${movie.title}" movie poster`}
        width="320px"
      />
      <div>
        <h1 className={css.name}>{movie.title}</h1>
        <p className={css.score}>User score: {percentageScore}%</p>
        <h2>Overview</h2>
        <p className={css["overview-text"]}>{movie.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movie.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;
