import styled from 'styled-components';

export const StyledLandingPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.primary};

    .landingPageTitle1 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        color: ${({ theme }) => theme.colors.blue300};
        font-size: 2rem;
        rotate: -10deg;
        z-index: 1;
        margin-top: 60px;
    }

    @media (min-width: 700px) {
        .landingPageTitle1 {
            font-size: 4rem;
        }
    }

    @media (min-width: 2000px) {
        .landingPageTitle1 {
            font-size: 6rem;
        }
    }
`

export const StyledLandingPageContainer = styled.section`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 40px;
   

    .landingPageBackground {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
`

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: 60%;
    width: 80%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    box-sizing: border-box;
    margin-top: 80px;
    
    .landingPageTitle {
        width: 60%;
        height: 10%;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 400;
        font-family: ${({ theme }) => theme.fonts.primary};
    }

    .landingPageDescription {
        width: 70%;
        font-size: 1.25rem;
        font-family: ${({ theme }) => theme.fonts.primary};
        text-align: center;
    }

    .ladingPageRegisterBtn {
        height: 60%;
        width: 80%;
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: -70px;
        margin-top: 30px;
    }

    @media (min-width: 1000px) {
        margin-top: 150px;

        .landingPageDescription {
            margin-top: 70px;
            font-size: 1.5rem;
        }
    }

    @media (min-width: 1500px) {
        .landingPageDescription {
            font-size: 2rem;
        }
    }
`