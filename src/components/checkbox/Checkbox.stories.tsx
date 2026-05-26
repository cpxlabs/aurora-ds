import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Label } from "../label/Label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    defaultChecked: {
      control: "boolean",
      description: "Marcado por padrão (não controlado)",
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
type Story = StoryObj<typeof Checkbox>;

export const Padrao: Story = {
  name: "Padrão",
};

export const Marcado: Story = {
  name: "Marcado",
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
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Checkbox id="termos" defaultChecked />
      <Label htmlFor="termos">Aceito os termos de uso</Label>
    </div>
  ),
};
