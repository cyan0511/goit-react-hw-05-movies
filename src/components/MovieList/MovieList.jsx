import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
