import { Link } from "react-router-dom"

function MovieItem({movie}){
    return(
        <div>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
    )
}

export default MovieItem