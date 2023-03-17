import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmsList, LinkStyled } from './FilmList.styled';

export function FilmList({ filmList, linkTo }) {
  const location = useLocation();

  return (
    <FilmsList>
      {filmList.map(({ title, id }) => (
        <li key={id}>
          <LinkStyled to={`${linkTo ?? ''}${id}`} state={{ from: location }}>
            {title}
          </LinkStyled>
        </li>
      ))}
    </FilmsList>
  );
}

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  linkTo: PropTypes.string,
};
