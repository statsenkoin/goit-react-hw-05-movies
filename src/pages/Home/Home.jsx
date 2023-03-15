import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/themoviedbApi';

export default function Home() {
  const [filmList, setFilmList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // console.log('filmList.length :>> ', filmList.length);
    // if (filmList.length > 0) return;
    async function getTrendingFilms() {
      try {
        const trendingFilms = await fetchTrending();
        setFilmList(trendingFilms);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <main>
      <h3>Trending today</h3>
      <ol>
        {filmList.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
