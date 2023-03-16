import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmsBox, LinkStyled } from './FilmList.styled';

export function FilmList({ filmList, linkTo }) {
  const location = useLocation();
  return (
    <FilmsBox>
      {filmList.map(({ title, id }) => (
        <LinkStyled
          key={id}
          to={`${linkTo ?? ''}${id}`}
          state={{ from: location }}
        >
          {title}
        </LinkStyled>
      ))}
    </FilmsBox>
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
