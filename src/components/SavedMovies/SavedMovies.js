import MoviesCardList from '../../components/Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/Movies/SearchForm/SearchForm';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';


function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('favorites')))
  }, []);


  return (
    <main className='saved-movies'>
      <SearchForm
        setSearchQuery={setSearchQuery}
        
      />
      <MoviesCardList
        movies={movies}
      />
      <Footer />
    </main>
  )
}

export default SavedMovies;