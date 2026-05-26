import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button/Button';

const meta: Meta = {
    title: 'Docs/Primeiros passos',
};

export default meta;
type Story = StoryObj;

export const ExemploRapido: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button>Primário</Button>
            <Button variant="ghost">Secundário</Button>
        </div>
    ),
};
