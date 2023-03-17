import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/themoviedbApi';
import { FilmList, PageWrapper } from 'components';
import { Title } from './Home.styled';

export default function Home() {
  const [filmList, setFilmList] = useState([]);

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
