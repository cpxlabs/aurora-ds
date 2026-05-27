import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "positive", "negative", "warning"],
      description: "Cor semântica do badge",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Tamanho do badge",
    },
    children: {
      control: "text",
      description: "Texto do badge",
    },
  },
  args: {
    children: "Badge",
    tone: "neutral",
    size: "md",
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutro: Story = {
  name: "Neutro",
  args: { children: "Rascunho", tone: "neutral" },
};

export const Positivo: Story = {
  name: "Positivo",
  args: { children: "Publicado", tone: "positive" },
};

export const Negativo: Story = {
  name: "Negativo",
  args: { children: "Arquivado", tone: "negative" },
};

export const Aviso: Story = {
  name: "Aviso",
  args: { children: "Pendente", tone: "warning" },
};

export const Pequeno: Story = {
  name: "Tamanho pequeno",
  args: { children: "Novo", tone: "positive", size: "sm" },
};

export const TodasVariantes: Story = {
  name: "Todas as variantes",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
      <Badge tone="neutral">Neutro</Badge>
      <Badge tone="positive">Positivo</Badge>
      <Badge tone="negative">Negativo</Badge>
      <Badge tone="warning">Aviso</Badge>
      <Badge tone="neutral" size="sm">Pequeno</Badge>
      <Badge tone="positive" size="sm">Publicado</Badge>
      <Badge tone="negative" size="sm">Erro</Badge>
      <Badge tone="warning" size="sm">Pendente</Badge>
    </div>
  ),
};
