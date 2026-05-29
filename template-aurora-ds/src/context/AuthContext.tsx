import { useCallback, useMemo, useState } from "react";
import { AuthContext, type UserProfile } from "./authContextInstance";

const PERFIL_BASE: UserProfile = {
  nome: "",
  email: "",
  cargo: "produto",
  bio: "",
};

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
