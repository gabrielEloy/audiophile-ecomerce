import styled from 'styled-components';

const ProductOfferingStyles = styled.div`
  width: 350px;
  height: 204px;
  background: ${({ theme }) => theme.primaryGray};
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: flex-end;


  img {
    width: 100px;
    position: absolute;
    top: -60px;
  }
  .call-to-action{
    display: block;
    margin-top: 15px;
  }
`;

export default ProductOfferingStyles;
