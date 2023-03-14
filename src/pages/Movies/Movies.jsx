import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieByName } from 'services/themoviedbApi';

export default function Movies() {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    if (filmList.length) return;
    async function getFilmsByName() {
      try {
        const filmsByName = await fetchMovieByName('batman');
        setFilmList(filmsByName);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getFilmsByName();
  }, [filmList]);
  return (
    <main>
      <ul>
        {filmList.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );

  // const trendingFilms = await fetchMovie('avatar');
}
