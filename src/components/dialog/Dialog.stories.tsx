import type { Meta, StoryObj } from '@storybook/react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from './Dialog';
import { Button } from '../button/Button';

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Abrir</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogTitle>Confirmação</DialogTitle>
                <DialogDescription>
                    Tem certeza que deseja continuar?
                </DialogDescription>

                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                    <Button variant="ghost">Cancelar</Button>
                    <Button onClick={() => alert('Confirmado!')}>Confirmar</Button>
                </div>
            </DialogContent>
        </Dialog>
    ),
};
