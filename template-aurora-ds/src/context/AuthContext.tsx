import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type UserProfile = {
  nome: string;
  email: string;
  cargo: string;
  bio: string;
};

type AuthContextValue = {
  profile: UserProfile;
  autenticado: boolean;
  login: (dados: Pick<UserProfile, "nome" | "email">) => void;
  atualizar: (dados: UserProfile) => void;
  sair: () => void;
};

const PERFIL_BASE: UserProfile = {
  nome: "",
  email: "",
  cargo: "produto",
  bio: "",
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(PERFIL_BASE);

  const autenticado = Boolean(profile.nome.trim() && profile.email.trim());

  const login = useCallback((dados: Pick<UserProfile, "nome" | "email">) => {
    setProfile((prev) => ({ ...prev, nome: dados.nome, email: dados.email }));
  }, []);

  const atualizar = useCallback((dados: UserProfile) => {
    setProfile(dados);
  }, []);

  const sair = useCallback(() => {
    setProfile(PERFIL_BASE);
  }, []);

  const value = useMemo(
    () => ({ profile, autenticado, login, atualizar, sair }),
    [profile, autenticado, login, atualizar, sair]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return ctx;
}
