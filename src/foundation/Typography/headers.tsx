import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 56px;
    letter-spacing: 2px;
    color: ${({theme, color}) => color || theme.absoluteDark};
`
export const H2 = styled.h2`
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 1.5px;
    color: ${({theme, color}) => color || theme.absoluteDark};
`

export const H3 = styled.h3`
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: 1.15px;
    color: ${({theme, color}) => color || theme.absoluteDark};
`
export const H4 = styled.h4`
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 28px;
    letter-spacing: 2px;
    color: ${({theme, color}) => color || theme.absoluteDark};
`
export const H5 = styled.h5`
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 1.7px;
    color: ${({theme, color}) => color || theme.absoluteDark};
`
export const H6 = styled.h6`
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 1.3px;
    color: ${({theme, color}) => color || theme.absoluteDark};
`