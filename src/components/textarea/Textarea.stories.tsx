import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
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
    rows: {
      control: "number",
      description: "Número de linhas visíveis",
    },
  },
  args: {
    placeholder: "Digite sua mensagem…",
    disabled: false,
    invalid: false,
    rows: 4,
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Padrao: Story = {
  name: "Padrão",
  args: {
    placeholder: "Descreva sua solicitação…",
  },
};

export const Erro: Story = {
  name: "Com erro",
  args: {
    placeholder: "Campo obrigatório",
    invalid: true,
    defaultValue: "Texto incompleto…",
  },
};

export const Desabilitado: Story = {
  name: "Desabilitado",
  args: {
    placeholder: "Campo inativo",
    disabled: true,
  },
};

export const Alto: Story = {
  name: "Mais linhas",
  args: {
    rows: 8,
    placeholder: "Escreva um texto longo…",
  },
};
