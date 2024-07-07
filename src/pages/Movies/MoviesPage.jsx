import { useState } from 'react';
import { fetchMovieByQuery } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Outlet } from 'react-router-dom';
import css from './MoviesPage.module.css';

export const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('Friends');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    if (!searchQuery.trim()) return;
    try {
      const movies = await fetchMovieByQuery(searchQuery);
      console.log('movies', movies);
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={css.inputWrapper}>
        <input
          type="text"
          className={css.input}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={fetchMovies}>Search</button>
      </div>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};
