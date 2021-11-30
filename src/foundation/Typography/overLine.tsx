import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OverLine = styled(motion.span)`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  letter-spacing: 10px;
  color: ${({ theme, color }) => color || theme.primaryOrange};
  display: block;
`;
