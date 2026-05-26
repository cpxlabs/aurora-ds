# Aurora DS

Aurora DS é uma biblioteca de componentes React construída com TypeScript, Vite, Radix UI e CSS Modules.

## Regra do repositório

- Use sempre **português** em documentação, exemplos, textos de interface e comunicação relacionada a este repositório.

## Instalação

```bash
pnpm add @cpxlabs/aurora-ds
```

## Consumo do pacote

Ao importar os componentes pelo pacote raiz, os tokens de tema já são carregados automaticamente:

```ts
import { Button, Dialog } from "@cpxlabs/aurora-ds";
```

Se você precisar expor somente os estilos de tema de forma explícita, também pode usar a entrada dedicada:

```ts
import "@cpxlabs/aurora-ds/theme.css";
```

## Uso

```tsx
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@cpxlabs/aurora-ds";

export function Exemplo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir diálogo</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Confirmar ação</DialogTitle>
        <DialogDescription>
          Os componentes Aurora DS usam variáveis CSS para aplicar tema.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
```

## Documentação dos componentes

- Rode `pnpm storybook` para abrir a documentação interativa localmente.
- Consulte as páginas **Docs/Primeiros passos**, **Docs/Temas** e **Docs/Como usar componentes** no Storybook.
- Cada componente também possui sua própria página com playground, controles e exemplos prontos.

### Padrão recomendado de consumo

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@cpxlabs/aurora-ds";

export function ExemploDeTela() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar</CardTitle>
        <CardDescription>Use componentes compostos para montar sua UI.</CardDescription>
      </CardHeader>

      <CardContent>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" placeholder="voce@empresa.com" />

        <Button>Continuar</Button>

        <Alert tone="positive">
          <AlertTitle>Pronto</AlertTitle>
          <AlertDescription>Os componentes compartilham o mesmo tema global.</AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
```

## i18n

Os textos internos padrão da biblioteca podem ser traduzidos com `AuroraI18nProvider`.

Locales disponíveis:

- `pt_br`
- `es`
- `eng`

```tsx
import {
  AuroraI18nProvider,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Spinner,
} from "@cpxlabs/aurora-ds";

export function ExemploComI18n() {
  return (
    <AuroraI18nProvider locale="eng">
      <Dialog open>
        <DialogContent>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogDescription>Check the translated close button label.</DialogDescription>
        </DialogContent>
      </Dialog>

      <Spinner />
    </AuroraI18nProvider>
  );
}
```

Você também pode sobrescrever mensagens específicas:

```tsx
import { AuroraI18nProvider, Progress } from "@cpxlabs/aurora-ds";

export function Upload() {
  return (
    <AuroraI18nProvider
      locale="pt_br"
      messages={{ progressLabel: "Progresso do upload" }}
    >
      <Progress value={48} />
    </AuroraI18nProvider>
  );
}
```

Para ativar o modo escuro, defina `data-theme="dark"` no `html` ou em um wrapper que contenha os componentes:

```html
<html data-theme="dark">
  ...
</html>
```

## Desenvolvimento

```bash
pnpm install --ignore-scripts
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm storybook
```

## Estrutura do pacote

- `src/components/*` contém os componentes públicos.
- `src/theme.css` define os tokens compartilhados.
- `src/index.ts` exporta a API pública.
- `src/docs/*` concentra a documentação geral exibida no Storybook.
- `dist/` é gerado por `pnpm build` e é a única saída publicada.

## Distribuição da V1

- Versão atual do pacote: `1.0.0`
- Artefatos publicados: `dist/index.mjs`, `dist/index.cjs`, `dist/index.d.ts` e `dist/theme.css`
- Antes de publicar, execute `pnpm lint`, `pnpm typecheck`, `pnpm test` e `pnpm build`

## Componentes

- `Alert` / `AlertTitle` / `AlertDescription`
- `Avatar`
- `Badge`
- `Button`
- `Card` / `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` / `CardAction` / `CardMedia` / `CardBadge`
- `Checkbox`
- `Dialog` / `DialogContent` / `DialogTitle` / `DialogDescription` / `DialogTrigger` / `DialogClose`
- `Input`
- `Label`
- `Progress`
- `Select`
- `Separator`
- `Spinner`
- `Switch`
- `Tabs` / `TabsList` / `TabsTrigger` / `TabsContent`
- `Textarea`
