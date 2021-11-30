import { dimensions } from '../dimensions';
declare module 'styled-components' {
  export interface DefaultTheme {
    primaryOrange: '#D87D4A';
    primaryDark: '#101010';
    primaryGray: '#F1F1F1';
    lightGray: '#FAFAFA';
    lightOrange: '#FBAF85';
    absoluteWhite: '#FFFFFF';
    absoluteDark: '#000000';
    darkGray: '#979797';
    dimensions: {
      mobile: 375;
      tablet: 768;
      desktop: 1440;
    };
  }
}

export const theme = {
  primaryOrange: '#D87D4A',
  primaryDark: '#101010',
  primaryGray: '#F1F1F1',
  lightGray: '#FAFAFA',
  lightOrange: '#FBAF85',
  absoluteWhite: '#FFFFFF',
  absoluteDark: '#000000',
  darkGray: '#979797',
  dimensions,
};
