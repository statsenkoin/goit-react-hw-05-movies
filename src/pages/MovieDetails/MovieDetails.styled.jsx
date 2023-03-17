import styled from 'styled-components';

export const Section = styled.div`
  max-width: 1000px;
  padding: 20px 0;
  border-top: 2px solid #888;
`;

export const MovieCard = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 250px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const Meta = styled.div`
  padding: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  text-align: center;
  text-decoration: underline;
`;
