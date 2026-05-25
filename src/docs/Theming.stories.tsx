import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button/Button';

const meta: Meta = {
    title: 'Docs/Theming',
};

export default meta;
type Story = StoryObj;

export const TokensApplied: Story = {
    render: () => (
        <div
            style={{
                background: 'var(--ui-bg)',
                color: 'var(--ui-fg)',
                border: '1px solid var(--ui-border)',
                padding: 16,
                borderRadius: 12,
                display: 'grid',
                gap: 12,
                minWidth: 320,
            }}
        >
            <div style={{ fontWeight: 700 }}>Superfície usando tokens</div>
            <div style={{ opacity: 0.85 }}>Troque o tema na toolbar do Storybook.</div>
            <div style={{ display: 'flex', gap: 10 }}>
                <Button>Solid</Button>
                <Button variant="ghost">Secundário</Button>
            </div>
        </div>
    ),
};
