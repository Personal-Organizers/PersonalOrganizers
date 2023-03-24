import * as yup from 'yup';

export const registerFormSchema = yup.object({
  name: yup.string().required('O nome é obrigatorio'),
  email: yup
    .string()
    .required('O email é obrigatiro')
    .email('O email não é valido'),
  password: yup
    .string()
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
    .matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/(\W|_)/, 'Deve conter no mínimo 1 caracter especial')
    .matches(/.{6,}/, 'Deve conter no mínimo 6 caracteres')
    .required('A senha é obrigatoria.'),

  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf(
      [yup.ref('password'), 'null'],
      'A Confirmação de senha deve ser igual a senha '
    ),
});
