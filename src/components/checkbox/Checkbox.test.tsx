import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renderiza um elemento com role checkbox", () => {
    render(<Checkbox aria-label="Aceitar termos" />);

    expect(screen.getByRole("checkbox", { name: "Aceitar termos" })).toBeInTheDocument();
  });

  it("começa desmarcado por padrão", () => {
    render(<Checkbox aria-label="Opção" />);

    expect(screen.getByRole("checkbox", { name: "Opção" })).toHaveAttribute(
      "data-state",
      "unchecked"
    );
  });

  it("começa marcado quando defaultChecked é true", () => {
    render(<Checkbox defaultChecked aria-label="Opção marcada" />);

    expect(screen.getByRole("checkbox", { name: "Opção marcada" })).toHaveAttribute(
      "data-state",
      "checked"
    );
  });

  it("alterna o estado ao clicar", async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Alternável" />);

    const checkbox = screen.getByRole("checkbox", { name: "Alternável" });
    expect(checkbox).toHaveAttribute("data-state", "unchecked");

    await user.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  it("não alterna quando desabilitado", async () => {
    const user = userEvent.setup();
    render(<Checkbox disabled aria-label="Bloqueado" />);

    const checkbox = screen.getByRole("checkbox", { name: "Bloqueado" });
    await user.click(checkbox);

    expect(checkbox).toHaveAttribute("data-state", "unchecked");
  });

  it("alterna o estado com a tecla espaço", async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Teclado" />);

    const checkbox = screen.getByRole("checkbox", { name: "Teclado" });
    checkbox.focus();
    await user.keyboard("[Space]");

    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  it("repassa className extra", () => {
    render(<Checkbox className="minha-classe" aria-label="Checkbox" />);

    expect(screen.getByRole("checkbox", { name: "Checkbox" })).toHaveClass("minha-classe");
  });
});
