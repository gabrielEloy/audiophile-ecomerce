import { theme } from '../../foundation/theme';

export const chevronVariant = {
  rest: { scale: 1 },
  hover: {
    scale: 1.6,
    transition: { duration: 0.5 },
    translateX: 30,
  },
};

export const callToActionTextVariant = {
  rest: { scale: 1 },
  hover: {
    translateX: 30,
    transition: { duration: 0.5 },
    color: theme.absoluteDark,
  },
};

export const cartVariant = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const imageVariant = {
  rest: { filter: 'none' },
  hover: {
    translateY: -15,
    filter: 'drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.5))',
    transition: { duration: 0.5 },
  },
};
