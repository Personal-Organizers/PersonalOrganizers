import styled from "styled-components";

export const StyledLoginPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.primary};

    .loginPageTitle1 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        color: ${({ theme }) => theme.colors.blue300};
        font-size: 2rem;
        rotate: -10deg;
        z-index: 1;
        margin-top: 60px;
    }

    .loginForm {
        margin-top: 80px;
    }

    @media (min-width: 750px) {
        .loginPageTitle1 {
            font-size: 4rem;
        }
    }

    @media (min-width: 2000px) {
        .loginPageTitle1 {
            font-size: 6rem;
        }
    }
`

export const StyledLoginPageContainer = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 40px;
   
    .loginPageBackground {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
`