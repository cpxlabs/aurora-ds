import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  Badge,
  Button,
  Card,
  CardAction,
  CardBadge,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Progress,
  Select,
  Separator,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "@cpxlabs/aurora-ds";

/* ───────────────────────────── dados de exemplo ───────────────────────────── */

const metricas = [
  { label: "Usuários Ativos", valor: "1.284", tone: "positive" as const, badge: "+12%" },
  { label: "Receita Mensal", valor: "R$ 48.200", tone: "positive" as const, badge: "+8%" },
  { label: "Tickets Abertos", valor: "37", tone: "negative" as const, badge: "Atenção" },
  { label: "Uptime", valor: "99,97%", tone: "neutral" as const, badge: "Estável" },
];

const produtos = [
  {
    id: 1,
    nome: "Fone Aurora Pro",
    descricao: "Fone over-ear com cancelamento de ruído adaptativo e 30 h de bateria.",
    preco: "799,00",
    estoque: 12,
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop",
  },
  {
    id: 2,
    nome: "Teclado Slim",
    descricao: "Teclado mecânico compacto com retroiluminação RGB e switches silenciosos.",
    preco: "349,00",
    estoque: 0,
    imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop",
  },
  {
    id: 3,
    nome: "Mouse Ergonômico",
    descricao: "Design ergonômico com DPI ajustável de 400 até 16.000.",
    preco: "249,00",
    estoque: 5,
    imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=450&fit=crop",
  },
];

/* ─────────────────────────────────── App ──────────────────────────────────── */

