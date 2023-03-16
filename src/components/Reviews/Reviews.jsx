import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/themoviedbApi';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const movieCast = await fetchMovieReviews(movieId);
        setReviews(movieCast);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {!reviews.length ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
