import React from 'react';
import './App.css';
import Header from './components/Header';
import Watched from './components/Watched';
import Add from './components/Add';
import Watchlist from './components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Watchlist />} />
          <Route path="/add" element={<Add />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App