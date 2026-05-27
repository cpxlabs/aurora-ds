import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'ghost'],
            description: 'Variante visual do botão',
        },
        disabled: {
            control: 'boolean',
            description: 'Estado desabilitado',
        },
        asChild: {
            control: 'boolean',
            description: 'Renderiza o botão como elemento filho (polimórfico)',
        },
        children: {
            control: 'text',
            description: 'Conteúdo do botão',
        },
    },
    args: {
        children: 'Button',
        variant: 'solid',
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
    args: {
        children: 'Salvar',
        variant: 'solid',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Cancelar',
        variant: 'ghost',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Desabilitado',
        disabled: true,
    },
};

export const AsLink: Story = {
    name: 'Como link (asChild)',
    render: () => (
        <Button asChild>
            <a href="/inicio">Ir para o início</a>
        </Button>
    ),
};
