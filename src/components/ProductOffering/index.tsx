import React from 'react';

import { motion } from 'framer-motion';

import ChevronRight from '../../../public/assets/svg/chevron-right';
import ShoppingCartSVG from '../../../public/assets/svg/shopping-cart';
import { theme } from '../../foundation/theme/index';
import { H6 } from '../../foundation/Typography/Headers';
import { SubTitle } from '../../foundation/Typography/Subtitle';
import ProductOfferingStyles from './ProductOfferingStyles';

interface Props {
  title: string;
  image: string;
}

const chevronVariant = {
  rest: { scale: 1 },
  hover: {
    scale: 1.6,
    transition: { duration: 0.5 },
    translateX: 30,
  },
};

const callToActionTextVariant = {
  rest: { scale: 1 },
  hover: {
    translateX: 30,
    transition: { duration: 0.5 },
    color: theme.absoluteDark,
  },
};

const cartVariant = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const ProductOffering = ({ title, image }: Props) => {
  return (
    <ProductOfferingStyles initial="rest" whileHover="hover" animate="rest">
      <img src={image} alt={title} />
      <H6 className="title">{title}</H6>
      <motion.div className="actions-container">
        <motion.div className="svg-container" variants={cartVariant}>
          <ShoppingCartSVG />
        </motion.div>
        <SubTitle variants={callToActionTextVariant} color={theme.darkGray} className="call-to-action">
          Shop
        </SubTitle>
        <motion.div variants={chevronVariant} className="chevron-container">
          <ChevronRight />
        </motion.div>
      </motion.div>
    </ProductOfferingStyles>
  );
};
