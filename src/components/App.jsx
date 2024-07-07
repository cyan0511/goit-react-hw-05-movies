import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './Shared/SharedLayout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { HomePage } from '../pages/Home/HomePage';
import { MoviesPage } from '../pages/Movies/MoviesPage';
import { MovieDetailsPage } from '../pages/MovieDetails/MovieDetailsPage';
import CastList from './CastList/CastList';
import ReviewList from './ReviewList/ReviewList';

/*
const HomePage = lazy(() => import('../pages/Home/HomePage.jsx'));
const MoviesPage = lazy(() =>
  import('../pages/Movies/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetails/MovieDetailsPage.jsx')
);
*/

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />}>
        </Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewList />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
