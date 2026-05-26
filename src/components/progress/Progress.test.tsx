import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Progress } from "./Progress";

describe("Progress", () => {
  it("renderiza com role progressbar", () => {
    render(<Progress value={50} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("define aria-valuenow com o valor fornecido", () => {
    render(<Progress value={75} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "75");
  });

  it("limita o valor máximo a 100", () => {
    render(<Progress value={150} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100");
  });

  it("limita o valor mínimo a 0", () => {
    render(<Progress value={-10} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });

  it("usa o rótulo padrão 'Progresso'", () => {
    render(<Progress value={40} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-label", "Progresso");
  });

  it("aceita um rótulo personalizado", () => {
    render(<Progress value={40} label="Upload em andamento" />);

    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-label",
      "Upload em andamento"
    );
  });

  it("repassa className extra", () => {
    render(<Progress value={50} className="minha-classe" />);

    expect(screen.getByRole("progressbar")).toHaveClass("minha-classe");
  });
});
