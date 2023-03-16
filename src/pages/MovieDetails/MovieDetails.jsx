import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieById } from 'services/themoviedbApi';
import { BackLink, MovieMeta, PageWrapper } from 'components';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const filmDetails = await fetchMovieById(movieId);
        setMovie(filmDetails);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <PageWrapper>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <MovieMeta movie={movie} />
    </PageWrapper>
  );
}
