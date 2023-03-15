import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { fetchMovieByName } from 'services/themoviedbApi';
import { PageWrapper, FilmList } from 'components';

export default function Movies() {
  const [filmList, setFilmList] = useState([]);
  // const location = useLocation();

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
    <PageWrapper>
      <FilmList filmList={filmList} linkTo="" />

      {/* <div>
        {filmList.map(({ title, id }) => (
          <Link key={id} to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        ))}
      </div> */}
    </PageWrapper>
  );

  // const trendingFilms = await fetchMovie('avatar');
}
