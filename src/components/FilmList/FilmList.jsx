import React from 'react';
import { useLocation } from 'react-router-dom';
import { FilmsBox, LinkStyled } from './FilmList.styled';

export function FilmList({ filmList, linkTo }) {
  const location = useLocation();
  return (
    <FilmsBox>
      {filmList.map(({ title, id }) => (
        <LinkStyled key={id} to={`${linkTo}${id}`} state={{ from: location }}>
          {title}
        </LinkStyled>
      ))}
    </FilmsBox>
  );
}
