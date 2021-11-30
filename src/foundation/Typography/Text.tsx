import styled from 'styled-components'

export const Text = styled.p`
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    color: ${({theme, color}) => color || theme.absoluteDark };
    line-height: 25px;
    margin: 0;
    padding: 0;

    @media (max-width: ${({theme}) => theme.dimensions.mobile}px) {
        font-size: 15px;
    }
`