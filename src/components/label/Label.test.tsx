import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "./Label";

describe("Label", () => {
  it("renderiza o texto fornecido", () => {
    render(<Label>Nome completo</Label>);

    expect(screen.getByText("Nome completo")).toBeInTheDocument();
  });

  it("renderiza um elemento label", () => {
    render(<Label>Campo</Label>);

    expect(screen.getByText("Campo").tagName).toBe("LABEL");
  });

  it("repassa className extra ao elemento label", () => {
    render(<Label className="minha-classe">Campo</Label>);

    expect(screen.getByText("Campo")).toHaveClass("minha-classe");
  });

  it("repassa a prop htmlFor", () => {
    render(<Label htmlFor="meu-campo">Campo</Label>);

    expect(screen.getByText("Campo")).toHaveAttribute("for", "meu-campo");
  });

  it("aplica classe inválida quando invalid está ativo", () => {
    render(<Label invalid>Campo com erro</Label>);

    expect(screen.getByText("Campo com erro").className).toMatch(/invalid/i);
  });
});
