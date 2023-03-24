import { IInputProps } from "../../../providers/UserContext/@types";
import { StyledTextField } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { StyledFieldset } from "./style";

export const Input = ({
  name,
  label,
  type,
  defaultValue,
  error,
  register,
}: IInputProps) => (
  <StyledFieldset>
    <StyledTextField
      label={label}
      type={type}
      defaultValue={defaultValue}
      {...register(name)}
    />
    {error && (
      <StyledParagraph fontColor="red">
        {" "}
        {error ? <p>{error.message}</p> : null}
      </StyledParagraph>
    )}
  </StyledFieldset>
);
