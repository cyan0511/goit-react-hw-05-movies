import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'api/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const loadTrendingMovies = async () => {
    try {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void loadTrendingMovies();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Trending Movies</h2>
      {trendingMovies.length ? <MovieList movies={trendingMovies} /> : null}
    </div>
  );
};

export default HomePage;
