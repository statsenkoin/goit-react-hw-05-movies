import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/themoviedbApi';

export default function Home() {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    // console.log('filmList.length :>> ', filmList.length);
    if (filmList.length > 0) return;
    async function getTrendingFilms() {
      try {
        const trendingFilms = await fetchTrending();
        setFilmList(trendingFilms);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getTrendingFilms();
  }, [filmList]);
  return (
    <main>
      <ol>
        {filmList.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
