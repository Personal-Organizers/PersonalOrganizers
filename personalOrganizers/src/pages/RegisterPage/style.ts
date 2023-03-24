import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};

  .formBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: none;

    header {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;

      a {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 0.875rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.blue50};

        white-space: nowrap;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    .left,
    .right {
      width: 100%;
    }

    @media (max-width: 750px) {
      .left {
        display: none;
      }
    }
  }
`;
