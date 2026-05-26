import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    invalid: {
      control: "boolean",
      description: "Exibe o rótulo no estado de erro",
    },
    children: {
      control: "text",
      description: "Texto do rótulo",
    },
  },
  args: {
    children: "Nome completo",
    invalid: false,
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Padrao: Story = {
  name: "Padrão",
  args: {
    children: "E-mail",
  },
};

export const Invalido: Story = {
  name: "Inválido",
  args: {
    children: "E-mail",
    invalid: true,
  },
};

export const ComHtmlFor: Story = {
  name: "Associado a um campo",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Label htmlFor="exemplo">Nome completo</Label>
      <input id="exemplo" placeholder="Seu nome" />
    </div>
  ),
};
