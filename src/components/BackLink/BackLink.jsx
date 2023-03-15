import { StyledLink } from './BackLink.styled';
import { FaArrowLeft } from 'react-icons/fa';

export function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <FaArrowLeft />
      {children}
    </StyledLink>
  );
}
