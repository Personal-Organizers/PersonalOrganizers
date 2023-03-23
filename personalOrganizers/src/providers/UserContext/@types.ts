import { ReactNode } from "react";
import { UseFormRegister } from 'react-hook-form';

export interface IDefaultProviderProps {
    children: ReactNode;
}

export interface ILoginFormValues {
    email: string;
    password: string;
}

export interface IUserContext {
    userLogin:  (data: ILoginFormValues) => void;
}

export interface IInputProps
{
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  defaultValue?: string;
  register: UseFormRegister<any>;
  error: any;
}