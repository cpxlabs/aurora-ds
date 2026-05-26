import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "positive", "negative", "warning"],
      description: "Cor semântica do alerta",
    },
    children: {
      control: false,
    },
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Neutro: Story = {
  name: "Neutro",
  render: () => (
    <Alert>
      <AlertTitle>Informação</AlertTitle>
      <AlertDescription>Esta é uma mensagem informativa padrão.</AlertDescription>
    </Alert>
  ),
};

export const Positivo: Story = {
  name: "Positivo",
  render: () => (
    <Alert tone="positive">
      <AlertTitle>Operação concluída</AlertTitle>
      <AlertDescription>Seus dados foram salvos com sucesso.</AlertDescription>
    </Alert>
  ),
};

export const Negativo: Story = {
  name: "Negativo",
  render: () => (
    <Alert tone="negative">
      <AlertTitle>Erro ao processar</AlertTitle>
      <AlertDescription>Não foi possível concluir a operação. Tente novamente.</AlertDescription>
    </Alert>
  ),
};

export const Aviso: Story = {
  name: "Aviso",
  render: () => (
    <Alert tone="warning">
      <AlertTitle>Atenção</AlertTitle>
      <AlertDescription>Esta ação não pode ser desfeita. Revise antes de continuar.</AlertDescription>
    </Alert>
  ),
};

export const TodasVariantes: Story = {
  name: "Todas as variantes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}>
      <Alert tone="neutral">
        <AlertTitle>Neutro</AlertTitle>
        <AlertDescription>Mensagem informativa padrão.</AlertDescription>
      </Alert>
      <Alert tone="positive">
        <AlertTitle>Positivo</AlertTitle>
        <AlertDescription>Operação concluída com sucesso.</AlertDescription>
      </Alert>
      <Alert tone="negative">
        <AlertTitle>Negativo</AlertTitle>
        <AlertDescription>Ocorreu um erro inesperado.</AlertDescription>
      </Alert>
      <Alert tone="warning">
        <AlertTitle>Aviso</AlertTitle>
        <AlertDescription>Esta ação pode causar perda de dados.</AlertDescription>
      </Alert>
    </div>
  ),
};
