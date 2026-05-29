import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@cpxlabs/aurora-ds";
import { useAuth } from "../context/useAuth";

export function Dashboard() {
  const { profile, autenticado } = useAuth();

  return (
    <>
      <Card className="message-card">
        <CardHeader>
          <CardTitle>Bem-vindo ao template Aurora DS</CardTitle>
          <CardDescription>
            Use este app como base para novos produtos. O menu lateral, cabeçalho e fluxos de autenticação são
            compartilhados entre todas as telas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {autenticado ? (
            <p>
              Olá, <strong>{profile.nome}</strong>! Navegue pelas seções usando o menu à esquerda.
            </p>
          ) : (
            <p>Você está navegando como visitante. Faça login para acessar todas as funcionalidades.</p>
          )}
        </CardContent>
      </Card>

      <Card className="structure-card">
        <CardHeader>
          <CardTitle>Seções prontas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="checklist">
            <li>Layout com menu lateral e header padrão</li>
            <li>Navegação por rotas com react-router-dom</li>
            <li>Fluxo de login e cadastro centralizado</li>
            <li>Gestão de perfil para reutilização entre apps</li>
            <li>Deploy configurado para Vercel</li>
          </ul>
          <Separator className="card-separator" />
          <div className="status-row">
            <Badge tone={autenticado ? "positive" : "warning"}>
              {autenticado ? "Sessão ativa" : "Visitante"}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
