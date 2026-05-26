import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renderiza um elemento textarea", () => {
    render(<Textarea placeholder="Sua mensagem" />);

    expect(screen.getByPlaceholderText("Sua mensagem")).toBeInTheDocument();
  });

  it("aplica aria-invalid quando a prop invalid está ativa", () => {
    render(<Textarea invalid placeholder="Campo com erro" />);

    expect(screen.getByPlaceholderText("Campo com erro")).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("não define aria-invalid quando invalid é false", () => {
    render(<Textarea placeholder="Normal" />);

    expect(screen.getByPlaceholderText("Normal")).not.toHaveAttribute("aria-invalid");
  });

  it("repassa a prop disabled ao elemento nativo", () => {
    render(<Textarea disabled placeholder="Inativo" />);

    expect(screen.getByPlaceholderText("Inativo")).toBeDisabled();
  });

  it("repassa rows ao elemento nativo", () => {
    render(<Textarea rows={5} placeholder="Longo" />);

    expect(screen.getByPlaceholderText("Longo")).toHaveAttribute("rows", "5");
  });
});
