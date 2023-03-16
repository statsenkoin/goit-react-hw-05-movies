import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Section, MovieCard, Image, Meta, Title } from './MovieMeta.styled';

export function MovieMeta({ movie }) {
  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  const year = new Date(release_date).getFullYear();
  return (
    <>
      <Section>
        <MovieCard>
          <Image
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={`${title}`}
          />
          <Meta>
            <Title>{`${title} (${year})`} </Title>
            <p>User Score: {`${Math.round(vote_average * 10)}`}%</p>
            <h3>Owerview</h3>
            <p>{`${overview}`}</p>
            <h3>Genres</h3>
            {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}
          </Meta>
        </MovieCard>
      </Section>

      <Section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </>
  );
}

MovieMeta.propTypes = {
  movie: PropTypes.object.isRequired,
};
