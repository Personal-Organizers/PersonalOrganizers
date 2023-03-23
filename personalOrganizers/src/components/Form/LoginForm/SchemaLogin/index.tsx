import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória').matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/(\W|_)/, 'Deve conter no mínimo 1 caracter especial')
    .matches(/.{8,}/, 'Deve conter no minimo 8 caracteres'),
});
