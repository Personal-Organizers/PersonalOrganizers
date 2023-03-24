import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IUser,
  IUserContext,
} from "./@types";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userLogin = async (data: ILoginFormValues) => {
    try {
      const response = await toast.promise(api.post("/login", data), {
        pending: "Carregando",
        success: "Login realizado com sucesso!",
      });

      setUser(response.data.user);

      localStorage.setItem("@Token", response.data.accessToken);
      localStorage.setItem("@User", JSON.stringify(response.data.user.id));
      navigate("/shop");
    } catch (error) {
      toast.error("Email ou senha incorretos");
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);

      const response = await api.post("/users", formData);

      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);

      toast.success("Cadastrado com Sucesso!");

      navigate("/");
    } catch (error) {
      axios.isAxiosError(error);
      toast.error("Ops, não foi possivel cadastrar o novo usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ userLogin, loading, setLoading, user, userRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};
