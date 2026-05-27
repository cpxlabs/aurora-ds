import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("usa type button por padrão", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByRole("button", { name: "Salvar" })).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("repassa props nativas do botão", () => {
    render(
      <Button disabled variant="ghost">
        Cancelar
      </Button>
    );

    expect(screen.getByRole("button", { name: "Cancelar" })).toBeDisabled();
  });

  it("aplica a variante solid por padrão", () => {
    render(<Button>Ação</Button>);

    const btn = screen.getByRole("button", { name: "Ação" });
    expect(btn.className).toMatch(/button/i);
    expect(btn.className).not.toMatch(/ghost/i);
  });

  it("aplica a variante ghost quando informada", () => {
    render(<Button variant="ghost">Secundário</Button>);

    expect(screen.getByRole("button", { name: "Secundário" }).className).toMatch(/ghost/i);
  });

  it("chama o handler onClick ao ser clicado", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Confirmar</Button>);

    await userEvent.click(screen.getByRole("button", { name: "Confirmar" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renderiza como o elemento filho informado quando asChild está ativo", () => {
    render(
      <Button asChild>
        <a href="/inicio">Início</a>
      </Button>
    );

    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute("href", "/inicio");
  });
});
