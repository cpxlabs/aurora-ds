import { useMemo } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Avatar, Badge, Button } from "@cpxlabs/aurora-ds";
import { useAuth } from "../context/AuthContext";

const MENU = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/perfil", label: "Perfil" },
  { to: "/configuracoes", label: "Configurações" },
];

export function Layout() {
  const { profile, autenticado, sair } = useAuth();
  const navigate = useNavigate();

  const iniciais = useMemo(() => {
    if (!profile.nome.trim()) return "AU";
    return profile.nome
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((parte) => parte[0]?.toUpperCase() ?? "")
      .join("");
  }, [profile.nome]);

  const handleSair = () => {
    sair();
    navigate("/acesso");
  };

  return (
    <div className="layout-root">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="brand-kicker">Template</p>
          <h1 className="brand-title">Aurora Case App</h1>
          <p className="brand-copy">Base compartilhada para novos apps com Aurora DS.</p>
        </div>

        <nav className="menu-nav" aria-label="Menu principal">
          {MENU.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "menu-item is-active" : "menu-item")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="main-shell">
        <header className="top-header">
          <div>
            <p className="header-overline">Estrutura comum</p>
            <h2>Menus, cabeçalho, autenticação e perfil</h2>
          </div>

          <div className="header-actions">
            <Badge tone={autenticado ? "positive" : "warning"}>
              {autenticado ? "Conectado" : "Visitante"}
            </Badge>
            <Avatar initials={iniciais} size="sm" />
            {autenticado ? (
              <Button variant="ghost" onClick={handleSair}>
                Sair
              </Button>
            ) : null}
          </div>
        </header>

        <main className="content-grid">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
