import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Separator } from "./Separator";

describe("Separator", () => {
  it("renderiza com role separator", () => {
    render(<Separator />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("usa orientação horizontal por padrão", () => {
    render(<Separator />);

    expect(screen.getByRole("separator")).toHaveAttribute(
      "aria-orientation",
      "horizontal"
    );
  });

  it("aceita orientação vertical", () => {
    render(<Separator orientation="vertical" />);

    expect(screen.getByRole("separator")).toHaveAttribute(
      "aria-orientation",
      "vertical"
    );
  });

  it("repassa className extra", () => {
    render(<Separator className="minha-classe" />);

    expect(screen.getByRole("separator")).toHaveClass("minha-classe");
  });
});
