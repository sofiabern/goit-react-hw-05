
import css from "./MovieDetails.module.css"

function MovieDetails({movie}){
    const percentageScore = Math.round(movie.vote_average * 10);
    return(
<div className={css.wrapper}>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`"${movie.title}" movie poster`} width="320px"/>
    <div>
        <h1>{movie.title}</h1>
        <p>User score: {percentageScore}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <ul>
        {movie.genres.map(({id, name}) => <li key={id}>{name}</li>)}
        </ul>
    </div>
    
</div>
    )
}

export default MovieDetails