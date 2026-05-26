import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    invalid: {
      control: "boolean",
      description: "Estado de erro",
    },
  },
  args: {
    disabled: false,
    invalid: false,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Padrao: Story = {
  name: "Padrão",
  render: (args) => (
    <Select {...args} style={{ width: 240 }}>
      <option value="">Selecione uma opção</option>
      <option value="br">Brasil</option>
      <option value="pt">Portugal</option>
      <option value="us">Estados Unidos</option>
    </Select>
  ),
};

export const Invalido: Story = {
  name: "Inválido",
  render: (args) => (
    <Select {...args} invalid style={{ width: 240 }}>
      <option value="">Selecione uma opção</option>
      <option value="br">Brasil</option>
    </Select>
  ),
};

export const Desabilitado: Story = {
  name: "Desabilitado",
  render: (args) => (
    <Select {...args} disabled style={{ width: 240 }}>
      <option value="br">Brasil</option>
    </Select>
  ),
};
