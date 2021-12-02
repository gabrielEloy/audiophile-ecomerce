import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SubTitle = styled(motion.span)`
  font-family: 'Manrope', sans-serif;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1px;
  color: ${({ theme, color }) => color || theme.primaryOrange};
`;
