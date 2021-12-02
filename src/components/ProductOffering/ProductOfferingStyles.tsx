import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProductOfferingStyles = styled(motion.div)`
  width: 350px;
  height: 204px;
  background: ${({ theme }) => theme.primaryGray};
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: flex-end;
  cursor: pointer;

  img {
    width: 100px;
    position: absolute;
    top: -30px;
  }
  .actions-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    cursor: pointer;
    position: relative;
    .call-to-action {
      display: block;
    }

    .svg-container {
      position: absolute;
      left: 0;
      svg {
        path {
          fill: ${({ theme }) => theme.darkGray};
        }
      }
    }

    .chevron-container {
      margin-left: 5px;
    }
  }
`;

export default ProductOfferingStyles;
