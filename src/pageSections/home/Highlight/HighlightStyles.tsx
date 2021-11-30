import styled from 'styled-components';

const HighlightStyles = styled.div`
    width: 100vw;   
    height: 633px;
    background: ${({ theme }) => theme.primaryDark};
    padding: 0 10vw;
    position: relative;
    display: flex;
    z-index: 2;
    @media (max-width: ${({ theme }) => theme.dimensions.tablet}px){
        justify-content: center;
        align-items: center;
        
    }
    

    .content-container{
        position: relative;
        flex: 1;
        padding-top: 129px;
        max-width: 398px;
        @media (max-width: ${({ theme }) => theme.dimensions.tablet}px){
            display: flex;
            text-align: center;
            flex-direction: column;
            align-items: center;
            padding-top: 0px;
        }
        
}

        .label, .title, .description, .button{
            position: relative;
            z-index: 2;
        }

        .label{
            margin-bottom: 24px;
        
        }
        .description{
            margin-bottom: 40px;
        }
    }

    .image-container{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
            
            filter: drop-shadow(0 0 6.75rem ${({ theme }) => theme.lightGray}59);
            width: 350px;
            height: auto;
        }


        @media (max-width: ${({ theme }) => theme.dimensions.tablet}px){
            position: absolute;
            left: auto;
            right: auto;
            z-index: 1;

            img {
                width: 80%;
                min-width: 300px;
                
                max-width: 600px;
            }
        }

        @media (max-width: ${({ theme }) => theme.dimensions.mobile}px){
           img{
            width: 90%;
            min-width: 280px;
            
           }
        }
    }
`;

export default HighlightStyles;
