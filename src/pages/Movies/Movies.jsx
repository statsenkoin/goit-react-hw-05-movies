import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovieByName } from 'services/themoviedbApi';

export default function Movies() {
  const [filmList, setFilmList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // if (filmList.length) return;
    async function getFilmsByName() {
      try {
        const filmsByName = await fetchMovieByName('batman');
        setFilmList(filmsByName);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getFilmsByName();
  }, []);

  return (
    <main>
      <ul>
        {filmList.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );

  // const trendingFilms = await fetchMovie('avatar');
}
