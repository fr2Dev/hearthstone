import styled from 'styled-components';

export const CardList = styled.ul`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--min, 120px), 1fr));
  grid-column-gap: 2rem;

  img {
    width: 100%;
  }

  @media only screen and (min-width: 576px) {
    --min: 160px;
  }

  @media only screen and (min-width: 768px) {
    --min: 200px;
  }

  @media only screen and (min-width: 992px) {
    --min: 280px;
  }
`;

export const NotFound = styled.li`
  place-self: center;
  grid-column: 1 / -1;
  font-size: 4rem;
  text-transform: capitalize;
`;
