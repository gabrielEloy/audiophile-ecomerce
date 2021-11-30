import React from 'react';

import { H6 } from '../../foundation/Typography/Headers';
import { SubTitle } from '../../foundation/Typography/Subtitle';
import ProductOfferingStyles from './ProductOfferingStyles';


interface Props {
  title: string;
  image: string;
}

export const ProductOffering = ({ title, image }: Props) => {
  return (
    <ProductOfferingStyles>
      <img src={image} alt={title} />
      <H6 className="title">{title}</H6>
      <SubTitle className="call-to-action">Shop</SubTitle>
    </ProductOfferingStyles>
  );
};
