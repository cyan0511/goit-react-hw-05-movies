import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import CastListItem from '../CastListItem/CastListItem';
import css from './CastList.module.css';
import Loader from '../Loader/Loader';

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void getCast();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={css.castList}>
      {cast.map(actor => (
        <CastListItem
          key={actor.id}
          profilePath={actor.profile_path}
          originalName={actor.original_name}
          name={actor.name}
        />
      ))}
    </ul>
  );
};

export default CastList;
