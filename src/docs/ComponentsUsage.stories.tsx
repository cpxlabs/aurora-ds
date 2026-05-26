import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '../components/alert/Alert';
import { Button } from '../components/button/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/card/Card';
import { Input } from '../components/input/Input';
import { Label } from '../components/label/Label';

const meta: Meta = {
    title: 'Docs/Como usar componentes',
};

export default meta;
type Story = StoryObj;

export const AcaoRapida: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button>Ação principal</Button>
            <Button variant="ghost">Ação secundária</Button>
        </div>
    ),
};

export const FormularioSimples: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
            <div style={{ display: 'grid', gap: 6 }}>
                <Label htmlFor="email-docs">E-mail</Label>
                <Input id="email-docs" type="email" placeholder="voce@empresa.com" />
            </div>

            <Button>Continuar</Button>
        </div>
    ),
};

export const ComposicaoComCard: Story = {
    render: () => (
        <Card style={{ maxWidth: 420 }}>
            <CardHeader>
                <CardTitle>Checkout</CardTitle>
                <CardDescription>Exemplo de composição entre componentes públicos.</CardDescription>
            </CardHeader>

            <CardContent style={{ display: 'grid', gap: 12 }}>
                <Alert tone="positive">
                    <AlertTitle>Tudo pronto</AlertTitle>
                    <AlertDescription>
                        Combine componentes de formulário, feedback e layout na mesma superfície.
                    </AlertDescription>
                </Alert>

                <Button>Finalizar pedido</Button>
            </CardContent>
        </Card>
    ),
};
