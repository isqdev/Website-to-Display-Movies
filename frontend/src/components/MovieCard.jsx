import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {
    const {
        isFavorite, addToFavorites, removeFromFavorites,
        isWatchlist, addToWatchlist, removeFromWatchlist
    } = useMovieContext()

    const favorite = isFavorite(movie.id)
    const watchlist = isWatchlist(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    function onWatchlistClick (e) {
        e.preventDefault()
        if (watchlist) removeFromWatchlist(movie.id)
        else addToWatchlist(movie)
    }
    
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
                <button className={`watchlist-btn ${watchlist ? "active" : ""}`} onClick={onWatchlistClick}>
                    +
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard