import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Input } from "./Input";

describe("Input", () => {
  it("renderiza um elemento input", () => {
    render(<Input placeholder="Seu e-mail" />);

    expect(screen.getByPlaceholderText("Seu e-mail")).toBeInTheDocument();
  });

  it("aplica aria-invalid quando a prop invalid está ativa", () => {
    render(<Input invalid placeholder="Campo com erro" />);

    expect(screen.getByPlaceholderText("Campo com erro")).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("não define aria-invalid quando invalid é false", () => {
    render(<Input placeholder="Normal" />);

    expect(screen.getByPlaceholderText("Normal")).not.toHaveAttribute("aria-invalid");
  });

  it("repassa a prop disabled ao elemento nativo", () => {
    render(<Input disabled placeholder="Inativo" />);

    expect(screen.getByPlaceholderText("Inativo")).toBeDisabled();
  });

  it("aceita um tipo HTML personalizado", () => {
    render(<Input type="password" placeholder="Senha" />);

    expect(screen.getByPlaceholderText("Senha")).toHaveAttribute("type", "password");
  });
});
