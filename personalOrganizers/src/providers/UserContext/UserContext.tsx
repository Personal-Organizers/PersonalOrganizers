import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultProviderProps, ILoginFormValues, IUserContext } from "./@types";

export const UserContext = createContext<IUserContext> ({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProviderProps) => {
    const navigate = useNavigate(); 

    const userLogin = async (data: ILoginFormValues) => {
        try {
            const response = await toast.promise(api.post('/login', data), {
                pending: 'Carregando',
                success: 'Login realizado com sucesso!',
            });
            localStorage.setItem('@Token', response.data.accessToken);
            localStorage.setItem('@User', JSON.stringify(response.data.user.id));
            navigate('/shop');
        }
        catch(error) {
            toast.error('Email ou senha incorretos')
        }
    }

    return (
        <UserContext.Provider value={{ userLogin }}>
            { children }
        </UserContext.Provider>
    )
};
