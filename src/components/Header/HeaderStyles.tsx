import styled from "styled-components";

const HeaderWrapper = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.absoluteDark};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 165px;
  justify-content: space-between;
  box-sizing: border-box;

  .section {
    flex: 1;
  }

  .cart {
    display: flex;
    justify-content: flex-end;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    li {
      cursor: pointer;
    }
  }
`;

export default HeaderWrapper;
