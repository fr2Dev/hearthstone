import styled, { css } from 'styled-components';
const screenSizes = [
  { breakpoint: '576px', value: '540px' },
  { breakpoint: '768px', value: '720px' },
  { breakpoint: '992px', value: '960px' },
  { breakpoint: '1200px', value: '1040px' },
  { breakpoint: '1440px', value: '1400px' },
  { breakpoint: '1680px', value: '1600px' },
];

export const Container = styled.div`

  margin: auto;
  max-width: 100%;
  padding: 0 var(--base, 1rem);

  ${screenSizes.map((size) => {
    const { breakpoint, value } = size;

    return css`
      @media only screen and (min-width: ${breakpoint}) {
        max-width: ${value};
      }
    `;
  })}
}
`;

export const LogoWrapper = styled.div`
  max-width: 432px;
  width: calc(100% - 2rem);
  margin: 1rem auto;

  img {
    width: 100%;
  }
`;
