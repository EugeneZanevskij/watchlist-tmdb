import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      name: 'Watchlist',
      path: '/'
    },
    {
      name: 'Add',
      path: '/add'
    },
    {
      name: 'Watched',
      path: '/watched'
    }
  ]
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watchlist TMDB</Link>
          </div>
          <ul className="nav-links">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header