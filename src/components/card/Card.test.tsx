import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

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

describe("Card", () => {
  it("renderiza como o elemento filho informado quando asChild está ativo", () => {
    render(
      <Card asChild>
        <a href="/docs">Ler documentação</a>
      </Card>
    );

    expect(screen.getByRole("link", { name: "Ler documentação" })).toHaveAttribute(
      "href",
      "/docs"
    );
  });

  it("marca ações do card para o layout do cabeçalho", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Visão geral</CardTitle>
          <CardAction>Ação</CardAction>
        </CardHeader>
      </Card>
    );

    expect(screen.getByText("Ação")).toHaveAttribute("data-slot", "card-action");
  });

  it("renderiza CardDescription como parágrafo", () => {
    render(
      <Card>
        <CardDescription>Descrição do card</CardDescription>
      </Card>
    );

    expect(screen.getByText("Descrição do card").tagName).toBe("P");
  });

  it("renderiza CardContent", () => {
    render(
      <Card>
        <CardContent>Conteúdo principal</CardContent>
      </Card>
    );

    expect(screen.getByText("Conteúdo principal")).toBeInTheDocument();
  });

  it("renderiza CardFooter", () => {
    render(
      <Card>
        <CardFooter>Rodapé do card</CardFooter>
      </Card>
    );

    expect(screen.getByText("Rodapé do card")).toBeInTheDocument();
  });

  it("renderiza CardMedia com a imagem e o atributo alt corretos", () => {
    render(<CardMedia src="foto.jpg" alt="Foto de capa" />);

    expect(screen.getByRole("img", { name: "Foto de capa" })).toHaveAttribute(
      "src",
      "foto.jpg"
    );
  });

  it("renderiza CardBadge com tom neutro por padrão", () => {
    render(<CardBadge>Neutro</CardBadge>);

    const el = screen.getByText("Neutro");
    expect(el.className).not.toMatch(/positive/i);
    expect(el.className).not.toMatch(/negative/i);
  });

  it("renderiza CardBadge com tom positivo", () => {
    render(<CardBadge tone="positive">+12%</CardBadge>);

    expect(screen.getByText("+12%")).toBeInTheDocument();
  });

  it("renderiza CardBadge com tom negativo", () => {
    render(<CardBadge tone="negative">-4%</CardBadge>);

    expect(screen.getByText("-4%")).toBeInTheDocument();
  });

  it("renderiza CardTitle como heading h3", () => {
    render(<CardTitle>Título do card</CardTitle>);

    expect(screen.getByRole("heading", { name: "Título do card", level: 3 })).toBeInTheDocument();
  });
});
