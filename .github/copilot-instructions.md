# Aurora DS React - AI Copilot Instructions

## Project Overview
This is a **React component library** built with TypeScript, Radix UI primitives, and CSS Modules. It's configured as a Vite library (not an application) that exports reusable UI components for consumption by other React apps.

## Architecture & Key Decisions

### Library Mode Setup
- **Build target**: Dual format (ESM + CJS) via Vite library mode
- **Entry point**: `src/index.ts` exports all public APIs
- **Output**: `dist/index.mjs` (ESM), `dist/index.cjs` (CommonJS), `dist/index.d.ts` (types)
- **Externals**: React, React-DOM, and all Radix UI packages are peer dependencies (not bundled)
- **Type generation**: `vite-plugin-dts` generates `.d.ts` files automatically during build

### Component Structure Pattern
Every component follows this exact structure:
```
src/components/{component-name}/
├── {ComponentName}.tsx          # Component implementation
├── {ComponentName}.module.css   # Scoped styles using CSS Modules
├── {ComponentName}.stories.tsx  # Storybook stories
├── {ComponentName}.mdx          # Documentation (if exists)
└── index.ts                     # Re-exports for clean imports
```

**Example**: See [src/components/button](../src/components/button) or [src/components/dialog](../src/components/dialog)

### Styling System
- **Design tokens**: Defined in [src/theme.css](../src/theme.css) as CSS custom properties (`--ui-*`)
- **Theme switching**: Uses `[data-theme="dark"]` attribute selector for dark mode
- **Scoping**: All component styles use CSS Modules (`.module.css`)
- **Token usage**: Components reference tokens via `var(--ui-primary)`, `var(--ui-border)`, etc.
- **CSS is sideEffect**: Marked in package.json so bundlers don't tree-shake styles

### Radix UI Integration
- Dialog component wraps `@radix-ui/react-dialog` with custom styling
- Export both primitive components (DialogTrigger, DialogTitle) and styled wrappers (DialogContent)
- Use `clsx` to merge CSS Module classes with user-provided `className`
- Pass through all props to Radix primitives via spread operators

## Development Commands

```bash
pnpm install          # Install dependencies (uses pnpm)
pnpm dev              # Start Vite dev server (for local testing)
pnpm build            # Build library for distribution
pnpm typecheck        # Run TypeScript compiler checks
pnpm storybook        # Launch Storybook on port 6006
pnpm build-storybook  # Build static Storybook site
```

## Creating New Components

1. **Create component directory** under `src/components/{name}/`
2. **Implement component** in `{Name}.tsx`:
   - Use TypeScript with explicit type exports
   - Extend native HTML props when possible (e.g., `ButtonHTMLAttributes<HTMLButtonElement>`)
   - Import styles from `.module.css`
   - Use `clsx` to combine module classes with user className
3. **Create styles** in `{Name}.module.css`:
   - Use design tokens from `src/theme.css`
   - Use class name selectors (`.button`, `.ghost`, etc.)
4. **Add barrel export** in `index.ts`:
   ```ts
   export * from "./{Name}";
   ```
5. **Register in root** `src/index.ts`:
   ```ts
   export * from "./components/{name}";
   ```
6. **Create Storybook stories** in `{Name}.stories.tsx`:
   - Use CSF3 format (Meta, StoryObj types)
   - Define argTypes for all component props
   - Create variant stories (Solid, Ghost, Disabled, etc.)

## Testing & Quality Checks
- **TypeScript**: Run `pnpm typecheck` before commits
- **Manual testing**: Use Storybook (`pnpm storybook`) to test components in isolation
- **No automated tests yet**: Project currently uses manual QA via Storybook

## Documentation
- Component docs live in `.mdx` files alongside components
- General docs in `src/docs/*.mdx` (GettingStarted, Theming)
- Storybook autodocs enabled for all components

## Publishing Notes
- Package name: `@sua-scope/my-ui` (update scope before publishing)
- Only `dist/` folder is published (see `files` in package.json)
- Consumers must have React 18+ installed (peer dependency)
- Consumers must import theme: `import "@sua-scope/my-ui/dist/theme.css"`

## Testing strategy: Are you planning to add unit/integration tests (Vitest, Jest, Testing Library)? Should I document that?

## Linting/formatting: I see lint script is a placeholder. Are you using ESLint/Prettier with specific configs?

## Contribution workflow: Any Git conventions (branch naming, commit format) to document?