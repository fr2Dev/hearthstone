import styled from 'styled-components';

export const CardList = styled.ul`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-column-gap: 2rem;

  img {
    width: 100%;
  }
`;
