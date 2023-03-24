import styled from "styled-components";

export const StyleNotFoundPage = styled.main`
  background: white;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    height: 80%;

    margin-top: 60px;
  }

  h1 {
    color: var(--color-grey-0);
    align-self: center;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;
  }
`;
