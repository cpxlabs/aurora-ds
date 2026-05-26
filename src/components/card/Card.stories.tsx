import type { Meta, StoryObj } from "@storybook/react";
import {
    Card,
    CardAction,
    CardBadge,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardMedia,
    CardTitle,
} from "./Card";
import { Button } from "../button";
import styles from "./Card.module.css";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    subcomponents: {
        CardHeader,
        CardAction,
        CardTitle,
        CardDescription,
        CardContent,
        CardFooter,
        CardMedia,
        CardBadge,
    },
    parameters: {
        layout: "padded",
    },
    args: {
        asChild: false,
    },
    argTypes: {
        asChild: {
            control: "boolean",
            description: "Renderiza o card como Slot (polimórfico)",
        },
        className: {
            control: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

const imageCards = [
    {
        title: "Headline Label",
        description: "Escreva uma descrição marcante nesta seção dedicada do card. Cada palavra importa.",
        cta: "Botão",
    },
    {
        title: "Descubra mais",
        description:
            "Explore recursos com imagens bonitas e descrições envolventes para destacar sua interface.",
        cta: "Saiba mais",
    },
    {
        title: "Comece agora",
        description: "Inicie sua jornada com soluções pensadas para diferentes cenários de produto.",
        cta: "Começar",
    },
];

export const ImageCards: Story = {
    name: "Cards com imagem",
    render: () => (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
            }}
        >
            {imageCards.map((card, index) => (
                <Card key={card.title}>
                    <CardMedia
                        src={`https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=600&q=80&sig=${index}`}
                        alt={card.title}
                    />
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button>{card.cta}</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    ),
};

export const StatisticsCards: Story = {
    name: "Cards de estatísticas",
    render: () => (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 12,
            }}
        >
            <Card>
                <CardHeader className={styles.metaRow}>
                    <span>Receita total</span>
                </CardHeader>
                <CardContent>
                    <span className={styles.statValue}>R$ 45.231,89</span>
                    <div className={styles.metaRow}>
                        <CardBadge tone="positive">+20.1%</CardBadge>
                        <span className={styles.statLabel}>em relação ao mês anterior</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className={styles.metaRow}>
                    <span>Usuários ativos</span>
                </CardHeader>
                <CardContent>
                    <span className={styles.statValue}>2,350</span>
                    <div className={styles.metaRow}>
                        <CardBadge tone="positive">+100%</CardBadge>
                        <span className={styles.statLabel}>crescimento acima da meta</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className={styles.metaRow}>
                    <span>Taxa de conversão</span>
                </CardHeader>
                <CardContent>
                    <span className={styles.statValue}>12.5%</span>
                    <div className={styles.metaRow}>
                        <CardBadge tone="negative">-4.3%</CardBadge>
                        <span className={styles.statLabel}>em relação à última semana</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    ),
};

export const InteractiveCard: Story = {
    name: "Card interativo",
    render: () => (
        <Card style={{ maxWidth: 720 }}>
            <CardHeader style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className={styles.avatar}>H</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <CardTitle style={{ margin: 0 }}>Resumo semanal</CardTitle>
                    <CardDescription style={{ margin: 0 }}>Atualização do painel da equipe</CardDescription>
                </div>
                <CardAction className={styles.actions}>
                    <Button variant="ghost" style={{ padding: "8px 12px" }} aria-label="Salvar">
                        Salvar
                    </Button>
                </CardAction>
            </CardHeader>

            <CardContent>
                <div className={styles.tagList}>
                    <CardBadge>Badge</CardBadge>
                    <CardBadge>Badge</CardBadge>
                </div>
            </CardContent>

            <div className={styles.divider} />

            <CardFooter style={{ width: "100%" }}>
                <Button style={{ width: "100%" }}>Abrir detalhes</Button>
            </CardFooter>
        </Card>
    ),
};
