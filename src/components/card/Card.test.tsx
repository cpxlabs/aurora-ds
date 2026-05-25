import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card, CardAction, CardHeader, CardTitle } from "./Card";

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
});
