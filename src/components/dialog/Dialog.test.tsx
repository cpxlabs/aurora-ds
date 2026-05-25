import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./Dialog";

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
});
