import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/themoviedbApi';
import { PageWrapper, FilmList, Searchbar } from 'components';

export default function Movies() {
  const [filmList, setFilmList] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();

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
