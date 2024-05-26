import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataCast } from "../../movies-api";

function MovieCast() {
  const [cast, setCast] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getResults() {
      try {
        const results = await getDataCast(movieId);
        console.log(results);
        setCast(results);
      } catch (error) {
      } finally {
      }
    }
    getResults();
  }, [movieId]);
  return (
    <ul>
      {cast.map((person) => (
        <li key={person.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.cast.profile_path}`}
            alt=""
          />
          <p>{person.cast.name}</p>
          <p>{person.cast.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
