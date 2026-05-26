import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Alert, AlertDescription, AlertTitle } from "./Alert";

describe("Alert", () => {
  it("renderiza com role alert", () => {
    render(<Alert>Mensagem de alerta</Alert>);

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renderiza título e descrição", () => {
    render(
      <Alert>
        <AlertTitle>Operação concluída</AlertTitle>
        <AlertDescription>Seus dados foram salvos com sucesso.</AlertDescription>
      </Alert>
    );

    expect(screen.getByText("Operação concluída")).toBeInTheDocument();
    expect(screen.getByText("Seus dados foram salvos com sucesso.")).toBeInTheDocument();
  });

  it("aceita o tom neutral por padrão", () => {
    render(<Alert>Neutro</Alert>);

    const el = screen.getByRole("alert");
    expect(el.className).not.toMatch(/positive/i);
    expect(el.className).not.toMatch(/negative/i);
    expect(el.className).not.toMatch(/warning/i);
  });

  it("aceita tom positive", () => {
    render(<Alert tone="positive">Sucesso</Alert>);

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("aceita tom negative", () => {
    render(<Alert tone="negative">Erro crítico</Alert>);

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("aceita tom warning", () => {
    render(<Alert tone="warning">Atenção</Alert>);

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("repassa className extra", () => {
    render(<Alert className="minha-classe">Info</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("minha-classe");
  });
});
