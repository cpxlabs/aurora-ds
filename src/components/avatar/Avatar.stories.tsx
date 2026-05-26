import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamanho do avatar",
    },
    src: {
      control: "text",
      description: "URL da imagem",
    },
    alt: {
      control: "text",
      description: "Texto alternativo",
    },
    initials: {
      control: "text",
      description: "Iniciais exibidas quando não há imagem",
    },
  },
  args: {
    size: "md",
    initials: "AB",
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const ComIniciais: Story = {
  name: "Com iniciais",
  args: {
    initials: "AB",
  },
};

export const ComImagem: Story = {
  name: "Com imagem",
  args: {
    src: "https://i.pravatar.cc/150?img=32",
    alt: "Foto de perfil",
  },
};

export const TodosTamanhos: Story = {
  name: "Todos os tamanhos",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
    </div>
  ),
};
