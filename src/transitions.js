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
