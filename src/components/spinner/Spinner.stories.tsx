import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamanho do spinner",
    },
    label: {
      control: "text",
      description: "Rótulo acessível para leitores de tela",
    },
  },
  args: {
    size: "md",
    label: "Carregando…",
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Padrao: Story = {
  name: "Padrão",
};

export const Pequeno: Story = {
  name: "Pequeno",
  args: { size: "sm" },
};

export const Grande: Story = {
  name: "Grande",
  args: { size: "lg" },
};

export const TodosTamanhos: Story = {
  name: "Todos os tamanhos",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Spinner size="sm" label="Carregando pequeno" />
      <Spinner size="md" label="Carregando médio" />
      <Spinner size="lg" label="Carregando grande" />
    </div>
  ),
};
