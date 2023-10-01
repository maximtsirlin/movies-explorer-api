import { Routes, Route, Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import './Movies.css';
import Footer from '../Footer/Footer';
import MoviesApi from '../../utils/MoviesApi';

function Movies({ setSearchQuery, loadMoreMovies, setShortFilm }) {

  return (
    <main className='movies'>
      <SearchForm
        setSearchQuery={setSearchQuery}
        setShortFilm={setShortFilm} />

      <Outlet />
      <button onClick={loadMoreMovies} className='movies__button' type='button'>
        Ещё
      </button>
      <Footer />
    </main>
  );
}

export default Movies;
