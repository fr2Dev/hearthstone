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
  cursor: pointer;
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
  outline: 1px solid rgba(255, 0, 0, 0.15);
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

  &:hover {
    background-color: #00aeff !important;
    border: solid 1px #00aeff !important;
    color: #fff;
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
