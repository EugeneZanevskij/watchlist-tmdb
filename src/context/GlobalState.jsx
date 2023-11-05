import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],
  watched: JSON.parse(localStorage.getItem("watched")) || [],
};

export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const deleteMovieFromWatchlist = (id) => {
    dispatch({ type: "DELETE_MOVIE_FROM_WATCHLIST", payload: id });    
  };
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  const deleteMovieFromWatched = (id) => {
    dispatch({ type: "DELETE_MOVIE_FROM_WATCHED", payload: id });
  };
  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  }
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        deleteMovieFromWatchlist,
        addMovieToWatched,
        deleteMovieFromWatched,
        moveToWatchlist
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};