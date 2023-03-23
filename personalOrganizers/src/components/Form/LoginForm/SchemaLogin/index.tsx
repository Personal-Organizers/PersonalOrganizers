import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória')
});
