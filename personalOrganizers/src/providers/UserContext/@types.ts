import { ReactNode } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

export interface IDefaultProviderProps {
  children: ReactNode;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  urlPicture: string;
}

export interface IUserContext {
  userLogin: (data: ILoginFormValues) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
}

export interface IInputProps {
  name: string;
  label?: string;
  type: "text" | "email" | "password";
  defaultValue?: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
}
