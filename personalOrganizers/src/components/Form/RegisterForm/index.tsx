import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema";
import { Input } from "../Input";
// import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { IRegisterFormValues } from "../../../providers/UserContext/@types";
import { UserContext } from "../../../providers/UserContext/UserContext";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        name="name"
        label="Name"
        type="text"
        register={register}
        error={errors.name}
      />
      <Input
        name="email"
        label="Email"
        type="text"
        register={register}
        error={errors.email}
      />
      <Input
        name="password"
        label="Senha"
        type="password"
        register={register}
        error={errors.password}
      />
      <Input
        name="confirmPassword"
        label="Confirmar senha"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />
      <Input
        name="urlPicture"
        label="Url foto"
        type="text"
        register={register}
        error={errors.urlPicture}
      />
      {/* <StyledButton type="submit" $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton> */}
    </StyledForm>
  );
};

export default RegisterForm;
