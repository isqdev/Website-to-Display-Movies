import "../css/WatchList.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function WatchList() {
    const { watchlist } = useMovieContext();

    if (watchlist) {
        return (
            <div className="watchlist">
                <h2>Your watch list</h2>
                <div className="movies-grid">
                    {watchlist.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="watchlist-empty">
            <h2>No movies here yet</h2>
            <p>Just a test string lala</p>
        </div>
    )
}

export default WatchList