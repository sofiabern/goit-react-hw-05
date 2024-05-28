import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getDataReviews } from "../../movies-api";

import css from "./MovieReviews.module.css"

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getResults() {
      try {
        const data = await getDataReviews(movieId);
        const results = await data.results
        setReviews(results);
        
      } catch (error) {
      } finally {
      }
    }
    getResults();
  }, [movieId]);


  const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return(
   <ul className={css.list}>
    {
     reviews.length ? reviews.map((review) => <li key={review.id} className={css.item}><h2>{review.author_details.username}</h2>
        <p>{stripHtmlTags(review.content)}</p></li>) : <p className={css.text}>There are no reviews yet.</p>
    }
   </ul>
  )
   
}

export default MovieReviews;
