import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renderiza com role status", () => {
    render(<Spinner />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("usa o rótulo padrão 'Carregando…'", () => {
    render(<Spinner />);

    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Carregando…");
  });

  it("aceita um rótulo personalizado", () => {
    render(<Spinner label="Aguarde, processando…" />);

    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      "Aguarde, processando…"
    );
  });

  it("repassa className extra", () => {
    render(<Spinner className="minha-classe" />);

    expect(screen.getByRole("status")).toHaveClass("minha-classe");
  });
});
