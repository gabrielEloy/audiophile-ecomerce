import styled from 'styled-components';

interface IDivider {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  padding?: string;
}

export const Divider = styled.hr<IDivider>`
  padding: ${({ padding }) => padding || '0px'};
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.darkGray};
  margin: 0;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  bottom: ${({ bottom }) => bottom}px;
`;
