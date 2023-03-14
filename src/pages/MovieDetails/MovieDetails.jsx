import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function MovieDetails() {
  const { movieId } = useParams();

  return (
    <main>
      <h3>MovieDetails - {`${movieId}`}</h3>
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
