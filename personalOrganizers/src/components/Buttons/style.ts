import styled from "styled-components";

export const StyledBtnLogin = styled.button`
    width: 180px;
    height: 40px;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.blue50};
    border-radius: 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    margin-top: 130px;
    z-index: 1;

    :hover {
        background: ${({ theme }) => theme.colors.blue150};
        border: 2px solid ${({ theme }) => theme.colors.blue100};
    }

    @media (min-width: 750px) {
        width: 280px;
        height: 50px;
        font-size: 1.5rem;
        margin-top: 120px;
    }

    @media (min-width: 1500px) {
        width: 380px;
        height: 70px;
        font-size: 2rem;
    }
`

export const StyledBtnCadastro = styled.button`
    width: 180px;
    height: 40px;
    background: ${({ theme }) => theme.colors.blue150};
    color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.blue100};
    border-radius: 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    z-index: 1;

    :hover {
        background: ${({ theme }) => theme.colors.secondary};
        border: 2px solid ${({ theme }) => theme.colors.blue50};
    }

    @media (min-width: 750px) {
        width: 280px;
        height: 50px;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    @media (min-width: 1500px) {
        width: 380px;
        height: 70px;
        font-size: 2rem;
        margin-top: 10px;
    }
`