import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmsBox = styled.div`
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
