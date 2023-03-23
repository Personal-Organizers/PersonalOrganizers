import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { ILoginFormValues } from "../../../providers/UserContext/@types";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledForm } from "../../../styles/form";
import { Input } from "../Input";
import { schema } from "./SchemaLogin";
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledBtnCadastro, StyledBtnLogin } from "../../Buttons/style";
import { useNavigate } from "react-router-dom";
import { StyledLoginForm } from "./style";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<ILoginFormValues>({resolver: yupResolver(schema)});
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <StyledForm onSubmit={handleSubmit(userLogin)}>
            <Input type='email' label="Email" defaultValue="" name="email" register={register} error={errors.email} />
            <Input type="password" label="Senha" defaultValue="" name="password" register={register} error={errors.password} />
            <StyledLoginForm>
                <StyledBtnLogin type='submit'>Login</StyledBtnLogin>
                <StyledBtnCadastro onClick={() => navigate('/')}>Voltar</StyledBtnCadastro>
            </StyledLoginForm>
        </StyledForm>
    )
};





