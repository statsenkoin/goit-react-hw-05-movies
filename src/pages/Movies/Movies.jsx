import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { fetchMovieByName } from 'services/themoviedbApi';
import { PageWrapper, FilmList, Searchbar } from 'components';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [filmList, setFilmList] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  // const location = useLocation();

  useEffect(() => {
    const query = searchQuery.get('query') ?? '';
    async function getFilmsByName() {
      try {
        const filmsByName = await fetchMovieByName(query);
        setFilmList(filmsByName);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getFilmsByName();
  }, [searchQuery]);

  function handleSearchInput(query) {
    const nextQuery = query !== '' ? { query } : {};
    setSearchQuery(nextQuery);
  }

  return (
    <PageWrapper>
      <Searchbar handleSearchInput={handleSearchInput}></Searchbar>
      <FilmList filmList={filmList} />
    </PageWrapper>
  );
}
