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
        font-size: 1.5rem;
        rotate: -10deg;
        z-index: 1;
        margin-top: 60px;
    }

    @media (min-width: 750px) {
        .landingPageTitle1 {
            font-size: 2.5rem;
        }
    }

    @media (min-width: 1000px) {
        .landingPageTitle1 {
            font-size: 3.5rem;
        }
    }

    @media (min-width: 2000px) {
        .landingPageTitle1 {
            font-size: 6rem;
        }
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
    
    .landingPageTitle {
        width: 60%;
        height: 10%;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        font-family: ${({ theme }) => theme.fonts.primary};
    }

    .landingPageDescription {
        width: 100%;
        font-size: 1.25rem;
        font-family: ${({ theme }) => theme.fonts.primary};
        text-align: center;
    }

    h3 {
        margin-top: 20px;
    }

    .btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }

    .ladingPageRegisterBtn {
        width: 80%;
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 750px) {
        margin-top: 80px;

        .landingPageDescription {
            margin-top: 70px;
            font-size: 1.5rem;
        }

        h3 {
            margin-top: 80px;
        }
    }

    @media (min-width: 1000px) {
        margin-top: 180px;

        h3 {
            margin-top: 20px;
        }
    }

    @media (min-width: 1500px) {
        .landingPageDescription {
            font-size: 2rem;
            margin-top: 20px;
        }
    }

    @media (min-width: 2000px) {
        margin-top: 320px;

        .landingPageTitle {
            font-size: 2rem;
        }
    }
`