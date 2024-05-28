import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataCast } from "../../movies-api";

import notFoundImage from "../../images/notfound.jpg";

import css from "./MovieCast.module.css";

function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getResults() {
      try {
        const data = await getDataCast(movieId);
        const results = await data.cast;
        setCast(results);
      } catch (error) {
      } finally {
      }
    }
    getResults();
  }, [movieId]);
  return (
    <ul className={css.list}>
      {cast.map((person) => (
        <li key={person.id} className={css.item}>
          <img
            className={css.img}
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : notFoundImage
            }
            
            alt={person.name}
            width="160px"
            height="220px"
          />
          <p className={css.text}>{person.name}</p>
          <p className={css.text}>Character: {person.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
