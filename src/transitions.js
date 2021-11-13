export const filmCardVariant = {
  initial: {
    opacity: 0,
  },
  animated: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 1,
    },
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

export const searchBarVariant = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  animated: {
    scale: 1,
    transition: { duration: 0.7, ease: easing },
  },
  exit: {
    scale: 0,
  },
};

export const filmCardPopup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};
