import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Valor atual (0–100)",
    },
    tone: {
      control: "select",
      options: ["neutral", "positive", "negative", "warning"],
      description: "Tom de cor da barra",
    },
    label: {
      control: "text",
      description: "Rótulo acessível",
    },
  },
  args: {
    value: 60,
    tone: "neutral",
    label: "Progresso",
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Padrao: Story = {
  name: "Padrão",
  args: {
    value: 60,
  },
};

export const Positivo: Story = {
  name: "Positivo",
  args: {
    value: 80,
    tone: "positive",
  },
};

export const Negativo: Story = {
  name: "Negativo",
  args: {
    value: 25,
    tone: "negative",
  },
};

export const Aviso: Story = {
  name: "Aviso",
  args: {
    value: 55,
    tone: "warning",
  },
};

export const TodosOsTons: Story = {
  name: "Todos os tons",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Progress value={70} label="Neutro" />
      <Progress value={80} tone="positive" label="Positivo" />
      <Progress value={25} tone="negative" label="Negativo" />
      <Progress value={55} tone="warning" label="Aviso" />
    </div>
  ),
};
