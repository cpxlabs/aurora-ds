import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Switch } from "./Switch";

describe("Switch", () => {
  it("renderiza um elemento com role switch", () => {
    render(<Switch aria-label="Ativar notificações" />);

    expect(screen.getByRole("switch", { name: "Ativar notificações" })).toBeInTheDocument();
  });

  it("começa desligado por padrão", () => {
    render(<Switch aria-label="Toggle" />);

    expect(screen.getByRole("switch", { name: "Toggle" })).toHaveAttribute(
      "data-state",
      "unchecked"
    );
  });

  it("começa ligado quando defaultChecked é true", () => {
    render(<Switch defaultChecked aria-label="Toggle ligado" />);

    expect(screen.getByRole("switch", { name: "Toggle ligado" })).toHaveAttribute(
      "data-state",
      "checked"
    );
  });

  it("alterna o estado ao clicar", async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="Alternável" />);

    const toggle = screen.getByRole("switch", { name: "Alternável" });
    expect(toggle).toHaveAttribute("data-state", "unchecked");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("data-state", "checked");
  });

  it("não alterna quando desabilitado", async () => {
    const user = userEvent.setup();
    render(<Switch disabled aria-label="Bloqueado" />);

    const toggle = screen.getByRole("switch", { name: "Bloqueado" });
    await user.click(toggle);

    expect(toggle).toHaveAttribute("data-state", "unchecked");
  });

  it("alterna o estado com a tecla espaço", async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="Teclado" />);

    const toggle = screen.getByRole("switch", { name: "Teclado" });
    toggle.focus();
    await user.keyboard("[Space]");

    expect(toggle).toHaveAttribute("data-state", "checked");
  });

  it("repassa className extra", () => {
    render(<Switch className="minha-classe" aria-label="Switch" />);

    expect(screen.getByRole("switch", { name: "Switch" })).toHaveClass("minha-classe");
  });
});
