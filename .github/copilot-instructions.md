# Aurora DS React - Instruções do Copilot

## Visão geral do projeto
Aurora DS é uma biblioteca de componentes React construída com TypeScript, Vite, Radix UI e CSS Modules. O pacote publica componentes reutilizáveis para outras aplicações React.

## Arquitetura e decisões principais

### Modo biblioteca
- **Entrada pública**: `src/index.ts`
- **Saídas**: `dist/index.mjs`, `dist/index.cjs`, `dist/index.d.ts` e `dist/theme.css`
- **Build**: Vite em modo biblioteca com formatos ESM e CJS
- **Dependências externas**: React, React DOM, `react/jsx-runtime`, Radix UI e `clsx`
- **Tipos**: gerados automaticamente com `vite-plugin-dts`

### Estrutura dos componentes
Cada componente segue este padrão:

```text
src/components/{component-name}/
├── {ComponentName}.tsx
├── {ComponentName}.module.css
├── {ComponentName}.stories.tsx
├── {ComponentName}.test.tsx
└── index.ts
```

### Sistema de estilos
- Os tokens ficam em `src/theme.css`
- O tema escuro usa o seletor `[data-theme="dark"]`
- Todos os estilos dos componentes usam CSS Modules
- O pacote raiz importa `./theme.css`, então os estilos globais são carregados ao consumir `@cpxlabs/aurora-ds`

### Integração com Radix UI
- Componentes compostos, como Dialog e Tabs, encapsulam os primitives do Radix
- Use `clsx` para mesclar classes do módulo CSS com `className`
- Reencaminhe props nativas/primitives sempre que possível

## Comandos de desenvolvimento

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm storybook
pnpm build-storybook
```

## Qualidade e testes
- O repositório usa **Vitest + Testing Library** com ambiente `jsdom`
- Rode `pnpm lint`, `pnpm typecheck`, `pnpm test` e `pnpm build` antes de concluir mudanças
- Use Storybook para revisar visualmente os componentes quando a mudança afetar UI

## Documentação
- Use sempre **português** em documentação, exemplos e textos de interface
- A documentação geral fica em `src/docs/*.mdx`
- As histórias dos componentes ficam em `src/components/*/*.stories.tsx`

## Publicação
- Nome do pacote: `@cpxlabs/aurora-ds`
- Apenas `dist/` é publicado
- Consumidores podem importar o pacote raiz ou `@cpxlabs/aurora-ds/theme.css` quando precisarem expor o tema explicitamente