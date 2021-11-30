import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { PrimaryButton } from '../../../components/Buttons';
import { Divider } from '../../../components/Divider';
import { theme } from '../../../foundation/theme/index';
import { H1 } from '../../../foundation/Typography/Headers';
import { OverLine } from '../../../foundation/Typography/OverLine';
import { Text } from '../../../foundation/Typography/Text';
import { useCurrentScreenSize } from '../../../hooks/useCurrentScreenSize';
import { IImg } from '../../../interfaces/IImg';
import { getCurrentScreenSize } from '../../../services/dimensions';
import HighlightStyles from './HighlightStyles';

interface IHighlightProps {
  label: string;
  title: string;
  description: string;
  path: string;
  img: IImg;
}

export const Highlight = (props: IHighlightProps) => {
  const [img, setImage] = useState('');
  const { ref, screenSize } = useCurrentScreenSize();

  useEffect(() => {
    const screenSize = getCurrentScreenSize(window.innerWidth);
    const img = props.img[screenSize];

    setImage(img);
  }, []);

  return (
    <HighlightStyles ref={ref}>
      {screenSize === 'desktop' && <Divider top={0} left={165} right={165} />}
      <motion.div className="content-container">
        <OverLine
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          animate="visible"
          className={'label'}
          color={theme.darkGray}
        >
          {props.label}
        </OverLine>
        <H1
          initial={{ opacity: 0.5, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="title"
          color={theme.absoluteWhite}
        >
          {props.title}
        </H1>
        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="description"
          color={theme.darkGray}
        >
          {props.description}
        </Text>
        <PrimaryButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="button"
        >
          See product
        </PrimaryButton>
      </motion.div>
      <div className="image-container">
        <motion.img initial={{opacity: 0}}  animate={{opacity: 1}} transition={{ delay: .7, duration: 2 }} src={img} />
      </div>
    </HighlightStyles>
  );
};
