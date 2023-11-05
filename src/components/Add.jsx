import React, { useState } from 'react'
import MovieCard from './MovieCard';

const Add = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${e.target.value}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if(!data.errors) setResults(data.results)
        else setResults([]);});
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder='Search for a movie' 
              value={search}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add