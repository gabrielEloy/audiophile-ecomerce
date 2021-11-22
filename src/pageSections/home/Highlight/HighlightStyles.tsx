import styled from 'styled-components'


const HighlightStyles = styled.div`
    width: 100%;
    height: 633px;
    background: ${({theme}) => theme.primaryDark};
    padding: 0 165px;
    position: relative;
    display: flex;


    .content-container{
        flex: 1;
        padding-top: 129px;
        max-width: 398px;
        .label{
            margin-bottom: 24px
        }
        .description{
            margin-bottom: 40px
        }
    }

    .image-container{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 70%;
        }
    }
`


export default HighlightStyles;