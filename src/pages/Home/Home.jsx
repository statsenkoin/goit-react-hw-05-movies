import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/themoviedbApi';
import { Title } from './Home.styled';
import { FilmList, PageWrapper } from 'components';

export default function Home() {
  const [filmList, setFilmList] = useState([]);
  // const location = useLocation();

  useEffect(() => {
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
    <PageWrapper>
      <Title>Trending today</Title>
      <FilmList filmList={filmList} linkTo="movies/" />
    </PageWrapper>
  );
}
