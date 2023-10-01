import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  visibleMovies,
  movies,
  filteredMovies,
  currentPath,
  favorites,
  addToFavorites,
  removeFromFavorites
 }) {



  return (
    <ul className='movies-card-list'>
      <MoviesCard
        visibleMovies={visibleMovies}
        movies={movies}
        filteredMovies={filteredMovies}
        currentPath={currentPath}
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </ul>
  )
}

export default MoviesCardList;