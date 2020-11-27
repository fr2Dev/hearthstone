import styled from 'styled-components';

export const CardList = styled.ul`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 2rem;

  img {
    width: 100%;
  }
`;

export const NotFound = styled.li`
  place-self: center;
  grid-column: 1 / -1;
  font-size: 4rem;
  text-transform: capitalize;
`;
