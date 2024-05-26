import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataCast } from "../../movies-api";

function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getResults() {
      try {
        const data = await getDataCast(movieId);
        const results = await data.cast
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
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt=""
          />
          <p>{person.name}</p>
          <p>Character: {person.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