export function App() {
  const [tema, setTema] = useState<"light" | "dark">("light");
  const [statusForm, setStatusForm] = useState<"idle" | "carregando" | "sucesso" | "erro">("idle");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");

  function alternarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  function handleEnviar(e: React.FormEvent) {
    e.preventDefault();
    setStatusForm("carregando");
    setTimeout(() => {
      if (email.includes("@") && nome.trim()) {
        setStatusForm("sucesso");
      } else {
        setStatusForm("erro");
      }
    }, 1500);
  }

  return (
    <div data-theme={tema} className="app">
      {/* ── Cabeçalho ── */}
      <header className="cabecalho">
        <div className="cabecalho-inner">
          <span className="logo">🌅 Aurora DS</span>
          <Button variant="ghost" onClick={alternarTema}>
            {tema === "light" ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
          </Button>
        </div>
      </header>

      <main className="principal">
        {/* ── Métricas ── */}
        <section>
          <h2 className="titulo-secao">Painel de Métricas</h2>
          <div className="grade-4">
            {metricas.map((m) => (
              <Card key={m.label}>
                <CardHeader>
                  <CardTitle>{m.label}</CardTitle>
                  <CardAction>
                    <Badge tone={m.tone}>{m.badge}</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p className="valor-metrica">{m.valor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── Catálogo de Produtos ── */}
        <section>
          <h2 className="titulo-secao">Catálogo de Produtos</h2>
          <div className="grade-3">
            {produtos.map((p) => (
              <Card key={p.id}>
                <CardMedia src={p.imagem} alt={p.nome} />
                <CardHeader>
                  <CardTitle>{p.nome}</CardTitle>
                  <CardDescription>{p.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="produto-meta">
                    <CardBadge tone={p.estoque > 0 ? "positive" : "negative"}>
                      {p.estoque > 0 ? `${p.estoque} em estoque` : "Esgotado"}
                    </CardBadge>
                    <span className="produto-preco">R$ {p.preco}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost">Ver Detalhes</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>{p.nome}</DialogTitle>
                      <DialogDescription>{p.descricao}</DialogDescription>
                      <p className="dialog-body">
                        Disponível para entrega em todo o Brasil. Garantia de 12 meses contra
                        defeitos de fabricação. Devolução gratuita em até 7 dias corridos.
                      </p>
                      <div className="dialog-acoes">
                        <Button>Adicionar ao Carrinho</Button>
                        <DialogClose asChild>
                          <Button variant="ghost">Fechar</Button>
                        </DialogClose>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    className="btn-comprar"
                    disabled={p.estoque === 0}
                  >
                    Comprar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── Formulário + Notificações ── */}
        <section>
          <h2 className="titulo-secao">Fale Conosco</h2>
          <div className="layout-form">
            {/* Formulário de contato */}
            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>Responderemos em até 24 horas úteis.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEnviar} className="form">
                  <div className="campo">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      invalid={statusForm === "erro" && !nome.trim()}
                    />
                  </div>
                  <div className="campo">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      invalid={statusForm === "erro" && !email.includes("@")}
                    />
                  </div>
                  <div className="campo">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva sua dúvida ou sugestão…"
                      rows={4}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                    />
                  </div>

                  {statusForm === "sucesso" && (
                    <Alert tone="positive">
                      <AlertTitle>Mensagem enviada!</AlertTitle>
                      <AlertDescription>
                        Obrigado pelo contato. Retornaremos em breve.
                      </AlertDescription>
                    </Alert>
                  )}
                  {statusForm === "erro" && (
                    <Alert tone="negative">
                      <AlertTitle>Erro ao enviar</AlertTitle>
                      <AlertDescription>
                        Preencha nome e e-mail válidos antes de enviar.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" disabled={statusForm === "carregando"}>
                    {statusForm === "carregando" ? (
                      <span className="btn-carregando">
                        <Spinner size="sm" label="Enviando" />
                        Enviando…
                      </span>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Notificações do sistema */}
            <div className="coluna-alertas">
              <h3 className="titulo-subsecao">Notificações do Sistema</h3>
              <Alert tone="positive">
                <AlertTitle>Deploy realizado com sucesso</AlertTitle>
                <AlertDescription>Versão 2.4.1 disponível em produção.</AlertDescription>
              </Alert>
              <Alert tone="warning">
                <AlertTitle>Alta utilização de CPU</AlertTitle>
                <AlertDescription>O servidor atingiu 78% de utilização.</AlertDescription>
              </Alert>
              <Alert tone="negative">
                <AlertTitle>Falha na integração</AlertTitle>
                <AlertDescription>A API de pagamentos retornou erro 503.</AlertDescription>
              </Alert>
              <Alert>
                <AlertTitle>Manutenção programada</AlertTitle>
                <AlertDescription>
                  Janela de manutenção: domingo das 02:00 às 04:00.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <Separator />

        {/* ── Controles avançados ── */}
        <section>
          <h2 className="titulo-secao">Controles Avançados</h2>
          <div className="layout-avancado">
            <Card>
              <CardHeader>
                <CardTitle>Preferências da Conta</CardTitle>
                <CardDescription>
                  Exemplo com Select, Switch, Checkbox e Label.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="perfil">
                  <TabsList>
                    <TabsTrigger value="perfil">Perfil</TabsTrigger>
                    <TabsTrigger value="seguranca">Segurança</TabsTrigger>
                    <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
                  </TabsList>

                  <TabsContent value="perfil">
                    <div className="stack-campos">
                      <div className="campo">
                        <Label htmlFor="plano">Plano atual</Label>
                        <Select id="plano" defaultValue="pro">
                          <option value="free">Free</option>
                          <option value="pro">Pro</option>
                          <option value="enterprise">Enterprise</option>
                        </Select>
                      </div>
                      <div className="linha-controle">
                        <Switch id="publico" defaultChecked />
                        <Label htmlFor="publico">Perfil público</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="seguranca">
                    <div className="stack-campos">
                      <div className="linha-controle">
                        <Checkbox id="2fa" defaultChecked />
                        <Label htmlFor="2fa">Autenticação em dois fatores</Label>
                      </div>
                      <div className="linha-controle">
                        <Checkbox id="sessao" />
                        <Label htmlFor="sessao">Encerrar sessões antigas</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="notificacoes">
                    <div className="stack-campos">
                      <div className="linha-controle">
                        <Switch id="notif-email" defaultChecked />
                        <Label htmlFor="notif-email">Receber resumo semanal por e-mail</Label>
                      </div>
                      <div className="linha-controle">
                        <Switch id="push" />
                        <Label htmlFor="push">Ativar notificações push</Label>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status da Equipe</CardTitle>
                <CardDescription>
                  Exemplo com Avatar e Progress para monitoramento rápido.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="stack-campos">
                  <div className="equipe">
                    <Avatar initials="AM" />
                    <Avatar initials="BR" />
                    <Avatar initials="CP" />
                    <Avatar src="https://i.pravatar.cc/100?img=20" alt="Foto da Marina" />
                  </div>

                  <div className="stack-campos">
                    <div>
                      <p className="label-progresso">Checklist de lançamento</p>
                      <Progress value={78} tone="positive" label="Lançamento 78%" />
                    </div>
                    <div>
                      <p className="label-progresso">Correções críticas</p>
                      <Progress value={32} tone="warning" label="Correções críticas 32%" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* ── Rodapé ── */}
      <footer className="rodape">
        <p>
          Aurora DS · Biblioteca de componentes React &nbsp;
          <Badge size="sm">v1.0.0</Badge>
        </p>
      </footer>
    </div>
  );
}
