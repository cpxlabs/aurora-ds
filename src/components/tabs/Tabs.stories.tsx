import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    defaultValue: {
      control: "text",
      description: "Aba ativa por padrão (não controlado)",
    },
  },
  args: {
    defaultValue: "visao-geral",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Padrao: Story = {
  name: "Padrão",
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
        <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
        <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
      </TabsList>
      <TabsContent value="visao-geral">
        <p>Conteúdo da aba Visão Geral.</p>
      </TabsContent>
      <TabsContent value="detalhes">
        <p>Conteúdo da aba Detalhes.</p>
      </TabsContent>
      <TabsContent value="configuracoes">
        <p>Conteúdo da aba Configurações.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ComAbaDesabilitada: Story = {
  name: "Com aba desabilitada",
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
        <TabsTrigger value="premium" disabled>
          Premium
        </TabsTrigger>
        <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
      </TabsList>
      <TabsContent value="visao-geral">
        <p>Conteúdo da aba Visão Geral.</p>
      </TabsContent>
      <TabsContent value="premium">
        <p>Recurso disponível apenas para assinantes Premium.</p>
      </TabsContent>
      <TabsContent value="configuracoes">
        <p>Conteúdo da aba Configurações.</p>
      </TabsContent>
    </Tabs>
  ),
};
