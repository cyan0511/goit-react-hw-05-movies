import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api/api';
import css from './MovieDetailsPage.module.css';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.container}>
      <button className={css.goBackButton} onClick={() => navigate(-1)}>⬅ Go back</button>

      <div className={css.movieDetailsContainer}>
        <img
          className={css.image}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={movieDetails.title}
        />
        <div className={css.movieDetailsWrap}>
          <h1>{movieDetails.title}</h1>
          <h4>User score: {Math.round(movieDetails.vote_average * 10)}%</h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
        </div>

      </div>

      <div className={css.additionalInfo}>
        <h3>Additional Information</h3>
        <div className={css.additionalLinks}>
          <Link to="cast">
            <button onClick={() => {
            }}>Cast
            </button>
          </Link>
          <Link to="reviews">
            <button onClick={() => {
            }}>Reviews
            </button>
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

    </div>
  )
    ;
};

export default MovieDetailsPage;
