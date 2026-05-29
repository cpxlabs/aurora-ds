import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@cpxlabs/aurora-ds";
import { useAuth } from "../context/AuthContext";

type AuthMode = "login" | "register";

export function Acesso() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("produto");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [erro, setErro] = useState("");

  const resetSenha = () => {
    setSenha("");
    setConfirmacaoSenha("");
  };

  const handleEntrar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro("Preencha nome, e-mail e senha para continuar.");
      return;
    }
    login({ nome, email });
    resetSenha();
    navigate("/dashboard");
  };

  const handleCadastrar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro("Preencha todos os campos obrigatórios para criar a conta.");
      return;
    }
    if (senha !== confirmacaoSenha) {
      setErro("A confirmação de senha precisa ser igual à senha.");
      return;
    }
    login({ nome, email });
    resetSenha();
    navigate("/dashboard");
  };

  return (
    <Card className="auth-card">
      <CardHeader>
        <CardTitle>Acesso compartilhado</CardTitle>
        <CardDescription>Escolha login ou cadastro para iniciar a sessão padrão dos apps.</CardDescription>
      </CardHeader>
      <CardContent>
        {erro ? <p className="form-erro">{erro}</p> : null}
        <Tabs value={authMode} onValueChange={(value) => { setAuthMode(value as AuthMode); setErro(""); }}>
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
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />

              <Label htmlFor="login-email">E-mail</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="voce@empresa.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />

              <Label htmlFor="cadastro-email">E-mail</Label>
              <Input
                id="cadastro-email"
                type="email"
                placeholder="voce@empresa.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Label htmlFor="cadastro-cargo">Cargo</Label>
              <Select
                id="cadastro-cargo"
                value={cargo}
                onChange={(event) => setCargo(event.target.value)}
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
  );
}
