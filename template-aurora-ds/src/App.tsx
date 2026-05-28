import { useMemo, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "@cpxlabs/aurora-ds";
import "./App.css";

type AuthMode = "login" | "register";
type Section = "dashboard" | "perfil" | "configuracoes";

type UserProfile = {
  nome: string;
  email: string;
  cargo: string;
  bio: string;
};

const MENU: Array<{ id: Section; label: string }> = [
  { id: "dashboard", label: "Dashboard" },
  { id: "perfil", label: "Perfil" },
  { id: "configuracoes", label: "Configurações" },
];

const PERFIL_BASE: UserProfile = {
  nome: "",
  email: "",
  cargo: "produto",
  bio: "",
};

function App() {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [section, setSection] = useState<Section>("dashboard");
  const [profile, setProfile] = useState<UserProfile>(PERFIL_BASE);
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [mensagem, setMensagem] = useState("Use este template como base para novos produtos.");

  const autenticado = Boolean(profile.nome && profile.email);

  const iniciais = useMemo(() => {
    if (!profile.nome.trim()) {
      return "AU";
    }
    return profile.nome
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((parte) => parte[0]?.toUpperCase() ?? "")
      .join("");
  }, [profile.nome]);

  const resetSenha = () => {
    setSenha("");
    setConfirmacaoSenha("");
  };

  const handleEntrar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!profile.nome.trim() || !profile.email.trim() || !senha.trim()) {
      setMensagem("Preencha nome, e-mail e senha para continuar.");
      return;
    }

    setMensagem("Login realizado. Estrutura compartilhada pronta para reutilização.");
    setSection("dashboard");
    resetSenha();
  };

  const handleCadastrar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!profile.nome.trim() || !profile.email.trim() || !senha.trim()) {
      setMensagem("Preencha todos os campos obrigatórios para criar a conta.");
      return;
    }
    if (senha !== confirmacaoSenha) {
      setMensagem("A confirmação de senha precisa ser igual à senha.");
      return;
    }

    setMensagem("Cadastro concluído. Você já pode usar este app como case base.");
    setSection("dashboard");
    resetSenha();
  };

  const handleSalvarPerfil = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMensagem("Perfil atualizado com sucesso.");
  };

  const handleSair = () => {
    setProfile(PERFIL_BASE);
    setSection("dashboard");
    setMensagem("Sessão encerrada.");
    resetSenha();
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
            <button
              key={item.id}
              type="button"
              className={section === item.id ? "menu-item is-active" : "menu-item"}
              onClick={() => setSection(item.id)}
            >
              {item.label}
            </button>
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
            <Badge tone={autenticado ? "positive" : "warning"}>{autenticado ? "Conectado" : "Visitante"}</Badge>
            <Avatar initials={iniciais} size="sm" />
            {autenticado ? (
              <Button variant="ghost" onClick={handleSair}>
                Sair
              </Button>
            ) : null}
          </div>
        </header>

        <main className="content-grid">
          <Card className="message-card">
            <CardHeader>
              <CardTitle>Status do template</CardTitle>
              <CardDescription>
                Esta mensagem pode ser usada como feedback global para ações de login, cadastro e perfil.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{mensagem}</p>
            </CardContent>
          </Card>

          {!autenticado ? (
            <Card className="auth-card">
              <CardHeader>
                <CardTitle>Acesso compartilhado</CardTitle>
                <CardDescription>Escolha login ou cadastro para iniciar a sessão padrão dos apps.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as AuthMode)}>
                  <TabsList>
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Cadastro</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <form className="form-stack" onSubmit={handleEntrar}>
                      <Label htmlFor="login-nome">Nome</Label>
                      <Input
                        id="login-nome"
                        placeholder="Seu nome"
                        value={profile.nome}
                        onChange={(event) => setProfile((prev) => ({ ...prev, nome: event.target.value }))}
                      />

                      <Label htmlFor="login-email">E-mail</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="voce@empresa.com"
                        value={profile.email}
                        onChange={(event) => setProfile((prev) => ({ ...prev, email: event.target.value }))}
                      />

                      <Label htmlFor="login-senha">Senha</Label>
                      <Input
                        id="login-senha"
                        type="password"
                        placeholder="••••••••"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                      />

                      <Button type="submit">Entrar</Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register">
                    <form className="form-stack" onSubmit={handleCadastrar}>
                      <Label htmlFor="cadastro-nome">Nome</Label>
                      <Input
                        id="cadastro-nome"
                        placeholder="Seu nome"
                        value={profile.nome}
                        onChange={(event) => setProfile((prev) => ({ ...prev, nome: event.target.value }))}
                      />

                      <Label htmlFor="cadastro-email">E-mail</Label>
                      <Input
                        id="cadastro-email"
                        type="email"
                        placeholder="voce@empresa.com"
                        value={profile.email}
                        onChange={(event) => setProfile((prev) => ({ ...prev, email: event.target.value }))}
                      />

                      <Label htmlFor="cadastro-cargo">Cargo</Label>
                      <Select
                        id="cadastro-cargo"
                        value={profile.cargo}
                        onChange={(event) => setProfile((prev) => ({ ...prev, cargo: event.target.value }))}
                      >
                        <option value="produto">Produto</option>
                        <option value="design">Design</option>
                        <option value="engenharia">Engenharia</option>
                      </Select>

                      <Label htmlFor="cadastro-senha">Senha</Label>
                      <Input
                        id="cadastro-senha"
                        type="password"
                        placeholder="••••••••"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                      />

                      <Label htmlFor="cadastro-confirmacao">Confirmar senha</Label>
                      <Input
                        id="cadastro-confirmacao"
                        type="password"
                        placeholder="••••••••"
                        value={confirmacaoSenha}
                        onChange={(event) => setConfirmacaoSenha(event.target.value)}
                      />

                      <Button type="submit">Criar conta</Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : null}

          {autenticado ? (
            <Card className="profile-card">
              <CardHeader>
                <CardTitle>Perfil compartilhado</CardTitle>
                <CardDescription>Dados de perfil prontos para reaproveitar em qualquer novo app.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="form-stack" onSubmit={handleSalvarPerfil}>
                  <Label htmlFor="perfil-nome">Nome</Label>
                  <Input
                    id="perfil-nome"
                    value={profile.nome}
                    onChange={(event) => setProfile((prev) => ({ ...prev, nome: event.target.value }))}
                  />

                  <Label htmlFor="perfil-email">E-mail</Label>
                  <Input
                    id="perfil-email"
                    type="email"
                    value={profile.email}
                    onChange={(event) => setProfile((prev) => ({ ...prev, email: event.target.value }))}
                  />

                  <Label htmlFor="perfil-cargo">Cargo</Label>
                  <Select
                    id="perfil-cargo"
                    value={profile.cargo}
                    onChange={(event) => setProfile((prev) => ({ ...prev, cargo: event.target.value }))}
                  >
                    <option value="produto">Produto</option>
                    <option value="design">Design</option>
                    <option value="engenharia">Engenharia</option>
                  </Select>

                  <Label htmlFor="perfil-bio">Bio</Label>
                  <Textarea
                    id="perfil-bio"
                    rows={4}
                    placeholder="Descreva a pessoa usuária do template..."
                    value={profile.bio}
                    onChange={(event) => setProfile((prev) => ({ ...prev, bio: event.target.value }))}
                  />

                  <CardFooter className="form-footer">
                    <Button type="submit">Salvar perfil</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          ) : null}

          <Card className="structure-card">
            <CardHeader>
              <CardTitle>Seções prontas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="checklist">
                <li>Layout com menu lateral e header padrão</li>
                <li>Fluxo de login e cadastro centralizado</li>
                <li>Gestão de perfil para reutilização entre apps</li>
              </ul>
              <Separator className="card-separator" />
              <p className="section-preview">Seção ativa: {MENU.find((item) => item.id === section)?.label}</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

export default App;
