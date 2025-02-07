import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    useEffect (() => {
        const storedWatchlist = localStorage.getItem("watchlist")

        if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist))
    }, [])

    useEffect (() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }, [watchlist])


    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const addToWatchlist = (movie) => {
        setWatchlist(prev => [...prev, movie])
    }

    const removeFromWatchlist = (movieId) => {
        setWatchlist(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isWatchlist = (movieId) => {
        return watchlist.some(movie => movie.id === movieId)
    } 

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isWatchlist
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};