import { Link } from "react-router-dom"

function MovieItem({movie, location}){
    return(
        <div>
            <Link to={`/movies/${movie.id}`} state={{ goBackPath: location }}>{movie.title}</Link>
        </div>
    )
}

export default MovieItem