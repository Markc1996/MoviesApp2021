import React, { useState, useEffect } from "react";
import { getMovies } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const removeFromFavorites = (movieId) => {
    setMovies((movies) => {
      const updatedMovies = movies.map((m) =>
        m.id === movieId ? { ...m, favorite: false } : m
      );
      return updatedMovies;
    });
  };

  const addToFavorites = (movieId) => {
    setMovies((movies) => {
      const updatedMovies = movies.map((m) =>
        m.id === movieId ? { ...m, favorite: true } : m
      );
      return updatedMovies;
    });
  };

  

  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;