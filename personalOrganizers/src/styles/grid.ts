import styled from "styled-components";

interface IStyledContainerProps {
  containerWidth?: number;
}

export const StyledContainerRegister = styled.div<IStyledContainerProps>`
  width: 100%;
  max-width: ${({ containerWidth }) =>
    containerWidth ? containerWidth : 1000}px;
  margin: 0 auto;
  padding: 10px;
`;

export const StyledGridBox = styled.div`
  padding: 20px;
  /* background: ${({ theme }) => theme.colors.white}; */
  background-color: none;
  border: 2px solid ${({ theme }) => theme.colors.blue50};
  border-radius: 5px;
`;
