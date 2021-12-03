import React from 'react';

import { motion } from 'framer-motion';

import { IAnnouncements, Main } from '../../../../pages';
import { theme } from '../../../foundation/theme';
import { H1 } from '../../../foundation/Typography/Headers';
import { Text } from '../../../foundation/Typography/Text';
import ProductGridStyles from './ProductsGridStyles';
import { PrimaryButton } from '../../../components/Buttons';

interface Props {
  announcements: IAnnouncements;
}

export const ProductsGrid = ({ announcements }: Props) => {
  const PulseAnimation = ({delay = 0}: {delay?: number}) => (<motion.div
    initial={{ width: 50, height: 50 }}
    animate={{ width: "300%", height: "300%" }}
    transition={{ ease: 'linear', duration: 8, repeat: Infinity, delay}}
    className="animated-circle"
  ></motion.div>)

  return (
    <ProductGridStyles>
      <div className="main-announcement">
        <div className="image-container">
          <img src={announcements.main.img} alt={announcements.main.title} />
          <PulseAnimation />
          <PulseAnimation delay={3}/>
          <PulseAnimation delay={6}/>
        </div>
        <div className="text-container">
          {announcements.main.title.split(' ').map((word, i) => (
            <H1 className="title" key={i} color={theme.absoluteWhite}>
              {word}
            </H1>
          ))}
          <Text className="description" color={theme.absoluteWhite}>
            {announcements.main.description}
          </Text>
          <PrimaryButton backgroundColor={theme.absoluteDark}>See Product</PrimaryButton>
        </div>
      </div>
      <div className="middle-announcement"></div>
      <div className="bottom-left-announcement"></div>
      <div className="bottom-right-announcement"></div>
    </ProductGridStyles>
  );
};
