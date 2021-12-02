import React from 'react';

import ProductGridStyles from './ProductsGridStyles';
interface Props {}

export const ProductsGrid = () => {
  return (
    <ProductGridStyles>
      <div className="main-announcement"></div>
      <div className="middle-announcement"></div>
      <div className="bottom-left-announcement"></div>
      <div className="bottom-right-announcement"></div>
    </ProductGridStyles>
  );
};
