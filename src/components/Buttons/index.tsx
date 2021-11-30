import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PrimaryButton = styled(motion.button)`
  padding: 15px 30px;
  border: none;
  background: ${({ theme }) => theme.primaryOrange};
  color: ${({ theme }) => theme.absoluteWhite};
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    background: ${({ theme }) => theme.lightOrange};
    color: ${({ theme }) => theme.absoluteWhite}70;
    transition: 0.2s;
  }
`;
