import styled from "styled-components";

interface IDivider {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const Divider = styled.hr<IDivider>`
  width: calc(100% - 1000px);
  padding: 0px 165px;
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.darkGray};
  margin: 0;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;
