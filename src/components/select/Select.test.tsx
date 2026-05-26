import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Select } from "./Select";

describe("Select", () => {
  it("renderiza um elemento select", () => {
    render(
      <Select aria-label="País">
        <option value="br">Brasil</option>
      </Select>
    );

    expect(screen.getByRole("combobox", { name: "País" })).toBeInTheDocument();
  });

  it("aplica aria-invalid quando a prop invalid está ativa", () => {
    render(
      <Select invalid aria-label="Campo inválido">
        <option value="">Selecione</option>
      </Select>
    );

    expect(screen.getByRole("combobox", { name: "Campo inválido" })).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("não define aria-invalid quando invalid é false", () => {
    render(
      <Select aria-label="Campo normal">
        <option value="">Selecione</option>
      </Select>
    );

    expect(screen.getByRole("combobox", { name: "Campo normal" })).not.toHaveAttribute(
      "aria-invalid"
    );
  });

  it("repassa a prop disabled ao elemento nativo", () => {
    render(
      <Select disabled aria-label="Campo desabilitado">
        <option value="br">Brasil</option>
      </Select>
    );

    expect(screen.getByRole("combobox", { name: "Campo desabilitado" })).toBeDisabled();
  });

  it("repassa className extra", () => {
    render(
      <Select className="minha-classe" aria-label="Campo">
        <option value="br">Brasil</option>
      </Select>
    );

    expect(screen.getByRole("combobox", { name: "Campo" })).toHaveClass("minha-classe");
  });
});
