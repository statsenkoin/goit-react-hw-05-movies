import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/themoviedbApi';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={name}
            />
            <h3>{name}</h3>
            <p>Character:</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
