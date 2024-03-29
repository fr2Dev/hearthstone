export const fadein = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const slideup = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};
