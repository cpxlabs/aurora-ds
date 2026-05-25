# Aurora DS

Aurora DS é uma biblioteca de componentes React construída com TypeScript, Vite, Radix UI e CSS Modules.

## Regra do repositório

- Use sempre **português** em documentação, exemplos, textos de interface e comunicação relacionada a este repositório.

## Instalação

```bash
pnpm add @cpxlabs/aurora-ds
```

Importe o arquivo de tema exportado uma vez no ponto de entrada da aplicação:

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

Para ativar o modo escuro, defina `data-theme="dark"` no `html` ou em um wrapper que contenha os componentes:

```html
<html data-theme="dark">
  ...
</html>
```

## Desenvolvimento

```bash
corepack pnpm install --ignore-scripts
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
corepack pnpm storybook
```

## Estrutura do pacote

- `/home/runner/work/aurora-ds/aurora-ds/src/components/*` contém os componentes públicos.
- `/home/runner/work/aurora-ds/aurora-ds/src/theme.css` define os tokens compartilhados.
- `/home/runner/work/aurora-ds/aurora-ds/src/index.ts` exporta a API pública.
- `dist/` é gerado por `pnpm build` e é a única saída publicada.

## Componentes atuais

- `Button`
- `Card`
- `Dialog`
