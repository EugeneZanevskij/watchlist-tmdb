import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watchlist</h1>
        </div>
        <div className="movie-grid">
          {watchlist.length > 0 ? (
            watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist"/>
            ))
          ) : (
            <h2 className="no-movies">No movies in your list! Add some!</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default Watchlist