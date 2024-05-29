import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getDataReviews } from "../../movies-api";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "./MovieReviews.module.css";

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
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

        const data = await getDataReviews(movieId);
        const results = data.results;
        setReviews(results);
        setDataFetched(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getResults();
  }, [movieId]);

  const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage message={"Oops. Something went wrong. Try again."} />
      )}

      {dataFetched && reviews.length === 0 && (
        <p className={css.text}>There are no reviews yet.</p>
      )}
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id} className={css.item}>
              <h2>{review.author_details.username}</h2>
              <p>{stripHtmlTags(review.content)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieReviews;
