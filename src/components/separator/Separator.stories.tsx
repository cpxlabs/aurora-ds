import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientação do separador",
    },
  },
  args: {
    orientation: "horizontal",
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  name: "Horizontal",
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <p style={{ margin: "0 0 12px" }}>Seção acima</p>
      <Separator />
      <p style={{ margin: "12px 0 0" }}>Seção abaixo</p>
    </div>
  ),
};

export const Vertical: Story = {
  name: "Vertical",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, height: 40 }}>
      <span>Item 1</span>
      <Separator orientation="vertical" />
      <span>Item 2</span>
      <Separator orientation="vertical" />
      <span>Item 3</span>
    </div>
  ),
};
