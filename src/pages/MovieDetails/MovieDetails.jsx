import { useLocation, useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { fetchMovieById } from 'services/themoviedbApi';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, setMovie] = useState([]);

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

  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  const year = new Date(release_date).getFullYear();
  return (
    <main>
      <Link to={backLinkHref}>== Go back to movies</Link>

      <h3>{`${title} (${year})`} </h3>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={`${title}`}
      />
      <p>User Score: {`${Math.round(vote_average * 10)}`}%</p>
      <h3>Owerview</h3>
      <p>{`${overview}`}</p>
      <h3>Genres</h3>
      {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}

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
    </main>
  );
}
