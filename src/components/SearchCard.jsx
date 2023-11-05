import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const SearchCard = ({movie}) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext); 

  let storedMovie = watchlist.find(item => item.id === movie.id);
  let storedWatchedMovie = watched.find(item => item.id === movie.id);
  const isMovieInWatchlist = !!storedMovie || !!storedWatchedMovie;
  const isMovieInWatched = !!storedWatchedMovie;
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        ) : (
          <div className='filler-poster' />
        )}
      </div>
      <div className='info-wrapper'>
        <h3 className='title'>{movie.title}</h3>
        <h4 className='release-date'>Release Date: {movie.release_date ? movie.release_date.substr(0, 4) : '-'}</h4>
        <div className='controls'>
          <button className='btn' disabled={isMovieInWatchlist} onClick={() => addMovieToWatchlist(movie)}>
            Add to Watchlist
          </button>
          <button className='btn' disabled={isMovieInWatched} onClick={() => addMovieToWatched(movie)}>
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchCard