import * as React from "react";

export type AuroraLocale = "pt_br" | "es" | "eng";

export type AuroraI18nMessages = {
  avatarFallbackLabel: string;
  dialogCloseLabel: string;
  progressLabel: string;
  spinnerLabel: string;
};

export const auroraI18nMessages: Record<AuroraLocale, AuroraI18nMessages> = {
  pt_br: {
    avatarFallbackLabel: "Avatar",
    dialogCloseLabel: "Fechar diálogo",
    progressLabel: "Progresso",
    spinnerLabel: "Carregando…",
  },
  es: {
    avatarFallbackLabel: "Avatar",
    dialogCloseLabel: "Cerrar diálogo",
    progressLabel: "Progreso",
    spinnerLabel: "Cargando…",
  },
  eng: {
    avatarFallbackLabel: "Avatar",
    dialogCloseLabel: "Close dialog",
    progressLabel: "Progress",
    spinnerLabel: "Loading…",
  },
};

export type AuroraI18nProviderProps = {
  children: React.ReactNode;
  locale?: AuroraLocale;
  messages?: Partial<AuroraI18nMessages>;
};

const AuroraI18nContext = React.createContext<AuroraI18nMessages>(
  auroraI18nMessages.pt_br
);

export function AuroraI18nProvider({
  children,
  locale = "pt_br",
  messages,
}: AuroraI18nProviderProps) {
  const value = React.useMemo(
    () => ({
      ...auroraI18nMessages[locale],
      ...messages,
    }),
    [locale, messages]
  );

  return <AuroraI18nContext.Provider value={value}>{children}</AuroraI18nContext.Provider>;
}

/**
 * Retorna as mensagens internas resolvidas do Aurora DS.
 * Use este hook em componentes que precisem ler os textos padrão definidos pelo
 * `AuroraI18nProvider`; sem um provider explícito, o fallback é `pt_br`.
 */
export function useAuroraI18n() {
  return React.useContext(AuroraI18nContext);
}
