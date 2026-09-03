import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// Provide state to any components wrapped around it
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // add, remove, and check if favorited
    const addToFavs = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavs = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFav = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value  = {
        favorites,
        addToFavs,
        removeFromFavs,
        isFav
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}