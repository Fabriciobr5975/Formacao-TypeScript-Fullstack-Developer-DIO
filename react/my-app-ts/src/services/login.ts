import { api } from "../api";
import { Conta } from "../api";

export const login = async (email: string, password: string): Promise<boolean> => {
    const data = await api as Conta;

    if (!email || !password)
        return false;

    if ((email.trim() !== data.email) || (password.trim() !== data.password))
        return false;

    return true;
}