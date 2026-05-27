import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Button } from "../button/Button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./Dialog";

describe("Dialog", () => {
  it("renderiza o conteúdo e o botão padrão de fechar quando está aberto", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Confirmar ação</DialogTitle>
          <DialogDescription>Tem certeza?</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Confirmar ação")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Fechar diálogo" })).toBeInTheDocument();
  });

  it("abre o dialog ao clicar no trigger", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Abrir</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Título</DialogTitle>
          <DialogDescription>Descrição</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("fecha o dialog ao clicar no botão de fechar", async () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Fechar</DialogTitle>
          <DialogDescription>Clique em fechar</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Fechar diálogo" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("fecha o dialog ao pressionar Escape", async () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Escape</DialogTitle>
          <DialogDescription>Pressione Escape</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
