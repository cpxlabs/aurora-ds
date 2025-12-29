import type { Meta, StoryObj } from "@storybook/react";
import {
    Card,
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
            description: "Render the card as a Slot (polymorphic)",
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
        description: "Write an amazing description in this dedicated card section. Each word counts.",
        cta: "Button",
    },
    {
        title: "Discover More",
        description:
            "Explore amazing features with beautiful imagery and compelling descriptions that engage users.",
        cta: "Learn More",
    },
    {
        title: "Get Started",
        description: "Begin your journey with our comprehensive solutions designed to meet your needs.",
        cta: "Start Now",
    },
];

export const ImageCards: Story = {
    name: "Image Cards",
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
    name: "Statistics Cards",
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
                    <span>Total Revenue</span>
                </CardHeader>
                <CardContent>
                    <span className={styles.statValue}>$45,231.89</span>
                    <div className={styles.metaRow}>
                        <CardBadge tone="positive">+20.1%</CardBadge>
                        <span className={styles.statLabel}>from last month</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className={styles.metaRow}>
                    <span>Active Users</span>
                </CardHeader>
                <CardContent>
                    <span className={styles.statValue}>2,350</span>
                    <div className={styles.metaRow}>
                        <CardBadge tone="positive">+100%</CardBadge>
                        <span className={styles.statLabel}>boost everything</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className={styles.metaRow}>
                    <span>Conversion Rate</span>
                </CardHeader>
                <CardContent>
                    <span className={styles.statValue}>12.5%</span>
                    <div className={styles.metaRow}>
                        <CardBadge tone="negative">-4.3%</CardBadge>
                        <span className={styles.statLabel}>from last week</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    ),
};

export const InteractiveCard: Story = {
    name: "Interactive Card",
    render: () => (
        <Card style={{ maxWidth: 720 }}>
            <CardHeader style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className={styles.avatar}>H</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <CardTitle style={{ margin: 0 }}>Headline Label</CardTitle>
                    <CardDescription style={{ margin: 0 }}>Subtitle text</CardDescription>
                </div>
                <div className={styles.actions}>
                    <Button variant="ghost" style={{ padding: "8px 12px" }} aria-label="Save">
                        Save
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                <div className={styles.tagList}>
                    <CardBadge>Badge</CardBadge>
                    <CardBadge>Badge</CardBadge>
                </div>
            </CardContent>

            <div className={styles.divider} />

            <CardFooter style={{ width: "100%" }}>
                <Button style={{ width: "100%" }}>Button</Button>
            </CardFooter>
        </Card>
    ),
};
