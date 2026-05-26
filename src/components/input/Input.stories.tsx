import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto de espaço reservado",
    },
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    invalid: {
      control: "boolean",
      description: "Estado de erro (borda vermelha)",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
      description: "Tipo do input HTML",
    },
  },
  args: {
    placeholder: "Digite aqui…",
    disabled: false,
    invalid: false,
    type: "text",
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Padrao: Story = {
  name: "Padrão",
  args: {
    placeholder: "Seu e-mail",
    type: "email",
  },
};

export const Erro: Story = {
  name: "Com erro",
  args: {
    placeholder: "Usuário inválido",
    invalid: true,
    defaultValue: "usuario@",
  },
};

export const Desabilitado: Story = {
  name: "Desabilitado",
  args: {
    placeholder: "Campo inativo",
    disabled: true,
  },
};

export const Senha: Story = {
  name: "Senha",
  args: {
    type: "password",
    placeholder: "••••••••",
  },
};
