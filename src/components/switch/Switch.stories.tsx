import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { Label } from "../label/Label";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    defaultChecked: {
      control: "boolean",
      description: "Ligado por padrão (não controlado)",
    },
  },
  args: {
    disabled: false,
    defaultChecked: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Padrao: Story = {
  name: "Padrão",
};

export const Ligado: Story = {
  name: "Ligado",
  args: {
    defaultChecked: true,
  },
};

export const Desabilitado: Story = {
  name: "Desabilitado",
  args: {
    disabled: true,
  },
};

export const ComRotulo: Story = {
  name: "Com rótulo",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Switch id="notificacoes" defaultChecked />
      <Label htmlFor="notificacoes">Receber notificações</Label>
    </div>
  ),
};
