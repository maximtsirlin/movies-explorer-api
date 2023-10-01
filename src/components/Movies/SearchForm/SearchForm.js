import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ setSearchQuery, setShortFilm }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  const handleShortFilmChange = (event) => {
    setShortFilm(event.target.checked);
  };

  return (
    <section className='search'>
      <div className='search__form'>
        <div className='search__search'>
          <input
            className='search__input'
            placeholder='Фильм'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className='search__button'
            type='submit'
            onClick={handleSearch}
          >
            Найти
          </button>
        </div>
        <label className='search__label'>
          Короткометражки
          <input
            className='search__invisible'
            type='checkbox'
            name='short-films'
            id='short-films'
            value='short-films'
            onChange={handleShortFilmChange}
          />
          <span className='search__visible'></span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
