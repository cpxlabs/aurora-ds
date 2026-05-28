import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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

const DIA_DEMO_SELECIONADO = "17";
const diasSemana = [
  { id: "dom", label: "D" },
  { id: "seg", label: "S" },
  { id: "ter", label: "T" },
  { id: "qua", label: "Q" },
  { id: "qui", label: "Q" },
  { id: "sex", label: "S" },
  { id: "sab", label: "S" },
];
const calendario = ["", "", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
const passos = ["Entrada", "Detalhes", "Aprovação"];

export function App() {
  return (
    <div className="app">
      <div className="shape shape-left" aria-hidden="true" />
      <div className="shape shape-right" aria-hidden="true" />

      <div className="showcase-frame">
        <header className="showcase-header">
          <h1 className="showcase-title">Prévia da biblioteca</h1>

          <div className="showcase-toolbar">
            <div className="search-field">
              <span className="search-icon" aria-hidden="true">
                ⌕
              </span>
              <Input aria-label="Buscar componentes" placeholder="Buscar" />
            </div>
            <Badge tone="negative">Novo</Badge>
            <Avatar initials="GP" size="sm" />
            <span className="toolbar-label">Nome e sobrenome</span>
          </div>
        </header>

        <main className="preview-grid">
          <Card className="tile span-2 compact-card">
            <CardContent className="tile-inline">
              <Checkbox id="tile-check" defaultChecked />
              <div>
                <Label htmlFor="tile-check">Rótulo</Label>
                <p className="tile-copy">Descrição</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tile span-2 compact-card">
            <CardContent className="tile-inline">
              <span className="status-dot status-dot-outline" aria-hidden="true" />
              <div>
                <p className="tile-label-strong">Rótulo</p>
                <p className="tile-copy">Descrição</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tile span-4 profile-card">
            <CardContent className="profile-row">
              <Avatar initials="BP" />
              <div>
                <p className="tile-label-strong">Título principal</p>
                <p className="tile-copy">Texto auxiliar</p>
              </div>
              <CardAction className="dots-action" aria-label="Mais opções">
                ⋮
              </CardAction>
            </CardContent>
          </Card>

          <Card className="tile span-3 storage-card">
            <CardHeader>
              <CardDescription>Nuvem</CardDescription>
              <CardTitle>Uso de armazenamento</CardTitle>
            </CardHeader>
            <CardContent className="storage-content">
              <div className="storage-values">
                <span>25.5 GB</span>
                <span>50 GB</span>
              </div>
              <Progress value={51} />
            </CardContent>
          </Card>

          <Card className="tile span-3 row-3 calendar-card">
            <CardHeader>
              <CardDescription>Selecionar data</CardDescription>
              <CardTitle>Seg, Ago 17</CardTitle>
            </CardHeader>
            <CardContent className="calendar-content">
              <div className="calendar-topline">
                <span>Agosto 2025</span>
                <div className="calendar-nav">
                  <button className="calendar-nav-button" type="button" aria-label="Mês anterior">
                    ‹
                  </button>
                  <button className="calendar-nav-button" type="button" aria-label="Próximo mês">
                    ›
                  </button>
                </div>
              </div>
              <div className="calendar-grid calendar-grid-head">
                {diasSemana.map((dia) => (
                  <span key={dia.id}>{dia.label}</span>
                ))}
              </div>
              <div className="calendar-grid calendar-grid-body">
                {calendario.map((dia, index) => (
                  <button
                    key={`${dia || 'vazio'}-${index}`}
                    type="button"
                    className={dia === DIA_DEMO_SELECIONADO ? "calendar-day is-selected" : "calendar-day"}
                    disabled={!dia}
                  >
                    {dia}
                  </button>
                ))}
              </div>
            </CardContent>
            <CardFooter className="calendar-footer">
              <button type="button" className="calendar-link">Fechar</button>
              <div className="calendar-actions">
              <button type="button" className="calendar-link">Cancelar</button>
                <button type="button" className="calendar-link calendar-link-strong">
                Confirmar
                </button>
              </div>
            </CardFooter>
          </Card>

          <Card className="tile span-2 compact-card metric-card">
            <CardContent>
              <div className="metric-value">4,8</div>
              <div className="stars">★ ★ ★ ★ ☆</div>
              <p className="tile-copy">1.324 avaliações</p>
            </CardContent>
          </Card>

          <Card className="tile span-2 compact-card">
            <CardContent className="tile-inline space-between">
              <div className="switch-pill" aria-hidden="true">
                <span className="switch-pill-thumb" />
              </div>
              <div>
                <p className="tile-label-strong">Rótulo</p>
                <p className="tile-copy">Descrição</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tile span-2 compact-card tile-dark">
            <CardContent className="tile-dark-content">
              <span className="dark-badge">＋</span>
              <p>Título do conteúdo</p>
            </CardContent>
          </Card>

          <Card className="tile span-3 compact-card">
            <CardContent className="topic-row">
              <div className="topic-icon" aria-hidden="true">
                ⌘
              </div>
              <div>
                <p className="tile-label-strong">Detalhes do tópico</p>
                <p className="tile-copy">Esta é uma descrição de exemplo.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tile span-3 compact-card action-card">
            <CardContent className="action-row">
              <Button>‹</Button>
              <Button>›</Button>
              <Button variant="ghost">Botão</Button>
            </CardContent>
          </Card>

          <Card className="tile span-3 row-2 form-tile">
            <CardHeader>
              <CardTitle>Título principal</CardTitle>
              <CardDescription>Cole seu texto aqui e use como referência.</CardDescription>
            </CardHeader>
            <CardContent className="form-tile-content">
              <Badge tone="positive">Texto</Badge>
              <Label htmlFor="email-demo">Campo</Label>
              <Input id="email-demo" placeholder="Placeholder" />
              <Label htmlFor="mensagem-demo">Mensagem</Label>
              <Textarea id="mensagem-demo" placeholder="Escreva um resumo curto..." rows={3} />
            </CardContent>
            <CardFooter>
              <Button className="button-end">Botão</Button>
            </CardFooter>
          </Card>

          <Card className="tile span-2 compact-card avatar-card">
            <CardContent className="avatar-stack">
              <Avatar initials="AM" size="sm" />
              <Avatar initials="LN" size="sm" />
              <Avatar initials="GP" size="sm" />
            </CardContent>
          </Card>

          <Card className="tile span-4 row-2 tabs-tile">
            <CardHeader>
              <CardDescription>Visão rápida</CardDescription>
              <CardTitle>Insira um título informativo aqui</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="insights">
                <TabsList>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                  <TabsTrigger value="status">Status</TabsTrigger>
                  <TabsTrigger value="config">Config</TabsTrigger>
                </TabsList>
                <TabsContent value="insights">
                  <p className="tile-copy tile-copy-lg">Texto de apoio para este bloco.</p>
                </TabsContent>
                <TabsContent value="status">
                  <div className="tabs-stack">
                    <Label htmlFor="visao">Filtro</Label>
                    <Select id="visao" defaultValue="semana">
                      <option value="semana">Esta semana</option>
                      <option value="mes">Este mês</option>
                      <option value="trimestre">Trimestre</option>
                    </Select>
                  </div>
                </TabsContent>
                <TabsContent value="config">
                  <div className="tabs-stack">
                    <div className="control-row">
                      <Switch id="modo-compacto" defaultChecked />
                      <Label htmlFor="modo-compacto">Modo compacto</Label>
                    </div>
                    <div className="control-row">
                      <Checkbox id="resumo-auto" defaultChecked />
                      <Label htmlFor="resumo-auto">Resumo automático</Label>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="tile span-2 compact-card spinner-card">
            <CardContent className="spinner-row">
              <Spinner />
              <Checkbox id="ready-check" />
            </CardContent>
          </Card>

          <Card className="tile span-3 compact-card progress-card">
            <CardContent className="progress-stack">
              <div>
                <div className="progress-meta">
                  <span>32%</span>
                  <span>✺</span>
                </div>
                <Progress value={32} tone="negative" />
              </div>
              <div>
                <div className="progress-meta scale-meta">
                  <span>FRACA</span>
                  <span>MÉDIA</span>
                  <span>FORTE</span>
                </div>
                <Progress value={74} tone="positive" />
              </div>
            </CardContent>
          </Card>

          <Card className="tile span-2 compact-card tags-card">
            <CardContent className="tag-row">
              <Badge tone="positive">Tag</Badge>
              <Badge tone="warning">Filtro</Badge>
              <Badge>+4</Badge>
            </CardContent>
          </Card>

          <Card className="tile span-3 compact-card steps-card">
            <CardContent>
              <div className="steps-row" aria-label="Progresso em etapas">
                {passos.map((passo, index) => (
                  <div key={passo} className="step-item">
                    <span className={index < 2 ? "step-dot is-done" : "step-dot is-current"}>{index + 1}</span>
                    {index < passos.length - 1 ? <span className="step-line" aria-hidden="true" /> : null}
                  </div>
                ))}
              </div>
              <p className="tile-label-strong step-copy">Descrição da etapa</p>
            </CardContent>
          </Card>

          <Card className="tile span-4 row-2 alert-card">
            <CardHeader>
              <CardTitle>Insira um título informativo aqui</CardTitle>
              <CardAction>
                <button type="button" className="plus-button" aria-label="Expandir">
                  +
                </button>
              </CardAction>
            </CardHeader>
            <CardContent className="alerts-stack">
              <Alert>
                <AlertTitle>Adicione o título do alerta aqui!</AlertTitle>
                <AlertDescription>
                  Este alerta fica melhor quando usa duas linhas de texto para contextualizar.
                </AlertDescription>
              </Alert>
              <Separator />
              <div className="alert-actions-row">
                <Button variant="ghost">Botão</Button>
                <Badge tone="warning">Secundário</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="tile span-3 row-2 modal-card">
            <CardHeader>
              <CardTitle>Título do modal</CardTitle>
            </CardHeader>
            <CardContent className="modal-card-content">
              <span className="modal-icon" aria-hidden="true">
                ⓘ
              </span>
              <p className="tile-copy tile-copy-lg">Descrição do conteúdo</p>
            </CardContent>
            <CardFooter className="modal-card-footer">
              <Button variant="ghost">Secundário</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Primário</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Título do modal</DialogTitle>
                  <DialogDescription>
                    Content description com hierarquia inspirada na referência da biblioteca.
                  </DialogDescription>
                  <div className="dialog-demo-actions">
                    <DialogClose asChild>
                      <Button variant="ghost">Cancelar</Button>
                    </DialogClose>
                    <Button>Confirmar</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
