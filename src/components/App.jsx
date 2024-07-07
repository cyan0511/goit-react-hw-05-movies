import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './Shared/SharedLayout';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

// Lazy load should be a default export
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const MoviesPage = lazy(() => import('../pages/Movies/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetails/MovieDetailsPage.jsx')
);
const CastList = lazy(() => import('./CastList/CastList.jsx'));
const ReviewList = lazy(() => import('./ReviewList/ReviewList.jsx'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   </Suspense>
  );
};
