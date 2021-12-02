import React from 'react';

import { motion } from 'framer-motion';

import ChevronRight from '../../../public/assets/svg/chevron-right';
import ShoppingCartSVG from '../../../public/assets/svg/shopping-cart';
import { theme } from '../../foundation/theme/index';
import { H6 } from '../../foundation/Typography/Headers';
import { SubTitle } from '../../foundation/Typography/Subtitle';
import { imageVariant, chevronVariant, cartVariant, callToActionTextVariant } from './animationVariants';
import ProductOfferingStyles from './ProductOfferingStyles';

interface Props {
  title: string;
  image: string;
}

export const ProductOffering = ({ title, image }: Props) => {
  return (
    <ProductOfferingStyles initial="rest" whileHover="hover" animate="rest">
      <motion.img variants={imageVariant} src={image} alt={title} />
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
