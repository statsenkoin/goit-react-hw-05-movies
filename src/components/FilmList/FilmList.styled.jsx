import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmsList = styled.ul`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const LinkStyled = styled(Link)`
  font-size: 18px;
  line-height: 1.5em;
  text-decoration: none;
  color: #000;
`;
