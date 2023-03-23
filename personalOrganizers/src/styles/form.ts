import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > div {
    position: relative;
  }
`;

export const StyledEyeBtn = styled.button`
  height: 19px;
  max-width: 20px;
  background: none;
  position: absolute;
  top: 40%;
  right: 5%;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  input {
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colors.yellow150}!important;
      outline-color: ${({ theme }) => theme.colors.yellow150}!important;
    }
  }
`;