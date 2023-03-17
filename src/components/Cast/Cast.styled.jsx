import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
`;

export const Actor = styled.li`
  width: 160px;
`;

export const ActorPhoto = styled.img`
  width: 160px;
  display: block;
`;

export const ActorName = styled.h3`
  margin: 8px 0;
`;

export const Character = styled.p`
  margin: 0;
`;
