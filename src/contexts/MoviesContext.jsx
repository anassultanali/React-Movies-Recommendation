import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  //   get the data from localStorage ...
  useEffect(() => {
    const storedfavs = localStorage.getItem("favorites");
    if (storedfavs) setFavorite(JSON.parse(storedfavs));
  }, []);

  //   pass the data to the  localStorage
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  //   --------- add , remove and check the favorites
  const addToFavorites = (movie) => {
    setFavorite((prev) => [...prev, movie]);
  };
  const removeFromFavorite = (movieId) => {
    setFavorite((prev) => prev.filter((movie) => movie.id !== movieId));
  };
  const isFavorite = (movieId) => {
    favorite.some((movie) => movie.id === movieId);
  };
  // -------------------------------------

  const value = {
    favorite,
    addToFavorites,
    removeFromFavorite,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
