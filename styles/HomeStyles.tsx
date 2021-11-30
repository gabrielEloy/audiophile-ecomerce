import styled from 'styled-components';

const HomeStyles = styled.div`
  .highlight {
    margin-bottom: 120px;
  }

  .content {
    padding: 0 165px;

    .listings {
      display: grid;
      grid-template-columns: repeat(3, 1fr) repeat(2, 0);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 0px;
    }
  }
`;

export default HomeStyles;
