import styled from 'styled-components';

const ProductGridStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'main main'
    'middle middle'
    'bottomleft bottomright'; 
  grid-row-gap: 48px;
  grid-column-gap: 30px;

  .main-announcement {
    grid-area: main;
    background: ${({ theme }) => theme.primaryOrange};
    width: 100%;
    height: 560px;
  }
  .middle-announcement {
    grid-area: middle;
    background: ${({ theme }) => theme.primaryGray};
    width: 100%;
    height: 320px;
  }
  .bottom-left-announcement {
    grid-area: bottomleft;
    background: #212121;
    width: 100%;
    height: 320px;
  }
  .bottom-right-announcement {
    grid-area: bottomright;
    background: ${({ theme }) => theme.primaryGray};
    width: 100%;
    height: 320px;
  }
`;

export default ProductGridStyles;
