import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ id, title, poster_path }) => {
  return (
    <li className={css.movieItem}>
      <Link to={`/movies/${id}`} className={css.movieLink}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          className={css.movieImage}
        />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};
