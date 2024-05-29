import { Link } from "react-router-dom";

import notFoundImage from '../../images/notfound.jpg';

import css from "./MovieItem.module.css"

function MovieItem({ movie, location }) {
 
  return (
    <div>
      <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css["link-wrapper"]}>
        <img loading="lazy"
        className={css.img}
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : notFoundImage}
          alt={`"${movie.title}" movie poster`}
          width="180px"
          height="230px"
        />
        <p className={css.name}>{movie.title}</p>
      </Link>
    </div>
  );
}

export default MovieItem;
