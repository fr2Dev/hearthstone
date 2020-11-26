import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingWrapper = styled(motion.div)`
  display: grid;
  min-height: 80vh;
  place-items: center;
  width: 100%;
`;

export const SvgWrapper = styled.div`
  animation: pulse 3s linear infinite;
  width: clamp(2rem, 30%, 20rem);
  position: relative;

  #core {
    animation: color 3s linear infinite;
  }

  &::before {
    animation: pulseShadow 3s linear infinite;
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #39ccff;
    box-shadow: #39ccff 0 0 clamp(2rem, 100px, 20rem) 0px;
    z-index: -1;

    @keyframes pulseShadow {
      0% {
        box-shadow: #39ccff 0 0 clamp(1rem, 25, 10rem);
      }
      50% {
        box-shadow: #b3ecff 0 0 clamp(2rem, 50px, 10rem) 1rem;
      }
      100% {
        box-shadow: #39ccff 0 0 clamp(1rem, 25, 10rem);
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(0.95);
      }
    }

    @keyframes color {
      0% {
        fill: #39ccff;
      }
      50% {
        fill: #b3ecff;
      }
      100% {
        fill: #39ccff;
      }
    }
  }
`;
