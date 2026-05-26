import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

function TabsExemplo() {
  return (
    <Tabs defaultValue="aba1">
      <TabsList>
        <TabsTrigger value="aba1">Aba 1</TabsTrigger>
        <TabsTrigger value="aba2">Aba 2</TabsTrigger>
        <TabsTrigger value="aba3" disabled>
          Aba 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="aba1">Conteúdo da Aba 1</TabsContent>
      <TabsContent value="aba2">Conteúdo da Aba 2</TabsContent>
      <TabsContent value="aba3">Conteúdo da Aba 3</TabsContent>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("renderiza as abas com role tab", () => {
    render(<TabsExemplo />);

    expect(screen.getAllByRole("tab")).toHaveLength(3);
  });

  it("renderiza a lista de abas com role tablist", () => {
    render(<TabsExemplo />);

    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("exibe o conteúdo da aba ativa por padrão", () => {
    render(<TabsExemplo />);

    expect(screen.getByText("Conteúdo da Aba 1")).toBeInTheDocument();
  });

  it("troca o conteúdo ao clicar em outra aba", async () => {
    const user = userEvent.setup();
    render(<TabsExemplo />);

    await user.click(screen.getByRole("tab", { name: "Aba 2" }));

    expect(screen.getByText("Conteúdo da Aba 2")).toBeInTheDocument();
  });

  it("a aba ativa tem aria-selected='true'", () => {
    render(<TabsExemplo />);

    expect(screen.getByRole("tab", { name: "Aba 1" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("a aba desabilitada tem data-disabled", () => {
    render(<TabsExemplo />);

    expect(screen.getByRole("tab", { name: "Aba 3" })).toHaveAttribute(
      "data-disabled"
    );
  });
});
