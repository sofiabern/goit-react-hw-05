import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataCast } from "../../movies-api";

import notFoundImage from "../../images/notfound.jpg";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "./MovieCast.module.css";

function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    async function getResults() {
      try {
        setIsLoading(true);
        setIsError(false);
        setDataFetched(false);

        const data = await getDataCast(movieId);
        const results = data.cast;
        setCast(results);
        setDataFetched(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getResults();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage message={"Oops. Something went wrong. Try again."} />
      )}

      {dataFetched && cast.length === 0 && (
        <p className={css["noinfo-text"]}>
          There is no information about the cast.
        </p>
      )}
      {cast.length > 0 && (
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
      )}
    </>
  );
}

export default MovieCast;
