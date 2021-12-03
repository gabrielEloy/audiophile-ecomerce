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
    display: flex;
    overflow: hidden;

    .image-container {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;

      .animated-circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.absoluteWhite};
        position: absolute;
        z-index: 1;
        transform: translate(5%, 30%);
        pointer-events: none;
      }
      img {
        width: 60%;
        transform: translateY(3%);
        z-index: 2;
      }
    }
    .text-container {
      flex: 2;
      padding: 133px 95px 0 0;
      text-align: left;

      .title:last-of-type {
        margin-bottom: 24px;
      }

      .description {
        margin-bottom: 40px;
      }
    }
  }
  .middle-announcement {
    grid-area: middle;
    background: ${({ theme }) => theme.primaryGray};
    width: 100%;
    height: 320px;
    padding: 101px 95px;

    .title{
      margin-bottom: 32px;
    }
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
