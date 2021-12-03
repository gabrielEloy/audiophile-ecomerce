import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IPrimaryButton{
  backgroundColor?: string;
}

export const PrimaryButton = styled(motion.button)<IPrimaryButton>`
  padding: 15px 30px;
  border: none;
  background: ${({ theme, backgroundColor }) => backgroundColor || theme.primaryOrange};
  color: ${({ theme }) => theme.absoluteWhite};
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    background: ${({ theme, backgroundColor }) => backgroundColor || theme.primaryOrange}70;
    color: ${({ theme }) => theme.absoluteWhite}70;
    transition: 0.2s;
  }
`;
