import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingWrapper = styled(motion.div)`
  --transition: 3s linear infinite;
  display: grid;
  min-height: 60vh;
  place-items: center;
  width: 100%;
`;

export const SvgWrapper = styled.div`
  animation: pulse var(--transition);
  width: clamp(2rem, 30%, 20rem);
  position: relative;

  #core {
    animation: heartColor var(--transition);
  }

  &::before {
    animation: pulseShadow var(--transition);
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
    z-index: -1;

    @keyframes pulseShadow {
      0% {
        box-shadow: none;
      }
      50% {
        box-shadow: #b3ecff 0 0 2.5rem 0.25rem;

        @media only screen and (min-width: 768px) {
          box-shadow: #b3ecff 0 0 5rem 0.5rem;
        }
      }
      100% {
        box-shadow: none;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes heartColor {
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
