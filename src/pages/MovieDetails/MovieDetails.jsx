import { useLocation, useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { fetchMovieById } from 'services/themoviedbApi';
import { BackLink, MovieMeta, PageWrapper } from 'components';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, setMovie] = useState({});

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
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieMeta movie={movie} />

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </PageWrapper>
  );
}
