import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("renderiza o texto fornecido", () => {
    render(<Badge>Publicado</Badge>);

    expect(screen.getByText("Publicado")).toBeInTheDocument();
  });

  it("usa o tom neutro por padrão", () => {
    render(<Badge>Rascunho</Badge>);

    const el = screen.getByText("Rascunho");
    // Não deve conter classes de positive nem negative
    expect(el.className).not.toMatch(/positive/i);
    expect(el.className).not.toMatch(/negative/i);
  });

  it("aceita tom positivo", () => {
    render(<Badge tone="positive">Ativo</Badge>);

    expect(screen.getByText("Ativo")).toBeInTheDocument();
  });

  it("aceita tom negativo", () => {
    render(<Badge tone="negative">Erro</Badge>);

    expect(screen.getByText("Erro")).toBeInTheDocument();
  });

  it("aceita tom de aviso", () => {
    render(<Badge tone="warning">Pendente</Badge>);

    expect(screen.getByText("Pendente")).toBeInTheDocument();
  });

  it("repassa className extra ao elemento span", () => {
    render(<Badge className="minha-classe">Label</Badge>);

    expect(screen.getByText("Label")).toHaveClass("minha-classe");
  });
});
