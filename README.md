# my-ui (React + TypeScript + Radix + CSS Modules)

Biblioteca de componentes React usando **Radix UI** e **TypeScript**, construída com **Vite (library mode)**.

## Instalação

```bash
npm i @sua-scope/my-ui
```

## Uso

> A biblioteca usa tokens via CSS variables e suporta dark mode com `[data-theme="dark"]`.

No seu app, defina o tema no `html` ou em um wrapper:

```html
<html data-theme="dark">
  ...
</html>
```

Ou em React:

```tsx
// Ex.: toggler simples
useEffect(() => {
  document.documentElement.setAttribute("data-theme", "dark");
}, []);
```

Componentes:

```tsx
import { Button, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@sua-scope/my-ui";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Olá!</DialogTitle>
        <DialogDescription>Esse modal usa Radix + CSS Modules.</DialogDescription>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <Button onClick={() => alert("ok")}>OK</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## Desenvolvimento

```bash
npm install
npm run build
npm run typecheck
```

## Estrutura
- `src/theme.css`: tokens (light/dark) via CSS variables
- `src/components/*`: componentes com CSS Modules
- `src/index.ts`: exports no root

## Docs em MDX

Este projeto inclui páginas de documentação em **MDX** dentro de `src/docs` e docs por componente em `*.docs.stories.mdx`.

