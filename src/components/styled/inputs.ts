import styled from 'styled-components';

export const Button = styled.button`
  appearance: button;
  background-color: #0e86ca;
  background-image: none;
  border: 1px solid #00aeff;
  border-radius: 0;
  bottom: auto;
  box-sizing: border-box;
  clear: none;
  color: #fff;
  float: none;
  font-family: Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
  height: 42px;
  left: auto;
  letter-spacing: normal;
  line-height: normal;
  margin: 0;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  outline: 1px solid rgba(0, 0, 255, 0.15);
  overflow: visible;
  padding: 0 24px;
  position: relative;
  right: auto;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  top: auto;
  visibility: visible;
  white-space: normal;
  width: auto;
  z-index: auto;

  &:not(:disabled) {
    &:hover {
      background-color: #00aeff;
      border: solid 1px #00aeff;
      color: #fff;
      cursor: pointer;
    }
  }

  &:disabled {
    background-color: lightgrey;
    border-color: #fff;
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;

  button + button {
    margin-left: 1rem;
  }
`;

export const Select = styled.select`
  font-size: 13px;
  font-weight: 700;
  height: 42px;
  border: 1px solid transparent;
  padding: 0 24px;

  &,
  option {
    font-family: Arial, sans-serif;
  }
`;

export const InputsWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-bottom: 1rem;

  * {
    width: 100%;
  }
  button {
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;

    * {
      width: auto;
    }
    button {
      text-align: left;
    }
  }
`;
