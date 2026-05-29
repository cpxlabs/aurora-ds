import { createContext } from "react";

export type UserProfile = {
  nome: string;
  email: string;
  cargo: string;
  bio: string;
};

export type AuthContextValue = {
  profile: UserProfile;
  autenticado: boolean;
  login: (dados: Pick<UserProfile, "nome" | "email">) => void;
  atualizar: (dados: UserProfile) => void;
  sair: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
